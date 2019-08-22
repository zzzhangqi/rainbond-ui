/*

	当对应用进行重新部署、启动、关闭、回滚等操作时会先去服务器请求一个操作事件eventId
	请求成功后会根据这个eventId发起ajax进行相应的操作
	操作成功后可以用webSocket来获取对应的操作日志信息， 需要把eventId send给服务器
	这个类就是对本webSocket的封装, 该类不会对需要的参数做校验

	本类依赖TimerQueue工具类
*/

import TimerQueue from './timerQueue';
var Convert = require('ansi-to-html');
var convert = new Convert();

function noop() {}

function AppPubSubSocket(option) {
  option = option || {};
  this.url = option.url;
  this.serviceId = option.serviceId;
  this.onOpen = option.onOpen || noop;
  this.onLogMessage = option.onLogMessage || noop;
  this.onMonitorMessage = option.onMonitorMessage || noop;
  this.onError = option.onError || noop;
  this.onClose = option.onClose || noop;
  this.onError = option.onError || noop;
  this.onSuccess = option.onSuccess || noop;
  this.onComplete = option.onComplete || noop;
  this.onFail = option.onFail || noop;
  // 当close 事件发生时， 是否自动重新连接
  this.isAutoConnect = option.isAutoConnect;
  this.destroyed = option.destroyed;
  this.init();
}

AppPubSubSocket.prototype = {
  constructor: AppPubSubSocket,
  init() {
    this.webSocket = new WebSocket(this.url);
    this.webSocket.onopen = this._onOpen.bind(this);
    this.webSocket.onmessage = this._onMessage.bind(this);
    this.webSocket.onclose = this._onClose.bind(this);
    this.webSocket.onerror = this._onError.bind(this);
    this.serviceLogQueue = new TimerQueue({
      interval: 5,
      autoStart: false,
      onExecute: (message) => {
        //ansi to html
        this.onLogMessage(convert.toHtml(message))
      },
    });
    this.monitorLogQueue = new TimerQueue({
      interval: 5,
      autoStart: false,
      onExecute: (message) => {
        this.onMonitorMessage(message)
      },
    });
    this.eventLogQueue = new Map();
  },
  getSocket() {
    return this.webSocket;
  },
  getEventLogQueue(channel) {
     if (this.eventLogQueue.has(channel)){
         return this.eventLogQueue.get(channel)
     }
     this.eventLogQueue.set(channel, new TimerQueue())
  },
  watchEventLog(onMessage, onSuccess, onFailure, channel) {
    if (this.eventLogQueue.has(channel)){
        this.eventLogQueue.get(channel).onExecute = (item) => {
            if (item.action !== undefined && item.status !== undefined){
                if (item.status == "success") {
                    onSuccess(item.message)
                }else{
                    onFailure(item.message)
                }
            }
            onMessage(item)
        }
    }
    this.eventLogQueue.set(channel, new TimerQueue({
        onExecute: (item) => {
            if (item.action !== undefined && item.status !== undefined){
                if (item.status == "success") {
                    onSuccess(item.message)
                }else{
                    onFailure(item.message)
                }
            }
            onMessage(item)
        }
    }))
    let message = {
        event: "pusher:subscribe",
        data: {
          channel: channel
        }
      }
    this.webSocket.send(JSON.stringify(message))
  },
  setOnLogMessage(callbackAll, onLogMessage){
    callbackAll(this.serviceLogQueue.brushout())
    this.onLogMessage = onLogMessage
    this.serviceLogQueue.start()
  },
  setOnMonitorMessage(onMonitorMessage){
    this.onMonitorMessage = onMonitorMessage
    this.monitorLogQueue.start()
  },
  closeLogMessage(){
    this.serviceLogQueue.stop()
  },
  close() {
    this.webSocket.close();
  },

  _onOpen(evt) {
    // 通知服务器
    if (this.serviceId){
        let message = {
            event: "pusher:subscribe",
            data: {
              channel: "s-"+this.serviceId
            }
          }
        this.webSocket.send(JSON.stringify(message))
    } 
    this.onOpen(this.webSocket);
  },
  _onMessage(message) {
    let me = JSON.parse(message.data)
    if (!me){
        return
    }
    if (!me.event){
        return
    }
    if (me.event == "monitor"){
        if (me.data) {
            let msg = JSON.parse(me.data);
            msg && this.monitorLogQueue.add(msg);
        }
    }
    if (me.event == "service:log"){
        if (me.data) {
            this.serviceLogQueue.add(me.data);
        }
    }
    if (me.event == "event:log"){
        if (me.data) {
            let msg = JSON.parse(me.data);
            msg && this.getEventLogQueue(me.channel).add(msg);
        }
    }
    if (me.event == "event:success"){
        this.getEventLogQueue(me.channel).add({action: "closed", message: me.data, status: "success"});
    }
    if (me.event == "event:failure"){
        this.getEventLogQueue(me.channel).add({action: "closed", message: me.data, status: "failure"});
    }
    if (me.event == "pusher:close"){
        
    }
  },
  _onClose(evt) {
    this.webSocket.onopen = null;
    this.webSocket.onmessage = null;
    this.webSocket.onclose = null;
    this.webSocket.onerror = null;
    this.webSocket = null;
    if (!this.destroyed && this.isAutoConnect) {
      this.init();
    }
  },
  _onError() {
    this.onError();
  },
  destroy() {
    this.destroyed = true;
    this.webSocket.close();
  },
};

export default AppPubSubSocket;