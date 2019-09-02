var list = require("../../utils/data.js")
// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    food: null,
    bool: false,
    all: 0,
    num: 1
  },
  onPageScroll(event) {
    this.setData({
      bool: event.scrollTop >= 255 ? true : false
    })
  },
  add() {
    var val = this.data.num
    var max = this.data.food.num
    this.setData({
      num: val < max ? val + 1 : val
    })
    this.all()
  },
  jian() {
    var val = this.data.num
    this.setData({
      num: val > 1 ? val - 1 : val
    })
    this.all()
  },
  all() {
    var val = this.data.num
    var pay = this.data.food.pay
    this.setData({
      all: val * pay
    })
  },
  shopping(event) {
    var arr = wx.getStorageSync('shop') || []
    var pro = this.data.food
    var id = pro.bid
    var tit = pro.tit
    var pic = pro.img[0]
    var num = this.data.num
    var pay = pro.pay
    var obj = {
      id: id,
      tit: tit,
      pic: pic,
      num: num,
      pay: pay,
      choose:true
    }
    if(arr.length==0){
      arr.push(obj)
    } else {
      var repeat = arr.find(function (x, y) {
        if (x.id == event.target.dataset.bid) {
          arr[y].num = arr[y].num + num
          return true
        }
      })
      if (!repeat) {
        arr.push(obj)
      }
    }
    wx.setStorage({
      key: "shop",
      data: arr,
      success() {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var product = list.product.find(function (x) {
      return x.bid == options.pro
    })
    this.setData({
      food: product
    })
    this.all()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})