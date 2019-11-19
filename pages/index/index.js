const app = getApp()
const Utils = require('../../utils/util.js')
const AU_SERVER = require('../../utils/config.js').AU_SERVER;

const TTTMAEngine = require('../../lib/3T_Miniapp_SDK_for_WeChat');

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // used to store user info like portrait & nickname
    userInfo: {},
    hasUserInfo: false,
    // whether to disable join btn or not
    disableJoin: false,
    chkUserRoles: [{
      name: 'PARTICIPANT',
      display: '副播',
      value: 2
    }, {
      name: 'AUDIENCE',
      display: '观众',
      checked: 'true',
      value: 3
    }],
    // demo mode
    // 0 -- 简易模式: 默认用户角色为；用户ID自动随机生成；通道号默认为 999；
    // 1 -- 专家模式: 用户角色可选；用户ID手动输入；通道号手动输入；
	demoMode: 0, // 
	// 
	auServer: AU_SERVER,
    // 
    chkDemoMode: [{
      name: 'DEMO_MODE',
      display: '简易模式',
      checked: true
	}],
	appIDArray: ['a967ac491e3acf92eed5e1b5ba641ab7', 'test900572e02867fab8131651339518', '手动输入'],
	appIDIndex: 0,
	custom: false,
    // 
    chkCustomServer: [{
      name: 'CUSTOM_SERVER',
      display: '设置服务器',
      checked: false
    }],
    isCustomServer: false,
    // 用户角色
    userRole: 3,
    // 
    chkPushOn: [{
      name: 'PUSH_STREAM',
      display: '自动推流',
      checked: true
    }],
    chkAutoPull: [{
      name: 'AUTO_SUBSCRIBE',
      display: '自动拉流',
      checked: true
    }],
    // 入通道后，是否自动推流
    isAutoPush: true,
    // 入通道后，是否自动拉流
    isAutoPull: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.roomId = '999';
	this.userId = '';
	this.appId = 'a967ac491e3acf92eed5e1b5ba641ab7';
	this.customServer = null;

    // 
    Utils.log(`index page onLoad: ${JSON.stringify(TTTMAEngine.getVersion())}`);

    //
    let userInfo = wx.getStorageSync("userInfo");
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      });
    }

    // 
    this.setData({
      masdkVersion: `${JSON.stringify(TTTMAEngine.getVersion())}`
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 只有提供了该回调才会出现转发选项
   */
  onShareAppMessage() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * callback to get user info
   * using wechat open-type
   */
  onJoinClick: function(e) {
    let userInfo = e.detail.userInfo || {};
    // store data for next launch use
    wx.setStorage({
      key: 'userInfo',
      data: userInfo,
    })
    this.onJoin();
  },

  bindAppIDPickerChange: function (e) {
    // console.log('select: ', this.data.casArray[e.detail.value])
    const index = e.detail.value;

    if (e.detail.value == 2) {
      this.setData({ custom: true });
    } else {
      this.setData({ custom: false });
    }
    this.setData({ appIDIndex: index });

    // 
    let items = this.data.appIDArray || [];

    if (index < items.length - 1) {
      this.appId = this.data.appIDArray[index];
    }
  },

  radioChangeUserRole: function(e) {
    let value = e.detail.value.toString();
    let items = this.data.chkUserRoles || [];

    let role = 0;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (value.search(`${item.name}`) !== -1) {
        role = item.value;
        break;
      }
    }

    this.setData({
      userRole: role
    });

    Utils.log(`radioChangeUserRole : ${this.data.userRole}`);
  },

  checkboxChangeDemoMode(e) {
    let value = e.detail.value.toString();
    let items = this.data.chkDemoMode || [];

    let isDemoMode = false;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (value.search(`${item.name}`) !== -1) {
        isDemoMode = true;
        break;
      }
    }

    this.setData({
      demoMode: isDemoMode ? 0 : 1
    });

    Utils.log(`checkboxChangeDemoMode : ${this.data.demoMode}`);
  },

  checkboxChangeCustomServer(e) {
    let value = e.detail.value.toString();
    let items = this.data.chkCustomServer || [];

    let isCustomServer = false;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (value.search(`${item.name}`) !== -1) {
        isCustomServer = true;
        break;
      }
    }

    this.setData({
      isCustomServer: isCustomServer
    });

    Utils.log(`checkboxChangeCustomServer : ${this.data.isCustomServer}`);
  },

  checkboxChangeAutoPush(e) {
    let value = e.detail.value.toString();
    let items = this.data.chkPushOn || [];

    let isAutoPush = false;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (value.search(`${item.name}`) !== -1) {
        isAutoPush = true;
        break;
      }
    }

    this.setData({
      isAutoPush: isAutoPush
    });

    Utils.log(`checkboxChangeAutoPush : ${this.data.isAutoPush}`);
  },

  checkboxChangeAutoPull(e) {
    let value = e.detail.value.toString();
    let items = this.data.chkAutoPull || [];

    let isAutoPull = false;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (value.search(`${item.name}`) !== -1) {
        isAutoPull = true;
        break;
      }
    }

    this.setData({
      isAutoPull: isAutoPull
    });

    Utils.log(`checkboxChangeAutoPull : ${this.data.isAutoPull}`);
  },

  onJoin: function() {
    let demoMode = this.data.demoMode;
    if (this.data.demoMode == 0) {
      // 自动随机生成 userId
      this.userId = `${Math.floor(Math.random() * 1000000)}`;
    }

    let roomId = this.roomId || '';
	let userId = this.userId || '';
	let appId = this.appId || null;
	let customServer = this.customServer || AU_SERVER;

    let t = (typeof userId);

    if (!appId || !roomId || parseInt(roomId) == 0 || !userId || parseInt(userId) == 0) {
      wx.showToast({
        title: '请提供相应参数',
        icon: 'none',
        duration: 2000
      });
    } else {
        //
        let role = this.data.userRole;
        let autoPull = this.data.isAutoPull;
		let autoPush = this.data.isAutoPush;
		let isCustom = this.data.isCustomServer;

		let isTest = false;

        roomId = parseInt(roomId);
        userId = parseInt(userId);

        wx.navigateTo({
          url: `../meeting/meeting?isCustom=${isCustom}&customServer=${customServer}&appId=${appId}&roomId=${roomId}&userId=${userId}&role=${role}&autoPull=${autoPull}&autoPush=${autoPush}&isTest=${isTest}`
        });
    }
  },

  onInputRoomId: function(e) {
    let value = e.detail.value;
    this.roomId = value;
  },

  onInputAppID: function(e) {
    let value = e.detail.value;
    this.appId = value;
  },

  onInputServer: function(e) {
    let value = e.detail.value;
    this.customServer = value;
  },

  onInputUserId: function(e) {
    let value = e.detail.value;
    this.userId = value;
  }
})
