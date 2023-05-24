// 团队下的信息

//总览页面
const teamOverview = {
  'teamOverview.app.name': '应用',
  'teamOverview.component.name': '组件',
  'teamOverview.useResource': '使用资源',
  'teamOverview.UserNum': '用户数量(个)',
  'teamOverview.appNum': '应用数量',
  'teamOverview.memoryUsage': '内存使用量',
  'teamOverview.diskUsage': '磁盘使用量',
  'teamOverview.runAppNum': '运行应用数(个)',
  'teamOverview.notRunAppNum': '{ number }个未运行的应用',
  'teamOverview.appSum': '共{ number }个应用',
  'teamOverview.componentSum': '共{ number }个组件',
  'teamOverview.runComponentNum': '运行组件数(个)',
  'teamOverview.notRunComponentNum': '{ number }个未运行的组件',
  'teamOverview.runStatusSort': '运行状态排序',
  'teamOverview.updateTimeSort': '更新时间排序',
  'teamOverview.sortTips':'请选择排序方式',
  'teamOverview.searchTips': '请输入应用名称进行搜索',
  'teamOverview.createApp': '新建应用',
  'teamOverview.update': '更新',
  'teamOverview.memory': '内存',
  'teamOverview.visit': '访问',
  'teamOverview.appList': '应用列表',
  'teamOverview.result.title':'集群端失去响应，稍后重试。',
  'teamOverview.result.description':'若一直无法加载，请联系集群管理员查看集群状态',
  'teamOverview.loadOverview':'重新加载',
  'teamOverview.runAppNums': '运行：{ number }个',
  'teamOverview.notRunAppNums': '未运行：{ number }个',
}

//团队下的应用
const teamApply = {
  'teamApply.title':'应用管理',
  'teamApply.desc':'应用可以是一个工程，一个架构，一个业务系统的管理单元，其由多个组件和应用配置构成。',
  'teamApply.searchTips':'搜索应用',
  'teamApply.search':'搜索',
  'teamApply.createApp':'新建应用',
  'teamApply.appName':'应用名称',
  'teamApply.updateTime':'更新时间',
  'teamApply.createTime':'创建时间',
  'teamApply.componentNumComparison':'组件(运行/总数)',
  'teamApply.memoryNumComparison':'占用内存/分配内存(MB)',
  'teamApply.duplicateRecord':'备份记录',
  'teamApply.releaseRecord':'发布记录',
  'teamApply.remarks':'备注',
}

//团队下的创建 code、image、upload、market、third
const teamAdd = {
  // 公共
  'teamAdd.create.form.appName':'应用名称',
  'teamAdd.create.form.service_cname':'组件名称',
  'teamAdd.create.form.k8s_component_name':'组件英文名称',
  'teamAdd.create.form.user':'仓库用户名',
  'teamAdd.create.form.password':'仓库密码',
  'teamAdd.create.btn.create':'确认创建',
  'teamAdd.create.btn.createComponent':'新建组件',
  'teamAdd.create.error':'参数错误',
  'teamAdd.create.createComponentTitle':'创建组件',
  'teamAdd.create.fileList':'文件列表',
  'teamAdd.create.null_data':'暂无数据',
  
  // code
  'teamAdd.create.code.title':'从源码创建组件',
  'teamAdd.create.code.desc':'从指定源码仓库中获取源码，基于源码信息创建新组件。',
  'teamAdd.create.code.customSource':'自定义源码',
  'teamAdd.create.code.package':'软件包上传',
  'teamAdd.create.code.demo':'官方DEMO',
  'teamAdd.create.code.address':'仓库地址',
  'teamAdd.create.code.versions':'代码版本',
  'teamAdd.create.code.branch':'分支',
  'teamAdd.create.code.fillInUser':'填写仓库账号密码',
  'teamAdd.create.code.fillInPath':'填写子目录路径',
  'teamAdd.create.code.path':'子目录路径',
  'teamAdd.create.code.demoBtn':'查看Dmeo源码',
  'teamAdd.create.code.href':'查看源码',
  'teamAdd.create.code.demo2048':'2048小游戏',
  'teamAdd.create.code.demoStatic':'静态Web：hello world !',
  // image
  'teamAdd.create.image.title':'从Docker镜像创建组件',
  'teamAdd.create.image.desc':'支持从单一镜像、Docker命令、DockerCompose配置创建应用。',
  'teamAdd.create.image.tabImage':'指定镜像',
  'teamAdd.create.image.DockerRun':'DockerRun 命令',
  'teamAdd.create.image.docker_cmd':'命令',
  'teamAdd.create.image.hint1':'这是一个私有仓库?',
  'teamAdd.create.image.hint2':'填写仓库账号密码',
  'teamAdd.create.image.mirrorAddress':'镜像地址',
  'teamAdd.create.image.config':'DockerCompose配置',
  'teamAdd.create.image.notice':'注意',
  'teamAdd.create.image.configHint':'注意将解析 DockerCompose 配置中的组件相关属性用来便捷创建组件，其中的动态变量不支持解析赋值, 其中使用了私有仓库的镜像?',

  //upload
  'teamAdd.create.upload.title':'Kubernetes YAML Helm',
  'teamAdd.create.upload.desc':'支持从 Kubernetes YAML创建组件和 Kubernetes 已有资源导入。',
  'teamAdd.create.upload.format':'上传格式',
  'teamAdd.create.upload.uploadFiles':'上传文件',
  'teamAdd.create.upload.uploadFiles.yaml':'YAML文件上传',
  'teamAdd.create.upload.uploadFiles.k8s':'导入Kubernetes已有资源',
  'teamAdd.create.upload.uploadFiles.helm':'Helm 命令',
  'teamAdd.create.upload.uploadJWar':'支持Jar、War格式上传文件',
  'teamAdd.create.upload.uploadYaml':'只支持yaml格式上传多文件',

  //market
  'teamAdd.create.market.desc':'从本地组件库或应用商店一键安装应用。',
  //third
  'teamAdd.create.third.title':'添加第三方组件',
  'teamAdd.create.third.desc':'第三方组件，即运行于平台集群外的组件，在平台中创建组件即可以将其与平台网关无缝对接。同时也可以被平台内服务访问，满足用户通过平台对各类组件进行统一的监控和管理的需要。',
  'teamAdd.create.third.componentRegister':'组件注册方式',
  'teamAdd.create.third.staticRegister':'静态注册',
  'teamAdd.create.third.apiRegister':'API注册',
  'teamAdd.create.third.componentAddress':'组件地址',
  'teamAdd.create.third.href':'点击阅读文档',
  'teamAdd.create.third.createNewApp':'创建新应用',
  'teamAdd.create.third.Alert.warning':'API地址在组件创建后获取',

}

//团队下的网关
const teamGateway = {

  // strategy
  'teamGateway.strategy.title':'访问控制',
  'teamGateway.strategy.manage':'网关管理',
  'teamGateway.strategy.btn.add':'添加策略',
  'teamGateway.strategy.placeholder.http':'搜索域名/应用/组件',
  'teamGateway.strategy.placeholder.tcp':'搜索端口/应用/组件',
  'teamGateway.strategy.btn.search':'搜索',
  'teamGateway.strategy.table.domain':'域名',
  'teamGateway.strategy.table.type':'类型',
  'teamGateway.strategy.table.end_point':'端口',
  'teamGateway.strategy.table.protocol':'协议',
  'teamGateway.strategy.table.is_senior':'高级路由',
  'teamGateway.strategy.table.certificate_alias':'证书',
  'teamGateway.strategy.table.group_name':'应用',
  'teamGateway.strategy.table.service_cname':'组件（端口）',
  'teamGateway.strategy.table.operate':'操作',
  'teamGateway.strategy.table.config':'参数配置',
  'teamGateway.strategy.table.edit':'编辑',
  'teamGateway.strategy.table.delete':'删除',
  'teamGateway.strategy.table.type.default':'默认',
  'teamGateway.strategy.table.type.custom':'自定义',
  'teamGateway.strategy.table.type.tooltip':'请开启对外服务方可操作',
  'teamGateway.strategy.table.type.tooltip.onclick':'请点击开启对外服务方可操作',
  'teamGateway.strategy.table.type.open':'开启',
  'teamGateway.strategy.table.type.joinMsg':'连接信息',
  'teamGateway.strategy.table.type.null':'无',

  // certificate
  'teamGateway.certificate.title':'证书管理',
  'teamGateway.certificate.desc':'TLS证书管理，支持服务端证书，支持展示证书过期时间。',
  'teamGateway.certificate.btn.add':'添加证书',
  'teamGateway.certificate.table.name':'证书名称',
  'teamGateway.certificate.table.address':'证书地址',
  'teamGateway.certificate.table.time':'过期时间',
  'teamGateway.certificate.table.type':'证书类型',
  'teamGateway.certificate.table.source':'证书来源',
  'teamGateway.certificate.table.operate':'操作',
  'teamGateway.certificate.table.edit':'编辑',
  'teamGateway.certificate.table.update':'更新',
  'teamGateway.certificate.table.delete':'删除',

  // control
  'teamGateway.control.table.default':'默认',
  'teamGateway.control.table.GatewayApi':'扩展网关',

  // HttpTable
  'teamGateway.HttpTable.title':'确认要添加吗？',
  'teamGateway.HttpTable.heards':'请求头',
  'teamGateway.HttpTable.weight':'权重',
  'teamGateway.HttpTable.look':'查看详情',
  'teamGateway.HttpTable.undeployed':'当前组件属于未部署状态',
  'teamGateway.HttpTable.start':'启动成功',
  'teamGateway.HttpTable.footer':'您选择的组件未开启外部访问，是否自动打开并添加此访问策略？',
  'teamGateway.HttpTable.appStatusVisable':'友情提示',
  'teamGateway.HttpTable.text':'当前组件处于关闭状态，启动后方可访问，是否启动组件？',

  // TcpTable
  'teamGateway.TcpTable.attr_value':'变量值',
  'teamGateway.TcpTable.attr_name':'变量名',
  'teamGateway.TcpTable.name':'说明',

  'teamGateway.TcpTable.title':'确认要添加吗？',
  'teamGateway.TcpTable.visibleModal':'访问信息',
  'teamGateway.TcpTable.protocol.agreement':'您当前的访问协议是',
  'teamGateway.TcpTable.protocol.address':'推荐访问地址',
  'teamGateway.TcpTable.protocol.open':'打开MySQL客户端访问',
  'teamGateway.TcpTable.copy':'复制',
  // DrawerGateWayAPI
  'teamGateway.DrawerGateWayAPI.name':'名称',
  'teamGateway.DrawerGateWayAPI.Gateway':'网关类型',
  'teamGateway.DrawerGateWayAPI.backend':'后端参数为必填项。',
  'teamGateway.DrawerGateWayAPI.pathEmpty':'请填写完整的path参数。',
  'teamGateway.DrawerGateWayAPI.headerEmpty':'请填写完整的headers参数。',
  'teamGateway.DrawerGateWayAPI.allEmpty':'请填写完整的后端参数。',
  'teamGateway.DrawerGateWayAPI.Service':'当类型为Service类型时，port为必填选项。',
  'teamGateway.DrawerGateWayAPI.RequestRedirect':'当类型为请求重定向时，域名为必填选项。',
  'teamGateway.DrawerGateWayAPI.add':'添加 GatewayAPI',
  'teamGateway.DrawerGateWayAPI.edit':'编辑 GatewayAPI',
  'teamGateway.DrawerGateWayAPI.type':'网关类型',
  'teamGateway.DrawerGateWayAPI.appName':'选择应用',
  'teamGateway.DrawerGateWayAPI.hosts':'域名',
  'teamGateway.DrawerGateWayAPI.input_hosts':'请输入正确的域名',
  'teamGateway.DrawerGateWayAPI.rules':'路由规则',
  'teamGateway.DrawerGateWayAPI.rules.message':'请至少填写后端选项',

  'teamGateway.DrawerGateWayAPI.hostPlaceholder':'请填写域名地址',

  'teamGateway.DrawerGateWayAPI.RoutingRule.rule':'规则集',
  'teamGateway.DrawerGateWayAPI.Rule.matching':'条件匹配',

  'teamGateway.DrawerGateWayAPI.BackEnd.title':'后端路由',
  'teamGateway.DrawerGateWayAPI.BackEnd.Internal':'内部域名',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_Internal':'请输入内部域名',
  'teamGateway.DrawerGateWayAPI.BackEnd.type':'类型',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_type':'请选择类型',

  'teamGateway.DrawerGateWayAPI.BackEnd.namespance':'命名空间',
  'teamGateway.DrawerGateWayAPI.BackEnd.weight':'权重',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_namespace':'请输入命名空间',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_weight':'请填写权重',
  'teamGateway.DrawerGateWayAPI.BackEnd.port':'端口',
  'teamGateway.DrawerGateWayAPI.BackEnd.input_port':'请输入端口号',
  'teamGateway.DrawerGateWayAPI.BackEnd.required':'(必填)',
  'teamGateway.DrawerGateWayAPI.BackEnd.Not_required':'(非必填)',

  'teamGateway.DrawerGateWayAPI.Redirection.Advanced_rule':'高级规则',
  'teamGateway.DrawerGateWayAPI.Redirection.type':'类型：',
  'teamGateway.DrawerGateWayAPI.Redirection.Cover':'覆盖：',
  'teamGateway.DrawerGateWayAPI.Redirection.add':'添加：',
  'teamGateway.DrawerGateWayAPI.Redirection.del':'删除：',
  'teamGateway.DrawerGateWayAPI.Redirection.Redirection':'重定向配置：',
  'teamGateway.DrawerGateWayAPI.Redirection.select':'请选择协议',

  'teamGateway.DrawerGateWayAPI.Filtration.type':'协议：',
  'teamGateway.DrawerGateWayAPI.Filtration.select_type':'请选择协议',

  'teamGateway.DrawerGateWayAPI.Filtration.hostname':'域名：',
  'teamGateway.DrawerGateWayAPI.Filtration.input_hostname':'请填写域名',

  'teamGateway.DrawerGateWayAPI.Filtration.port':'端口：',
  'teamGateway.DrawerGateWayAPI.Filtration.input_port':'请输入端口号',

  'teamGateway.DrawerGateWayAPI.Filtration.status_code':'状态码：',
  'teamGateway.DrawerGateWayAPI.Filtration.input_status_code':'请输入状态码',

  'teamGateway.DrawerGateWayAPI.Filtration.Listening':'监听项',
  'teamGateway.DrawerGateWayAPI.Filtration.select_Listening':'选择监听项',
  'teamGateway.DrawerGateWayAPI.Filtration.all_Listening':'全部监听',

  'teamGateway.license.noAuthority':'暂无权限，请联系企业管理员修改。',
  'teamGateway.license.delete':'确认要删除吗？',
  'teamGateway.license.later':'稍后添加',
  'teamGateway.license.now':'现在就去',
  'teamGateway.license.go':'配置网关证书请移步至',
  'teamGateway.license.path':'平台管理视图 --> 扩展 --> 能力页面',
  'teamGateway.license.find':'找到需要修改的网关实现',
  'teamGateway.license.file':'的 yaml文件',
  'teamGateway.license.in':'在',
  'teamGateway.license.add':'属性下增加如下字段：',
  'teamGateway.license.copy':'复制字段',
  'teamGateway.license.pattern': "必须由小写字母、数字、字符'-'或'.'组成，并且必须以字母、数字开头和结尾",

  'teamGateway.license.Precise': "精准匹配",
  'teamGateway.license.regular': "正则匹配",
  'teamGateway.license.prefix': "前缀匹配",
  'teamGateway.license.request': "请求重定向",
  'teamGateway.license.processing': "加工请求头",
}

const teamPlugin = {
  'teamPlugin.title':'我的插件',
  'teamPlugin.list':'我的插件',
  'teamPlugin.desc':'应用插件是标准化的为应用提供功能扩展，与应用共同运行的程序。',
  'teamPlugin.hint':'从应用市场安装/新建插件',
  'teamPlugin.btn.marketAdd':'从应用市场安装',
  'teamPlugin.btn.add':'新建插件',
  'teamPlugin.btn.delete':'删除',
  'teamPlugin.btn.manage':'管理',
  'teamPlugin.btn.install':'安装',
  'teamPlugin.install.title':'安装插件',
  'teamPlugin.create.title':'创建插件',
  'teamPlugin.create.lable.plugin_alias':'插件名称',
  'teamPlugin.create.lable.build_source':'安装来源',
  'teamPlugin.create.lable.category':'插件类别',
  'teamPlugin.create.lable.image':'镜像地址',
  'teamPlugin.create.lable.code_repo':'源码地址',
  'teamPlugin.create.lable.username':'仓库用户名',
  'teamPlugin.create.lable.password':'仓库密码',
  'teamPlugin.create.lable.code_version':'代码版本',
  'teamPlugin.create.lable.min_cpu':'CPU',
  'teamPlugin.create.lable.build_cmd':'启动命令',
  'teamPlugin.create.lable.update_info':'更新说明',
  'teamPlugin.create.lable.desc':'一句话说明',
  'teamPlugin.create.pages.key':'配置授权Key',
  'teamPlugin.create.pages.btn':'填写仓库账号密码',
  'teamPlugin.create.pages.image':'镜像',
  'teamPlugin.create.pages.dockerfile':'Dockerfile',
  'teamPlugin.create.pages.entrance':'入口网络',
  'teamPlugin.create.pages.exit':'出口网络',
  'teamPlugin.create.pages.entrance_exit':'出口入口共治网络',
  'teamPlugin.create.pages.performance':'性能分析',
  'teamPlugin.create.pages.initialize':'初始化类型',
  'teamPlugin.create.pages.ordinary':'一般类型',
  'teamPlugin.create.pages.monitor':'监控',
  'teamPlugin.create.pages.cpu':'CPU分配额0为不限制，1000m=1core。',
  // 补充
  'teamPlugin.create.pages.null':'不能存在空格',
  'teamPlugin.create.pages.input_add':'请输入镜像地址（名称:tag）如nginx:1.11',
  'teamPlugin.create.pages.input_git':'请输入源码Git地址（必须包含Dockerfile文件)',
  'teamPlugin.create.pages.input':'请输入代码版本',
}

const teamManage = {
  'teamManage.create.time':'创建于',
  'teamManage.tabs.exitTeam':'删除团队',
  'teamManage.tabs.deleteTeam':'退出团队',
  'teamManage.tabs.setting':'团队设置',
  
  // 动态 dynamic
  'teamManage.tabs.dynamic':'动态',
  'teamManage.tabs.dynamic.notDynamic':'暂无动态',
  'teamManage.tabs.dynamic.meta.app':'应用',
  'teamManage.tabs.dynamic.title.addTeam':'以下用户申请加入团队',
  'teamManage.tabs.dynamic.modal.title':'用户授权',
  'teamManage.tabs.dynamic.table.user':'用户',
  'teamManage.tabs.dynamic.form.lable':'选择角色',
  'teamManage.tabs.dynamic.form.placeholder':'请选择角色',
  'teamManage.tabs.dynamic.table.time':'申请时间',
  'teamManage.tabs.dynamic.table.operate':'操作',
  'teamManage.tabs.dynamic.table.btn.through':'通过',
  'teamManage.tabs.dynamic.table.btn.refuse':'拒绝',
  'teamManage.tabs.dynamic.title.dynamic':'动态',
  'teamManage.tabs.dynamic.table.name':'应用名称',
  'teamManage.tabs.dynamic.table.operateTime':'操作时间',
  'teamManage.tabs.dynamic.table.operateContent':'操作内容',
  'teamManage.tabs.dynamic.table.operateDetail':'操作详情',
  'teamManage.tabs.dynamic.table.btn.checkDetail':'查看详情',
  'teamManage.tabs.dynamic.table.btn.popconfirm':'确定要拒绝用户么?',

  //成员 member
  'teamManage.tabs.member':'成员',
  'teamManage.tabs.member.title':'团队成员',
  'teamManage.tabs.member.btn.add':'添加成员',
  'teamManage.tabs.member.table.userName':'用户名称',
  'teamManage.tabs.member.table.name':'姓名',
  'teamManage.tabs.member.table.email':'邮箱',
  'teamManage.tabs.member.table.role':'角色',
  'teamManage.tabs.member.table.operate':'操作',
  'teamManage.tabs.member.table.delete':'删除',
  'teamManage.tabs.member.table.editRole':'修改角色',
  'teamManage.tabs.member.table.turnOver':'移交团队',

  //集群 cluster
  'teamManage.tabs.cluster':'集群',
  'teamManage.tabs.cluster.openCluster':'已开通集群',
  'teamManage.tabs.cluster.open':'开通集群',
  'teamManage.tabs.cluster.unload':'卸载',
  'teamManage.tabs.cluster.opened':'开通于',
  'teamManage.tabs.cluster.null':'暂无集群',
  'teamManage.tabs.cluster.unloadCluster':'卸载集群',
  'teamManage.tabs.cluster.unloadCluster.desc':'卸载当前集群将同时删除团队在该集群创建的相关资源，确认要卸载吗?',
  // 角色 role
  'teamManage.tabs.role':'角色',
  'teamManage.tabs.role.btn.add':'添加角色',
  'teamManage.tabs.role.null':'暂无角色、请先添加角色',
  'teamManage.tabs.role.title':'角色列表',
  'teamManage.tabs.role.list.admin':'管理员',
  'teamManage.tabs.role.list.developer':'开发者',
  'teamManage.tabs.role.list.viewer':'观察者',
  'teamManage.tabs.role.list.access':'访问者',
  'teamManage.tabs.role.list.owner':'拥有者',
  'teamManage.tabs.role.list.admin':'企业管理员',
  'teamManage.tabs.role.list.app_store':'应用市场管理员',
  // 权限设置 Permissions
  'teamManage.tabs.role.list.permissions':'权限设置',
  'teamManage.tabs.role.list.permissions.btn.cancel':' 取消',
  'teamManage.tabs.role.list.permissions.roleName':'角色名称',
  'teamManage.tabs.role.list.permissions.allot':'权限分配',
  'teamManage.tabs.role.list.permissions.teamMsg':'查看团队信息',
  'teamManage.tabs.role.list.permissions.teamDynamic':'查看团队动态',
  'teamManage.tabs.role.list.permissions.maven':'管理Maven配置',
  'teamManage.tabs.role.list.permissions.teamRegion':'团队集群管理',
  'teamManage.tabs.role.list.permissions.teamMember':'团队成员管理',
  'teamManage.tabs.role.list.permissions.teamRole':'团队角色管理',
  'teamManage.tabs.role.list.permissions.app_config_group':'应用配置组管理',
  'teamManage.tabs.role.list.permissions.teamRegistryAuth':'镜像仓库授权信息管理',
  'teamManage.tabs.role.list.permissions.certificate':'证书管理',
  'teamManage.tabs.role.list.permissions.gatewayRule':'网关访问策略管理',
  'teamManage.tabs.role.list.permissions.app':'应用管理',
  'teamManage.tabs.role.list.permissions.component':'组件管理',
  'teamManage.tabs.role.list.permissions.plugin':'插件管理',
  'teamManage.tabs.role.list.permissions.edit':'保存修改',
  'teamManage.tabs.role.list.permissions.add':'新增',

  //镜像仓库授权信息 image
  'teamManage.tabs.image':'镜像仓库授权信息',
  'teamManage.tabs.image.table.imageAddress':'镜像仓库地址',
  'teamManage.tabs.image.table.user':'用户名',
  'teamManage.tabs.image.table.password':'密码',
  'teamManage.tabs.image.table.operate':'操作',
  'teamManage.tabs.image.table.btn.add':'添加',
  'teamManage.tabs.image.table.btn.edit':'修改',
  'teamManage.tabs.image.table.btn.delete':'删除',
  
}

const teamOther = {
  'teamOther.AddThirdParty.start':'从第三方组件开始',
  'teamOther.AddThirdParty.Third':'第三方组件',
  'teamOther.AddThirdParty.add':'添加第三方组件',
  'teamOther.Group.tit':'应用信息',
  'teamOther.Group.desc':'应用由一个或多个服务组成，可以管理一个完整业务系统，比如：OA、CRM、ERP等，也可以管理一个完整的微服务架构的系统，这里展示了应用的基本信息。',
  'teamOther.Group.app':'应用拓扑图',
  'teamOther.Group.know':'已知晓',
  'teamOther.Group.Topological':'这是应用内部的服务拓扑图，通过拓扑图可以整体了解服务(组件)的运行状态和依赖关系，每新增一个服务(组件)，此处都会展示出一个六边形，点击六边形可以进入服务(组件)的管理页面。',
  // AllBackup
  'teamOther.AllBackup.Backup':'备份中',
  'teamOther.AllBackup.success':'备份成功',
  'teamOther.AllBackup.failed':'备份失败',
  'teamOther.AllBackup.create_time':'备份时间',
  'teamOther.AllBackup.user':'备份人',
  'teamOther.AllBackup.mode':'备份模式',
  'teamOther.AllBackup.full-online':'云端备份',
  'teamOther.AllBackup.full-offline':'本地备份',
  'teamOther.AllBackup.backup_size':'包大小',
  'teamOther.AllBackup.state':'状态',
  'teamOther.AllBackup.app':'备份应用',
  'teamOther.AllBackup.remarks':'备注',
  'teamOther.AllBackup.operation':'操作',
  'teamOther.AllBackup.recovery':'恢复',
  'teamOther.AllBackup.transfer':'迁移',
  'teamOther.AllBackup.export':'导出',
  'teamOther.AllBackup.delete':'删除',
  'teamOther.AllBackup.records':'应用备份记录',
  'teamOther.AllBackup.all_records':'应用备份记录是当前团队下的所有备份记录，包括已删除应用的备份记录，基于备份可以恢复或迁移已删除的应用',

  'teamOther.edit.editHead':'修改负责人',
  'teamOther.edit.head':'负责人',
  'teamOther.edit.choose':'请选择负责人',
  'teamOther.edit.go':'去认证',
  'teamOther.edit.unbounded':'尚未绑定{type}账号',

  'teamOther.CreateAppFromMarketForm.title':'要安装到哪个应用?',
  'teamOther.CreateAppFromMarketForm.install':'安装版本',
  'teamOther.CreateAppFromMarketForm.setect':'请选择版本',
  'teamOther.CreateAppFromMarketForm.app':'选择应用',
  'teamOther.CreateAppFromMarketForm.setect_app':'请选择应用',

  'teamOther.CreateAppFromHelmForm.name_app':'应用名称',
  'teamOther.CreateAppFromHelmForm.version_app':'应用版本',
  'teamOther.CreateAppFromHelmForm.name':'应用名称已存在',
  'teamOther.CreateAppFromHelmForm.input_name':'请填写应用名称',
  'teamOther.CreateAppFromHelmForm.min':'应用名称最小长度4位',
  'teamOther.CreateAppFromHelmForm.max':'应用名称最大长度53位',
  'teamOther.CreateAppFromHelmForm.only':'只支持小写字母和数字开头结尾',
  'teamOther.CreateAppFromHelmForm.note':'应用备注',
  'teamOther.CreateAppFromHelmForm.max_length':'最大长度255位',
  'teamOther.CreateAppFromHelmForm.note_app':'请填写应用备注信息',

  'teamOther.CreateAppFromPlugin.been_installed':'已安装',
  'teamOther.CreateAppFromPlugin.upgrade':'升级',

  'teamOther.move_team.name':'修改团队名称',
  'teamOther.move_team.null':'不能为空!',
  'teamOther.move_team.max':'最大长度32位',
  'teamOther.move_team.input_name':'请输入新的团队名称',
  'teamOther.move_team.name_label':'修改名称',
  'teamOther.move_team.logo_label':'修改团队信息',

  'teamOther.manage.structure':'构建',
  'teamOther.manage.log':'查看构建日志',
  'teamOther.manage.state':'构建状态',
  'teamOther.manage.list':'插件列表',
  'teamOther.manage.information':'版本基础信息',
  'teamOther.manage.modification':'确认修改',
  'teamOther.manage.management':'配置组管理',
  'teamOther.manage.config_name':'配置项名',
  'teamOther.manage.service_meta_type':'依赖元数据类型',
  'teamOther.manage.injection':'注入类型',
  'teamOther.manage.options':'配置项',
  'teamOther.manage.attr_name':'属性名:',
  'teamOther.manage.attr_type':'属性类型:',
  'teamOther.manage.attr_alt_value':'可选值:',
  'teamOther.manage.is_change':'可否修改:',
  'teamOther.manage.yes_change':'可修改',
  'teamOther.manage.no_change':'不可修改',
  'teamOther.manage.attr_info':'简短说明:',
  'teamOther.manage.action':'操作',
  'teamOther.manage.edit':'修改',
  'teamOther.manage.delete':'删除',
  'teamOther.manage.add':'新增配置',
  'teamOther.manage.title':'配置文件和共享存储',
  'teamOther.manage.name':'名称',
  'teamOther.manage.path':'挂载路径',
  'teamOther.manage.type':'存储类型',
  'teamOther.manage.share':'共享存储',
  'teamOther.manage.add_file':'配置文件',
  'teamOther.manage.add_storage':'新增存储',
  'teamOther.manage.already_installed':'已安装当前插件的组件',
  'teamOther.manage.Component_name':'组件名称',
  'teamOther.manage.version':'安装版本',
  'teamOther.manage.look':'查看已安装插件',
  'teamOther.manage.edit_config':'修改配置组',

  'teamOther.AddOrEditConfig.input':'请输入可选值',
  'teamOther.AddOrEditConfig.only':'只能由 - . _ 字母和数字组成，不能以数字开头',
  'teamOther.AddOrEditConfig.input_name':'请输入属性名',
  'teamOther.AddOrEditConfig.max':'最大长度32位',
  'teamOther.AddOrEditConfig.name':'属性名',
  'teamOther.AddOrEditConfig.all_agreement':'所有协议',
  'teamOther.AddOrEditConfig.agreement':'协议',
  'teamOther.AddOrEditConfig.select_agreement':'选择协议',
  'teamOther.AddOrEditConfig.string':'字符串',
  'teamOther.AddOrEditConfig.choice':'单选',
  'teamOther.AddOrEditConfig.Multiple':'多选',
  'teamOther.AddOrEditConfig.Default':'默认值',
  'teamOther.AddOrEditConfig.max_length':'最大长度65535位',
  'teamOther.AddOrEditConfig.tooltip':'单选或多选的可选值， 多个用逗号分割，如：value1, value2',
  'teamOther.AddOrEditConfig.Optional_values':'可选值',
  'teamOther.AddOrEditConfig.Modifiable':'可修改',
  'teamOther.AddOrEditConfig.unModifiable':'不可修改',
  'teamOther.AddOrEditConfig.Max':'最大长度40位',
  'teamOther.AddOrEditConfig.explain':'简要说明',
  'teamOther.AddOrEditConfig.add':'新增配置组',
  'teamOther.AddOrEditConfig.config_name':'配置组名',
  'teamOther.AddOrEditConfig.enter_name':'请输入配置组名',
  'teamOther.AddOrEditConfig.rely_on':'依赖元数据',
  'teamOther.AddOrEditConfig.unrely_on':'不依赖',
  'teamOther.AddOrEditConfig.port':'组件端口',
  'teamOther.AddOrEditConfig.downstream':'下游组件端口',
  'teamOther.AddOrEditConfig.type':'注入类型',
  'teamOther.AddOrEditConfig.env':'环境变量',
  'teamOther.AddOrEditConfig.find':'主动发现',
  'teamOther.AddOrEditConfig.config':'配置项',
  'teamOther.HelmCmdForm.msg':'错误信息',
  'teamOther.HelmCmdForm.error':'安装失败！请检查命令行语句是否有误！',
  'teamOther.HelmCmdForm.success':'安装成功',


}

export default Object.assign({}, teamOverview, teamApply, teamAdd, teamGateway, teamPlugin, teamManage, teamOther);