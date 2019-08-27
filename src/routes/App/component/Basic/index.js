import React, { PureComponent } from "react";
import {
  Button,
  Icon,
  Modal,
  Form,
  Checkbox,
  Select,
  Tooltip,
  Row,
  Col
} from "antd";
import globalUtil from "../../../../utils/global";
import numeral from "numeral";
import styles from "../../Index.less";

@Form.create()
class Index extends PureComponent {
  constructor(arg) {
    super(arg);
    this.state = {};
  }
  componentDidMount() {}

  handleMore = state => {
    const { handleMore } = this.props;
    handleMore && handleMore(state);
  };
  render() {
    const { status, beanData, more, memory, disk, dataList } = this.props;
    return (
      <Row gutter={24}>
        <Col xs={24} xm={24} md={24} lg={24} xl={24}>
          <div
            className={styles.buildBox}
            style={{
              background: globalUtil.fetchStateBJColor(status && status.status)
            }}
          >
            <div className={styles.buildContent}>
              <div className={styles.buildLeftBox}>
                <h2
                  className={styles.buildState}
                  style={{
                    color: globalUtil.fetchStateColor(status && status.status)
                  }}
                >
                  {(status && status.status_cn) || ""}
                </h2>
                <div className={styles.buildCommitInfo}>
                  <ul className={styles.buildInfo}>
                    <li>
                      <a target="_blank">
                        {globalUtil.fetchSvg("runTime")}
                        运行
                        <span
                          style={{
                            color: "rgba(0,0,0,0.45)",
                            paddingLeft: "20px"
                          }}
                        >
                          {status && status.start_time
                            ? globalUtil.fetchTime(
                                Date.parse(new Date()) -
                                  new Date(status.start_time).getTime()
                              )
                            : ""}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        {globalUtil.fetchSvg("distributionMemory")}
                        分配
                        <Tooltip title={numeral(memory).format("0,0")}>
                          <span
                            style={{
                              color: "rgba(0,0,0,0.45)",
                              padding: "0 20px",
                              minWidth: "80px"
                            }}
                          >
                            {numeral(memory).format("0,0")}
                          </span>
                        </Tooltip>
                        MB 内存
                      </a>
                    </li>
                    <li>
                      <a>
                        {globalUtil.fetchSvg("useDisk")}
                        占用
                        <Tooltip title={numeral(disk).format("0,0")}>
                          <span
                            style={{
                              color: "rgba(0,0,0,0.45)",
                              padding: "0 20px",
                              minWidth: "80px"
                            }}
                          >
                            {numeral(disk).format("0,0")}
                          </span>
                        </Tooltip>
                        MB 磁盘
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.buildRightBox}>
                <h2 className={` ${styles.alcen} ${styles.buildState} `}>
                  <span className={` ${styles.alcen} ${styles.buildwidth} `}>
                    {globalUtil.fetchSvg("version")}

                    <span style={{ color: "rgba(0,0,0,0.65)" }}>版本号</span>
                  </span>
                  <span>
                    {beanData && beanData.build_version
                      ? beanData.build_version
                      : ""}
                  </span>
                </h2>
                <div className={styles.buildCommitInfo}>
                  <ul className={styles.buildInfo}>
                    <li>
                      <a target="_blank">
                        <span
                          className={` ${styles.alcen} ${styles.buildwidth} `}
                        >
                          {globalUtil.fetchSvg("warehouse")}
                          {beanData &&
                          beanData.kind &&
                          beanData.kind === "源码构建"
                            ? "代码版本"
                            : "仓库地址"}
                        </span>
                        <Tooltip
                          title={
                            beanData &&
                            (beanData.kind && beanData.kind === "源码构建"
                              ? beanData.code_version && beanData.code_version
                              : beanData.image_domain && beanData.image_domain)
                          }
                        >
                          <span className={styles.buildText}>
                            {beanData &&
                              (beanData.kind && beanData.kind === "源码构建"
                                ? beanData.code_version && beanData.code_version
                                : beanData.image_domain &&
                                  beanData.image_domain)}
                          </span>
                        </Tooltip>
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                        <span
                          className={` ${styles.alcen} ${styles.buildwidth} `}
                        >
                          {globalUtil.fetchSvg("basicInfo")}

                          {beanData &&
                          beanData.kind &&
                          beanData.kind === "源码构建"
                            ? "提交信息"
                            : "镜像名称"}
                        </span>
                        <Tooltip
                          title={
                            beanData &&
                            (beanData.kind && beanData.kind === "源码构建"
                              ? beanData.code_commit_msg &&
                                beanData.code_commit_msg
                              : beanData.image_repo && beanData.image_repo)
                          }
                        >
                          <span className={styles.buildText}>
                            {beanData &&
                              (beanData.kind && beanData.kind === "源码构建"
                                ? beanData.code_commit_msg &&
                                  beanData.code_commit_msg
                                : beanData.image_repo && beanData.image_repo)}
                          </span>
                        </Tooltip>
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                        <span
                          className={` ${styles.alcen} ${styles.buildwidth} `}
                        >
                          {globalUtil.fetchSvg("branch")}

                          {beanData &&
                          beanData.kind &&
                          beanData.kind === "源码构建"
                            ? "代码分支"
                            : "镜像tag"}
                        </span>
                        <Tooltip
                          title={
                            beanData &&
                            (beanData.kind && beanData.kind === "源码构建"
                              ? beanData.code_branch && beanData.code_branch
                              : beanData.image_tag && beanData.image_tag)
                          }
                        >
                          <span className={styles.buildText}>
                            {beanData &&
                              (beanData.kind && beanData.kind === "源码构建"
                                ? beanData.code_branch && beanData.code_branch
                                : beanData.image_tag && beanData.image_tag)}
                          </span>
                        </Tooltip>
                      </a>
                    </li>
                  </ul>
                  <p className={styles.buildAuthor}>
                    {dataList && dataList.length > 0 && !more ? (
                      <a
                        onClick={() => {
                          this.handleMore(true);
                        }}
                      >
                        查看更多版本
                      </a>
                    ) : (
                      more === true && (
                        <a
                          onClick={() => {
                            this.handleMore(false);
                          }}
                        >
                          返回实例列表
                        </a>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Index;
