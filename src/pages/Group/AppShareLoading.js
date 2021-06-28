/* eslint-disable no-const-assign */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-multi-comp */
import { Button, Card, Icon, List, Progress } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import React, { PureComponent } from 'react';
import ConfirmModal from '../../components/ConfirmModal';
import Result from '../../components/Result';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import globalUtil from '../../utils/global';
import regionUtil from '../../utils/region';
import userUtil from '../../utils/user';
import { openInNewTab } from '../../utils/utils';
import LogShow from '../Component/component/LogShow';
import styles from './Index.less';

@connect(({ user, loading }) => ({
  currUser: user.currentUser,
  loading
}))
class ShareEvent extends React.Component {
  constructor(props) {
    super(props);
    const { data, currUser } = this.props;
    this.state = {
      data: data || {},
      eventId: (data && data.event_id) || '',
      status: (data && data.event_status) || 'not_start',
      opened: false
    };
    this.mount = false;
    const teamName = globalUtil.getCurrTeamName();
    const regionName = globalUtil.getCurrRegionName();
    const region = userUtil.hasTeamAndRegion(currUser, teamName, regionName);
    if (region) {
      this.socketUrl = regionUtil.getEventWebSocketUrl(region);
    }
  }
  componentDidMount = () => {
    this.mount = true;
    this.checkStatus();
  };
  checkStatus = () => {
    const { receiveStartShare } = this.props;
    const { status } = this.state;
    if (status === 'not_start' && receiveStartShare) {
      receiveStartShare(this.startShareEvent);
    }
    this.handleStatus();
  };
  componentWillUnmount = () => {
    this.mount = false;
  };

  reStart = () => {
    this.setState({ eventId: '' });
    this.startShareEvent();
  };

  fetchParams = () => {
    const { shareId } = this.props;
    const { data } = this.state;
    return {
      team_name: globalUtil.getCurrTeamName(),
      share_id: shareId,
      event_id: data && data.ID
    };
  };

  getShareStatus = () => {
    const { dispatch } = this.props;
    const { status, data } = this.state;

    if (status !== 'start' || !this.mount) return;
    // 查询发布状态
    let dispatchtype = 'application/getShareStatus';
    if (data && data.type === 'plugin') {
      // 共享插件状态
      dispatchtype = 'application/getPluginShareEventInShareApp';
    }
    dispatch({
      type: dispatchtype,
      payload: this.fetchParams(),
      callback: res => {
        if (res && res.bean) {
          this.setState(
            {
              status: res.bean.event_status
            },
            () => {
              this.handleStatus();
              setTimeout(() => {
                this.getShareStatus();
              }, 5000);
            }
          );
        }
      }
    });
  };
  handleStatus = () => {
    const { onSuccess, onFail } = this.props;
    const { status } = this.state;
    if (status === 'start') {
      this.getShareStatus();
    }
    if (status === 'success' && onSuccess) {
      onSuccess();
    }
    if (status === 'failure' && onFail) {
      onFail(this);
    }
  };
  startShareEvent = () => {
    const { data, dispatch } = this.props;
    // 开始分享事件
    let dispatchtype = 'application/startShareEvent';
    if (data.type === 'plugin') {
      // 在共享应用中启动插件共享事件
      dispatchtype = 'application/startPluginShareEventInShareApp';
    }

    dispatch({
      type: dispatchtype,
      payload: this.fetchParams(),
      callback: res => {
        if (res && res.bean) {
          this.setState(
            {
              eventId: res.bean.event_id,
              status: res.bean.event_status
            },
            () => {
              // 共享发布状态
              this.getShareStatus();
            }
          );
        }
      }
    });
  };
  renderStatus = () => {
    const { status } = this.state;
    if (status === 'success') {
      return (
        <Icon
          type="check-circle"
          style={{
            color: '#52c41a'
          }}
        />
      );
    }
    if (status === 'failure') {
      return <Icon type="close-circle" style={{ color: 'red' }} />;
    }
    return <Icon type="sync" className="roundloading" />;
  };
  handleCancel = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const { eventId, opened, data, status } = this.state;
    const datas = data || {};
    const isFailure = status && status === 'failure';
    const isSuccess = status && status === 'success';
    const isShowSocket = !isFailure || !isSuccess;
    const isLogs = isFailure || !isSuccess;
    return (
      <div>
        <List.Item>
          <Card style={{ width: '100%' }} hoverable>
            <List.Item.Meta
              title={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span style={{ marginRight: '10px' }}>
                      {this.renderStatus()}
                    </span>
                    {datas.type === 'plugin'
                      ? `插件: ${datas.plugin_name}`
                      : `组件: ${datas.service_name}`}
                  </div>
                  <div>
                    {isLogs && [<a onClick={this.handleCancel}>日志</a>]}
                  </div>
                </div>
              }
            />
          </Card>
        </List.Item>

        {opened && (
          <LogShow
            title="日志"
            width="1000px"
            onOk={this.handleCancel}
            onCancel={this.handleCancel}
            showSocket={isShowSocket}
            EventID={eventId}
            opened={opened}
            socketUrl={this.socketUrl}
            socket={this.props.socket}
          />
        )}
      </div>
    );
  }
}

@connect(({ loading }) => ({ loading }))
export default class shareCheck extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: 'checking',
      shareEventList: [],
      successNum: 0,
      showDelete: false,
      completeLoading: false
    };
    this.fails = [];
    this.mount = false;
  }
  receiveStartShare = callback => {
    if (callback) {
      callback();
    }
  };

  componentDidMount() {
    this.mount = true;
    this.getShareEventInfo();
  }

  getShareEventInfo = () => {
    this.props.dispatch({
      type: 'application/getShareEventInfo',
      payload: this.getParams(),
      callback: data => {
        if (data && data.bean) {
          this.setState({
            shareEventList: data.bean.event_list || [],
            status: !data.bean.is_compelte ? 'checking' : 'success'
          });
        }
      }
    });
  };
  getParams = () => ({
    team_name: globalUtil.getCurrTeamName(),
    share_id: this.props.match.params.shareId,
    appID: this.props.match.params.appID
  });
  componentWillUnmount() {
    this.mount = false;
  }
  handleSuccess = () => {
    this.state.successNum++;
    const { successNum, shareEventList } = this.state;
    if (successNum === shareEventList.length) {
      this.setState({ status: 'success' });
    }
  };
  handleFail = com => {
    this.fails.push(com);
    this.setState({ status: 'failure' });
  };

  handleReStart = () => {
    if (!this.fails.length) return;
    this.fails.forEach(item => {
      item.reStart();
    });
    this.fails = [];
    this.setState({ status: 'checking' });
  };
  handleCompleteShare = () => {
    this.setState({ completeLoading: true });
    const { dispatch } = this.props;
    dispatch({
      type: 'application/completeShare',
      payload: this.getParams(),
      callback: data => {
        if (data && data.app_market_url) {
          openInNewTab(data.app_market_url);
        }
        this.handJump(`/publish`);
      }
    });
  };
  handleGiveUp = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'application/giveupShare',
      payload: this.getParams(),
      callback: () => {
        this.hideShowDelete();
        this.handJump();
      }
    });
  };

  handJump = (target = '') => {
    const { dispatch } = this.props;
    const params = this.getParams();
    dispatch(
      routerRedux.replace(
        `/team/${
          params.team_name
        }/region/${globalUtil.getCurrRegionName()}/apps/${
          params.appID
        }${target}`
      )
    );
  };
  GetPercent = (num, total) => {
    const nums = parseFloat(num);
    const totals = parseFloat(total);
    return total <= 0 ? 0 : `${Math.round((nums / totals) * 10000) / 100.0}`;
  };
  renderBody = () => {
    const params = this.getParams();
    const { shareEventList, status, completeLoading, successNum } = this.state;
    const shareAll = (shareEventList && shareEventList.length) || 0;
    const extra = (
      <div>
        <List
          grid={{
            gutter: 16,
            column: 3
          }}
          bordered={false}
          loading={false}
          itemLayout="horizontal"
          dataSource={shareEventList || []}
          renderItem={item => (
            <ShareEvent
              receiveStartShare={this.receiveStartShare}
              onFail={this.handleFail}
              onSuccess={this.handleSuccess}
              shareId={params.share_id}
              data={item}
            />
          )}
        />
      </div>
    );
    let type = '';
    let title = '';
    let desc = '';
    let actions = [];
    if (status === 'success') {
      type = 'success';
      title = '应用同步成功';
      desc = '';
      actions = [
        <Button onClick={this.showDelete} type="default">
          放弃发布
        </Button>,
        <Button
          loading={completeLoading}
          onClick={this.handleCompleteShare}
          type="primary"
        >
          确认发布
        </Button>
      ];
    }
    if (status === 'checking') {
      type = 'ing';
      title = '应用同步中';
      desc = '此过程可能比较耗时，请耐心等待';
      actions = [
        <Button onClick={this.showDelete} type="default">
          放弃发布
        </Button>
      ];
    }
    if (status === 'failure') {
      type = 'error';
      desc = '请查看以下日志确认问题后重试';
      actions = [
        <Button onClick={this.handleReStart} type="primary">
          重试
        </Button>,
        <Button onClick={this.showDelete} type="default">
          放弃发布
        </Button>
      ];
    }
    return (
      <Result
        className={styles.lists}
        type={type}
        title={title}
        extra={extra}
        actions={actions}
        description={
          <div>
            {desc}
            {status !== 'success' && (
              <Progress
                style={{ padding: '24px 40px' }}
                percent={
                  successNum === shareAll
                    ? 100
                    : this.GetPercent(successNum, shareAll)
                }
                status={status === 'failure' ? 'exception' : 'line'}
              />
            )}
          </div>
        }
      />
    );
  };
  showDelete = () => {
    this.setState({ showDelete: true });
  };
  hideShowDelete = () => {
    this.setState({ showDelete: false });
  };
  render() {
    const { loading } = this.props;
    const { shareEventList, showDelete } = this.state;
    if (!shareEventList.length) return null;
    return (
      <PageHeaderLayout>
        <Card bordered={false}>{this.renderBody()}</Card>
        {showDelete && (
          <ConfirmModal
            disabled={loading.effects['application/giveupShare']}
            onOk={this.handleGiveUp}
            onCancel={this.hideShowDelete}
            title="放弃发布"
            desc="确定要放弃此次发布吗?"
          />
        )}
      </PageHeaderLayout>
    );
  }
}
