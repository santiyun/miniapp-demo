const Event = require('./event');
const Utils = require('./util');

class LogUploaderTask
{
	constructor(content, roomId, part, ts, uid, cid)
	{
		this.content = content;
		this.roomId = roomId;
		this.part = part;
		this.ts = ts;
		this.uid = uid;
		this.cid = cid;
	}
	process()
	{
		return new Promise((resolve, reject) =>
		{
			wx.request({
				url: 'https://log4websdk.3ttech.cn/webSdk/putInfo',
				method: 'post',
				data: {
					logs: this.content,
					roomId: this.roomId,
					part: this.part,
					ts: this.ts,
					uid: this.uid,
					cid: this.cid
				},
				success: function (res)
				{
					resolve();
				},
				fail: function (e)
				{
					reject(e);
				}
			})
		});
	}
}

class LogUploader
{
	constructor()
	{
		this.total = 0;
		this.tasks = [];
		this.events = new Event();
		this.processingTask = null;
		this.subscribeEvents();
	}
	scheduleTasks(tasks)
	{
		this.tasks = tasks || [];
		this.total = this.tasks.length;
		this.events.emit('next');
	}
	processNextTask()
	{
		if (this.tasks.length === 0)
		{
			Utils.log(`all task consumed`);
			return;
		}
		let task = this.tasks.splice(0, 1)[0];
		this.processingTask = task;
		task.process().then(() =>
		{
			this.processingTask = null;
			this.events.emit('progress', {
				remain: this.tasks.length,
				total: this.total
			});
			this.events.emit('next');
		}).catch(e =>
		{
			this.events.emit('error', e);
			this.tasks = [];
			this.total = 0;
			this.processingTask = null;
		});
	}
	subscribeEvents()
	{
		this.events.on('next', () =>
		{
			if (this.processingTask)
			{
				Utils('already processing, wait for this one to finish')
			} else
			{
				this.processNextTask();
			}
		});
	}
	on(event, cb)
	{
		this.events.on(event, cb);
		return this;
	}

	off(event, cb)
	{
		this.events.off(event, cb);
		return this;
	}
}

let uploader = new LogUploader();

module.exports = {
	LogUploader: uploader,
	LogUploaderTask: LogUploaderTask
};