// 导入数据
var list = require("../../utils/shop.js")


// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     product:null,
     num:1,
     all:0,
     bool:false,
     choose_all:true
  },
   chun(event){
      //数组存储shuju
      var arr = wx.getStorageSync('shop') || []
      var pro=this.data.product;
      var id = event.target.dataset.bid;
      var tit=pro.tit;
      var img=pro.img[0];
      var pay=pro.pay;
      var max = pro.num;
      var num=this.data.num;
      var obj={
        id: id,
        tit: tit,
        img: img,
        pay: pay,
        num: num,
        max:max,
        choose:true,
        

      }  
      if(arr.length==0){
        arr.push(obj)
      }else{
        var po = arr.find(function (x, y) {
           if(x.id==id){
             arr[y].num=arr[y].num+num
             return true
           }
        })
        if(!po){
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
  onPageScroll(event){
     this.setData({
       bool:event.scrollTop>253?true:false
     })
  }
,
  add(){
   //当前数量 限制值
   var val=this.data.num;
   var max=this.data.product.num;
     this.setData({
      num:val<max?val+1:val     
     })
    this.all()  
  },
  jian(){
    //求和
      var val=this.data.num;
      this.setData({
        num:val>1?val-1:val
      })
    this.all()  
  },
  all(){
      //数量 商品价格
      var val=this.data.num;
      var pay=this.data.product.pay;
      this.setData({
       all:val*pay
      })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
       var pro=list.product.find(function(value){
           return value.bid==options.id;
       })
       this.setData({
           product:pro
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