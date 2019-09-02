// 导入数据
var list=require("../../utils/shop.js")




// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   products:null,
   img:null,
   classity: ["全部", "油炸", "烧烤", "面食", "凉卤"],
   num:0

  },
  tab(event){
    //在产品中匹配类别相同的并返回一个集合
    var arr=list.product.filter(function(value){
      return value.class_name == event.target.dataset.lei;
    })
    this.setData({
      num: event.target.dataset.index,
      products:arr.length==0?list.product:arr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //data数据来自模块
      this.setData({
         products: list.product,
         img:list.banner 
      })
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