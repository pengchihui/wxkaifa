// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bool: true,
    products: [],
    all: 0,
    all_choose: true
  },
  add(event) {
    var id = event.target.dataset.id
    var arr = this.data.products
    arr[id].num += 1
    this.setData({
      products: arr
    })
    this.pay()
  },
  jian(event) {
    var id = event.target.dataset.id
    var arr = this.data.products
    arr[id].num -= 1
    this.setData({
      products: arr
    })
    this.pay()
  },
  choose(event) {
    var id = event.currentTarget.dataset.id
    var arr = this.data.products
    arr[id].choose = !arr[id].choose
    var val = arr.find(function(x) {
      return x.choose == false
    })
    this.setData({
      products: arr,
      all_choose: val ? false : true
    })
    this.pay()
  },
  all() {
    var bool = this.data.all_choose
    var arr = this.data.products
    if (bool) {
      arr.forEach(function(x) {
        x.choose = false
      })
    } else {
      arr.forEach(function(x) {
        x.choose = true
      })
    }
    this.setData({
      all_choose: !this.data.all_choose,
      products: arr
    })
    this.pay()
  },
  pay() {
    var arr = this.data.products
    var all=0
    arr.forEach(function (x) {
      if(x.choose){
        all = all + (x.pay * x.num)
      }
    })
    this.setData({
      all:all
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var arr = wx.getStorageSync('shop') || []
    console.log(arr)
    this.setData({
      bool: arr.length == 0 ? true : false,
      products: arr
    })
    this.pay()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})