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
      observer: function (newVal, oldVal, changedPath) {
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
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        Utils.log(`player url changed from ${oldVal} to ${newVal}, path: ${changedPath}`);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    playContext: null,
    detached: false
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
    start: function () {
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
      this.data.playContext.play();
    },

    /**
     * stop live pusher context
     */
    stop: function () {
      const cid = this.data.cid;
      Utils.log(`stopping player ${cid}`);
      this.data.playContext.stop();
    },

    /**
     * rotate video by rotation
     */
    rotate: function (rotation) {
      let orientation = rotation === 90 || rotation === 270 ? "horizontal" : "vertical";
      Utils.log(`rotation: ${rotation}, orientation: ${orientation}, cid: ${this.data.cid}`);
      this.setData({
        orientation: orientation
      });
    },

    /**
     * 播放器状态更新回调
     */
    stateChange: function (e) {
      Utils.log(`live-player id: ${e.target.id}, code: ${e.detail.code}`)
      let cid = parseInt(e.target.id.split("-")[1]);
      if (e.detail.code === 2004) {
        Utils.log(`live-player ${cid} started playing`);
        if(this.data.status === "loading") {
          this.setData({
            status: "ok"
          });
        }
      } else if (e.detail.code === -2301) {
        Utils.log(`live-player ${cid} stopped`, "error");
        this.setData({
          status: "error"
        })
      }
    },
    netStatus: function(e) {
		// TODO : 用于 流量记录 -- 对账
      Utils.log(`player network: ${JSON.stringify(e.detail)}`);
    }
  },
  /**
   * 组件生命周期
   */
  ready: function () {
    Utils.log(`player ${this.data.cid} ready`);
    this.data.playContext || (this.data.playContext = wx.createLivePlayerContext(`player-${this.data.cid}`, this));
    // if we already have url when component mounted, start directly
    if(this.data.url) {
      this.start();
    }
  },
  moved: function () {
    Utils.log(`player ${this.data.cid} moved`);
  },
  detached: function () {
    Utils.log(`player ${this.data.cid} detached`);
    // auto stop player when detached
    this.data.playContext && this.data.playContext.stop();
    this.data.detached = true;
  }
})
