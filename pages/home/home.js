const app = getApp();

Page({
    data: {
        name: '',
        curPageName: 'xiaowang',
        count: 1,
        now: app.globalData.now,
        items: ['事项 A', '事项 B', '事项 C']
    },
    // type=open-type的button
    getuserinfoButton(event) {
        console.log('wx.getSetting()', wx.getSetting());
        if (!event.detail.userInfo) return;
        this.setData({
          name: event.detail.userInfo.nickName
        });
    },
    handelTapButton(event) {
        const that = this;
        console.log('事件event:', event);
        wx.showModal({
            title: '操作确认',
            content: '你确认要修改吗？',
            success (res) {
              if (res.confirm) {
                // this 指向当前页面的实例
                that.setData({
                    count: that.data.count + 1
                }, function () {
                    // setData第二个参数：在促发页面渲染完成之后，自动调用
                    wx.showToast({
                        title: 'count+1操作完成',
                        duration: 700
                    });
                });
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            }
          });
    }
});