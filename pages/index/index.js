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
      checked: 'true',
      value: 2
    }, {
      name: 'AUDIENCE',
      display: '观众',
      value: 3
	}],
    // 用户角色
    userRole: 2,
    // demo mode
    // 0 -- 简易模式: 默认用户角色为；用户ID自动随机生成；通道号默认为 999；
    // 1 -- 专家模式: 用户角色可选；用户ID手动输入；通道号手动输入；
	demoMode: 0, // 
	// 
    chkDemoMode: [{
      name: 'DEMO_MODE',
      display: '简易模式',
      checked: true
	}],
	appIDArray: ['a967ac491e3acf92eed5e1b5ba641ab7', 'test900572e02867fab8131651339518', '2e46af04f3a11cce249e414118e5072e', '手动输入'],
	appIDIndex: 0,
	appId: 'a967ac491e3acf92eed5e1b5ba641ab7',
    // 
	customAppID: false,
	// 
	roomId: '999000',
    // 
    chkCustomServer: [{
      name: 'CUSTOM_SERVER',
      display: '设置服务器',
      checked: false
	}],
    isCustomServer: false,
	customServer: AU_SERVER,
    // 
    chkPushOn: [{
      name: 'PUSH_STREAM',
      display: '自动推流'
    }],
    chkAutoPull: [{
      name: 'AUTO_SUBSCRIBE',
	  display: '自动拉流',
	  checked: true
    }],
    // 入通道后，是否自动推流
    isAutoPush: true,
    // 入通道后，是否自动拉流
	isAutoPull: true,
	// 
    chkLogSubmit: [{
      name: 'LOG_SUBMIT',
	  display: '日志',
	  checked: true
    }],
	// 
	logSubmit: true,
	// demo version
	demoVersion: '2.1.4-12003271',
	// sdk version
	masdkVersion: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
	// 
	let appId = 'a967ac491e3acf92eed5e1b5ba641ab7';
	let roomId = '999000';
	let isAutoPull = true;
	let logSubmit = true;
	let isCustomServer = false;
	let customServer = '';
	let userRole = 2;

	try {
		var value = wx.getStorageSync('roomId');
		if (value) {
			Utils.log(`index page onLoad - getStorageSync(roomId) value: ${value}`);
			roomId = value;
		} else {
			Utils.log('index page onLoad - getStorageSync(roomId) no-data');
		}
		// 
		value = wx.getStorageSync('appId');
		if (value) {
			Utils.log(`index page onLoad - getStorageSync(appId) value: ${value}`);
			appId = value;
		} else {
			Utils.log('index page onLoad - getStorageSync(appId) no-data');
		}
		// 
		value = wx.getStorageSync('isAutoPull');
		if (value) {
			Utils.log(`index page onLoad - getStorageSync(isAutoPull) value: ${value}`);

			isAutoPull = (value === 'true');
			// 
		} else {
			Utils.log('index page onLoad - getStorageSync(isAutoPull) no-data');
		}
		value = wx.getStorageSync('logSubmit');
		if (value) {
			Utils.log(`index page onLoad - getStorageSync(logSubmit) value: ${value}`);

			logSubmit = (value === 'true');
			// 
		} else {
			Utils.log('index page onLoad - getStorageSync(logSubmit) no-data');
		}
		// 
		value = wx.getStorageSync('isCustomServer');
		if (value) {
			Utils.log(`index page onLoad - getStorageSync(isCustomServer) value: ${value}`);

			isCustomServer = (value === 'true');
			// 
		} else {
			Utils.log('index page onLoad - getStorageSync(isCustomServer) no-data');
		}
		// 
		value = wx.getStorageSync('customServer');
		if (value && value.length > 0) {
			Utils.log(`index page onLoad - getStorageSync(customServer) value: ${value}`);

			customServer = value;
		} else {
			Utils.log('index page onLoad - getStorageSync(customServer) no-data');
		}
		// 
		value = wx.getStorageSync('role');
		if (value) {
			Utils.log(`index page onLoad - getStorageSync(role) value: ${value}`);

			userRole = parseInt(value);
			// 
		} else {
			Utils.log('index page onLoad - getStorageSync(role) no-data');
		}
	  } catch (e) {
		Utils.log(`index page onLoad: ${JSON.stringify(e)}`, 'error');
	}

	// 
	this.setData({
		isCustomServer : isCustomServer && customServer !== '',
		customServer,
		roomId,
		appId,
		userRole,
		isAutoPull,
		logSubmit,
		masdkVersion: `${JSON.stringify(TTTMAEngine.getVersion())}`
	  });
	  
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

  onJoin: function() {
    let demoMode = this.data.demoMode;
    if (this.data.demoMode == 0) {
      // 自动随机生成 userId
      this.userId = `${Math.floor(Math.random() * 1000000)}`;
    }

    let roomId = this.data.roomId || '';
	let userId = this.userId || '';
	let appId = this.data.appId || null;
	let customServer = this.data.customServer;

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
		let logSubmit = this.data.logSubmit;

		let isTest = false;

        roomId = parseInt(roomId);
        userId = parseInt(userId);

        wx.navigateTo({
          url: `../meeting/meeting?isCustom=${isCustom}&customServer=${customServer}&appId=${appId}&roomId=${roomId}&userId=${userId}&role=${role}&autoPull=${autoPull}&autoPush=${autoPush}&isTest=${isTest}&logSubmit=${logSubmit}`
        });
    }
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

  checkboxChangeLogSubmit(e) {
    let value = e.detail.value.toString();
    let items = this.data.chkLogSubmit || [];

    let logSubmit = false;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (value.search(`${item.name}`) !== -1) {
        logSubmit = true;
        break;
      }
    }

	this.setData({ logSubmit });

	//
	try {
		wx.setStorageSync('logSubmit', logSubmit ? 'true' : 'false');
	  } catch (e) {
		Utils.log(`checkboxChangeLogSubmit failed. e: ${JSON.stringify(e)}`);
	  }


    Utils.log(`checkboxChangeLogSubmit : ${this.data.logSubmit}`);
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

	this.setData({ isAutoPull });

	//
	try {
		wx.setStorageSync('isAutoPull', isAutoPull ? 'true' : 'false');
	  } catch (e) {
		Utils.log(`checkboxChangeAutoPull failed. e: ${JSON.stringify(e)}`);
	  }


    Utils.log(`checkboxChangeAutoPull : ${this.data.isAutoPull}`);
  },

  onInputRoomId: function(e) {
    let value = e.detail.value;
	let roomId = value;

    this.setData({ roomId });

	//
	try {
		wx.setStorageSync('roomId', roomId);
	  } catch (e) {
		Utils.log(`onInputRoomId failed. e: ${JSON.stringify(e)}`);
	  }

	Utils.log(`onInputRoomId roomId: ${roomId}`);
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
	
    this.setData({ userRole: role });
  
	// 
	try {
		wx.setStorageSync('role', `${role}`);
	  } catch (e) {
		Utils.log(`radioChangeUserRole failed. e: ${JSON.stringify(e)}`);
	  }

    Utils.log(`radioChangeUserRole userRole: ${this.data.userRole}`);
  },

  bindAppIDPickerChange: function (e) {
    // console.log('select: ', this.data.casArray[e.detail.value])
    const index = e.detail.value;

    // 
    let items = this.data.appIDArray || [];

    if (index == items.length - 1) {
      this.setData({ customAppID: true });
    } else {
      this.setData({ customAppID: false });
    }
    this.setData({ appIDIndex: index });

    if (index < items.length - 1) {
	  let appId = this.data.appIDArray[index];
	  
	  this.setData({ appId });

	  //
	  try {
		wx.setStorageSync('appId', appId);
	  } catch (e) {
		Utils.log(`bindAppIDPickerChange failed. e: ${JSON.stringify(e)}`);
	  }

	  Utils.log(`bindAppIDPickerChange appId: ${appId}`);
	}
},

  onInputAppID: function(e) {
    let value = e.detail.value;
	let appId = value;
	
	//
	this.setData({ appId });

	try {
		wx.setStorageSync('appId', appId);
	  } catch (e) {
		Utils.log(`onInputAppID failed. e: ${JSON.stringify(e)}`);
	  }

	Utils.log(`onInputAppID appId: ${appId}`);
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

    this.setData({ isCustomServer });

	//
	try {
		wx.setStorageSync('isCustomServer', isCustomServer ? 'true' : 'false');
	  } catch (e) {
		Utils.log(`checkboxChangeCustomServer failed. e: ${JSON.stringify(e)}`);
	  }

    Utils.log(`checkboxChangeCustomServer : ${this.data.isCustomServer}`);
  },

  onInputServer: function(e) {
    let value = e.detail.value;
	let customServer = value;
	
	//
	this.setData({ customServer });
	
	//
	try {
		wx.setStorageSync('customServer', customServer);
	  } catch (e) {
		Utils.log(`onInputAppID failed. e: ${JSON.stringify(e)}`);
	  }

	Utils.log(`onInputServer customServer: ${this.data.customServer}`);
  },

  onInputUserId: function(e) {
    let value = e.detail.value;
    this.userId = value;
  }
})
