const app = getApp()
const Utils = require('../../utils/util.js')

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
      name: 'CHAIRMAN',
      display: '主播',
      value: 1
    }, {
      name: 'PARTICIPANT',
      display: '副播',
      value: 2
    }, {
      name: 'AUDIENCE',
      display: '观众',
      value: 3,
      checked: 'true'
	}],
	// demo mode
	// 0 -- 简易模式: 默认用户角色为 观众；用户ID自动随机生成；房间号默认为 999；
	// 1 -- 专家模式: 用户角色可选；用户ID手动输入；房间号手动输入；
	demoMode: 0, // 
	// 
    chkDemoMode: [{
      name: 'DEMO_MODE',
      display: '简易模式',
      checked: true
    }],
    // 用户角色
    userRole: 3,
    // 
    chkPushOn: [{
      name: 'PUSH_STREAM',
      display: '自动推流',
      checked: false
    }],
    chkAutoPull: [{
      name: 'AUTO_SUBSCRIBE',
      display: '自动拉流',
      checked: false
    }],
    // 入房间后，是否自动推流
    isAutoPush: false,
    // 入房间后，是否自动拉流
    isAutoPull: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
	this.roomId = '999';
	this.userId = '';

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
   * 进入 推拉流测试 页面
   */
  onTestClick: function() {
    // go to test page if roomId is 'test'
    wx.navigateTo({
      url: `../test/test`
    });
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

	let roomId = this.roomId || "";
	let userId = this.userId || "";

    let t = (typeof userId);

    if (!roomId || parseInt(roomId) == 0 || !userId || parseInt(userId) == 0) {
      wx.showToast({
        title: '请提供相应参数',
        icon: 'none',
        duration: 2000
      });
    } else {
	  if (roomId === 'test') {
		this.onTestClick();
	  } else {
		//
		let role = this.data.userRole;
		let autoPull = this.data.isAutoPull;
		let autoPush = this.data.isAutoPush;
		
		roomId = parseInt(roomId);
		userId = parseInt(userId);

		wx.navigateTo({
			url: `../meeting/meeting?roomId=${roomId}&userId=${userId}&role=${role}&autoPull=${autoPull}&autoPush=${autoPush}`
		});
	  }
    }
  },

  onInputRoomId: function(e) {
    let value = e.detail.value;
    this.roomId = value;
  },

  onInputUserId: function(e) {
    let value = e.detail.value;
    this.userId = value;
  }
})