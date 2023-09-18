// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  scanCodeEvent: function(){
    wx.scanCode({
      success: function(res){
        onlyFromCamera: true,
          console.log(res) //打印扫码结果
          var scanResult = res.result;
          console.log('扫码结果',scanResult);
          const encodeUrl = encodeURIComponent(JSON.stringify(scanResult))
          wx.navigateTo({
            url: '/pages/webview/webview?result=' + encodeUrl
          });
      },
      fail: function(err){
        console.log(err)
      }
    })
    },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})