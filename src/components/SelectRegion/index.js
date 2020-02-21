import React, { PureComponent, Fragment } from "react";
import { connect } from "dva";
import { Icon, Dropdown, notification } from "antd";
import style from "../SelectTeam/index.less";
import OpenRegion from "../OpenRegion";
import { Link } from "dva/router";
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';

@connect(({ user }) => ({
  currentUser: user.currentUser
}))
export default class SelectTeam extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      teamRegions: [],
      showOpenRegion: false,
      loading: true
    };
  }
  componentDidMount() {
    this.loadTeamRegions();
  }

  loadTeamRegions = () => {
    const { currentTeam } = this.props;
    this.setState({ loading: false, teamRegions: currentTeam.region });
  };
  showOpenRegion = () => {
    this.setState({ showOpenRegion: true });
  };
  handleOpenRegion = regions => {
    if (regions.length == 0) {
      return;
    }
    const { currentTeam } = this.props;
    this.props.dispatch({
      type: "teamControl/openRegion",
      payload: {
        team_name: currentTeam.team_name,
        region_names: regions.join(",")
      },
      callback: () => {
        notification.success({ message: formatMessage({id:'open.success'}) });
        this.cancelOpenRegion();
        this.props.dispatch({
          type: "user/fetchCurrent",
          callback: () => {
            this.props.dispatch(
              routerRedux.replace(
                `/team/${currentTeam.team_name}/region/${regions[0]}/index`
              )
            );
          }
        });
      }
    });
  };
  cancelOpenRegion = () => {
    this.setState({ showOpenRegion: false });
  };
  render() {
    const {
      className,
      currentTeam,
      currentEnterprise,
      currentRegion,
      currentUser
    } = this.props;
    const { teamRegions, loading, showOpenRegion } = this.state;
    const currentTeamRegionLink = `/team/${currentTeam.team_name}/region/${currentRegion.team_region_name}/index`;
    const dropdown = (
      <div className={style.dropBox}>
        <div>
          <div className={style.dropBoxList}>
            <ul>
              {teamRegions.map(item => {
                const link = `/team/${currentTeam.team_name}/region/${item.team_region_name}/index`;
                return (
                  <li key={item.team_region_alias}>
                    <Link to={link} title={item.team_region_alias}>
                      <span>
                        {item.team_region_alias}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {currentUser.is_user_enter_amdin &&
              <div
                className={style.dropBoxListCreate}
                onClick={this.showOpenRegion}
              >
                <Icon type="plus" />
                <FormattedMessage id="header.region.open"></FormattedMessage>
              </div>}
          </div>
        </div>
      </div>
    );

    return (
      <div className={className}>
        <Dropdown overlay={dropdown}>
          <div className={style.selectButton}>
            <Link className={style.selectButtonLink} to={currentTeamRegionLink}>
              <div className={style.selectButtonName}>
                {currentRegion.team_region_alias}
              </div>
              <Icon className={style.selectButtonArray} type="caret-down" />
            </Link>
          </div>
        </Dropdown>
        {showOpenRegion &&
          <OpenRegion
            onSubmit={this.handleOpenRegion}
            onCancel={this.cancelOpenRegion}
          />}
      </div>
    );
  }
}
