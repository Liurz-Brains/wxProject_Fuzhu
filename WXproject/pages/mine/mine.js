// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //表示账户余额
    balance: 0,
    datalist:[],
    BackHidden: true,
    nickName:'登录/注册',
    userInfo:{},
    key:'',
    avatarUrl:'',
    phone:18851999169,
    name:''
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBalance();
  },

  getBalance:function(){
  wx.request({
    url: 'http://localhost',
    success:(res)=>{
      this.setData({
        balance: res.data.balance
      });
    },
    fail:(err)=>{
      console.error('获取账户余额失败',err);
    }
  });
  },

  Login: function(e){
    wx.getUserProfile({
      desc: '获取登录信息',
      success:(res)=>{
        let use = res.userInfo
        console.log('授权成功',use)
        this.setData({
          userInfo: use,
          nickName: use.nickName,
          avatarUrl: use.avatarUrl
        })
        wx.setStorage({
          key:'userinfo',
          data:JSON.stringify(res.userInfo)
        })
      }
    })
    wx.login({
      success: (res) => {
        console.log(res.code);
        wx.request({
          url: 'https://e.empowersim.net/Apilist/addappletmember',
          method: 'POST',
          data: {
            name: '测试namu',
            key: '测试kem',
            phone: 18851999129
          },
          // header: {
          //   'content-type': 'application/json'
          // },
          success: (res) => {
            console.log(res)
            // var data = JSON.parse(res.data)
            // console.log(data);
          }
        });
      }
    });


  },

  toUs: function(event){
    wx.navigateTo({
      url: '/pages/us/us',
    })
  },

  Subhistory: function(){

    //临时数组
    const orderData = [{orderNumber:'001',orderData:'2023-08-30'},
  {orderNumber:'002',orderData:'2023-08-31'}];

    wx.request({
      url:'https://127.0.0.1',
      success:(res) => {
        //获取后台返回的响应数据
        const backOrderData = res.data.datalist;
        //将数据存储在页面的数据变量中
        this.setData({
          orderData: backOrderData
        });
      },
      fail:(error) => {
        console.error('获取订单数据失败',error);
      }
    })

    const encodedOrderData = encodeURIComponent(JSON.stringify(orderData));

    wx.navigateTo({
    url: '/pages/subscribe/subscribe?orderData=' + encodedOrderData
  });
    // //更新订单数据
    // this.setData({
    //   orderList:orderData
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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
    setTimeout(function(){
      wx.stopPullDownRefresh();
    },1000);
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