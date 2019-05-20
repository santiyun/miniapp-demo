let logitems = [];
let dbgRtmp = false;
let systemInfoChecked = false;
let cid = `${parseInt(Math.random() * 1000000)}`;
let timer;

const debounce = function(fn, delay) {
  return function() {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const millisecond = date.getMilliseconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second, millisecond].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const requestPermission = (scope, cb) => {
  wx.getSetting({
    success(res) {
      if (res.authSetting[scope]) {
        cb && cb();
      } else {
        wx.authorize({
          scope: scope,
          success() {
            cb && cb();
          }
        })
      }
    }
  })
}

const log = (msg, level) => {
  let time = formatTime(new Date());
  logitems.push(`${time}: ${msg}`);
  if (level === "error") {
    console.error(`${time}: ${msg}`);
  } else {
    console.log(`${time}: ${msg}`);
  }
}

const getCid = () => {
  return cid;
}

const mashupUrl = (url, roomId) => {
  return url;
}

const checkSystemInfo = (app) => {
  if (!systemInfoChecked) {
    systemInfoChecked = true;
    wx.getSystemInfo({
      success: function(res) {
        log(`${JSON.stringify(res)}`);
        let sdkVersion = res.SDKVersion;
        let version_items = sdkVersion.split(".");
        let major_version = parseInt(version_items[0]);
        let minor_version = parseInt(version_items[1]);

        app.globalData.systemInfo = res;

        if (major_version <= 1 && minor_version < 7) {
          wx.showModal({
            title: '版本',
            content: '微信版本(${major_version}.${minor_version})过低，部分功能可能无法工作',
            success: function(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      }
    })
  }
}

module.exports = {
  getCid: getCid,
  checkSystemInfo: checkSystemInfo,
  formatTime: formatTime,
  requestPermission: requestPermission,
  log: log,
  clearLogs: function() {
    logitems = []
  },
  getLogs: function() {
    return logitems
  },
  mashupUrl: mashupUrl,
  debounce: debounce
}