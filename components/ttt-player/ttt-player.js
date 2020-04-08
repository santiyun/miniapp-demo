// components/ttt-player/ttt-player.js
const Utils = require("../../utils/util.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: Number,
      value: 0
    },
    height: {
      type: Number,
      value: 0
    },
    x: {
      type: Number,
      value: 0
    },
    y: {
      type: Number,
      value: 0
    },
    debug: {
      type: Boolean,
      value: !1
    },
    /**
     * 0 - loading, 1 - ok, 2 - error
     */
    status: {
      type: String,
      value: "loading",
      observer: function(newVal, oldVal, changedPath) {
        Utils.log(`player status changed from ${oldVal} to ${newVal}`);
      }
    },
    orientation: {
      type: String,
      value: "vertical"
    },
    name: {
      type: String,
      value: ""
    },
    cid: {
      type: String,
      value: ""
    },
    url: {
      type: String,
      value: "",
      observer: function(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        Utils.log(`player url changed from ${oldVal} to ${newVal}, path: ${changedPath}`);
      }
    },
    videoType: {
      type: String,
      value: ""
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
    playContext: null,
    detached: false,
    mediaStateCB: null,
	userId: 0,
	lastStatTS: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * start live player via context
     * in most cases you should not call this manually in your page
     * as this will be automatically called in component ready method
     */
    start: function() {
      const cid = this.data.cid;
      Utils.log(`starting player ${cid}`);
      if (this.data.status === "ok") {
        Utils.log(`player ${cid} already started`);
        return;
      }
      if (this.data.detached) {
        Utils.log(`try to start pusher while component already detached`);
        return;
      }
      this.data.playContext && this.data.playContext.play();
    },

    /**
     * stop live pusher context
     */
    stop: function() {
      const cid = this.data.cid;
      Utils.log(`stopping player ${cid}`);
      this.data.playContext && this.data.playContext.stop();
    },

    /**
     * 
     * @param {*} opts.userId 
     * @param {*} opts.callback 
     */
    setMediaStatCB(opts) {
	  const { userId, callback } = opts;
	  
	  Utils.log(`ttt-pusher setMediaStatCB() userId: ${userId}`);

      // 
      if (typeof callback == 'function') {
        this.data.userId = userId;
        this.data.mediaStateCB = callback;
      }
    },

    /**
     * rotate video by rotation
     */
    rotate: function(rotation) {
      let orientation = rotation === 90 || rotation === 270 ? "horizontal" : "vertical";
      Utils.log(`rotation: ${rotation}, orientation: ${orientation}, cid: ${this.data.cid}`);
      this.setData({ orientation: orientation });
    },

    /**
     * 播放器状态更新回调
     */
    stateChange: function(e) {
      // TODO : Utils.log(`live-player id: ${e.target.id}, code: ${e.detail.code}`)

      // 送到上层处理
      if (!!this.data.mediaStateCB) {
        this.data.mediaStateCB({
          code: e.detail.code,
          type: 'player',
          userId: this.data.userId,
          message: '{}'
        });
      }

      // 
      let cid = parseInt(e.target.id.split("-")[1]);
      if (e.detail.code === 2004) {
        Utils.log(`live-player ${cid} started playing`);
        if (this.data.status === "loading") {
          this.setData({ status: "ok" });
        }
      } else if (e.detail.code === -2301) {
        Utils.log(`live-player ${cid} stopped`, "error");
		this.setData({ status: "error" });
		// emit event
		this.triggerEvent('pullfailed', {
			userId  : this.data.userId,
			errCode : e.detail.code,
			errMsg  : `${e.detail.code}`
		});	
	  }
	  
	  // 
    },

    netStatus: function(e) {
      // TODO : 用于 流量记录 -- 对账
      // Utils.log(`player network: ${JSON.stringify(e.detail)}`);

      // 送到上层处理
      if (!!this.data.mediaStateCB) {
		  let currentTS = new Date().getTime();
		  if (currentTS - this.data.lastStatTS > 10000) {
			// 10s
			this.setData({ lastStatTS: currentTS });
			// 
			this.data.mediaStateCB({
				code: 100,
				type: 'player',
				userId: this.data.userId,
				message: `${JSON.stringify(e.detail)}`
			});
		}
      }
    }
  },

  /**
   * 组件生命周期
   */
  ready: function() {
    Utils.log(`player ${this.data.cid} ready`);
    this.data.playContext || (this.data.playContext = wx.createLivePlayerContext(`player-${this.data.cid}`, this));
    // if we already have url when component mounted, start directly
    if (this.data.url) {
      this.start();
    }
  },

  moved: function() {
    Utils.log(`player ${this.data.cid} moved`);
  },

  detached: function() {
    Utils.log(`player ${this.data.cid} detached`);
    // auto stop player when detached
    this.data.playContext && this.data.playContext.stop();
    this.data.detached = true;
  }
})
