// pages/shops/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: null,
    bool: true,
    choose_all: true,
    sum: 0
    
  },
  add(event) {
    var index = event.target.dataset.index
    var arr = this.data.products
    if (arr[index].num > arr[index].max - 1) {
      arr[index].num == arr[index].num
    } else {
      arr[index].num += 1
    }
    this.setData({
      products: arr
    })
    this.pay()
  },
  jian(event) {
    var index = event.target.dataset.index
    var arr = this.data.products
    if (arr[index].num > 1) {
      arr[index].num -= 1
    } else {
      arr[index].num == arr[index].num
    }
    this.setData({
      products: arr
    })
    this.pay()
  },
  choose(event) {
    // id 数据 
    var id = event.currentTarget.dataset.id
    var arr = this.data.products
    //当前反选
    arr[id].choose = !arr[id].choose
    //全选成立条件
    var val = arr.find(function(value) {
      return value.choose == false
    })

    this.setData({
      products: arr,
      choose_all: val ? false : true
    })
    this.pay()
  },
  choose_all() {
    var arr = this.data.products;
    var choose_all = this.data.choose_all
    //全选 //全否

    if (choose_all) {
      arr.forEach(function(e) {
        e.choose = false
      })
    } else {
      arr.forEach(function(e) {
        e.choose = true
      })
    }
    //选好后重写数据
    this.setData({
      products: arr,
      choose_all: !choose_all
    })
    this.pay()
  },
  pay() {
    //结算
    var arr = this.data.products
    var sum = 0
    arr.forEach(function(x) {
      if (x.choose) {
        sum = sum + (x.pay * x.num)
      }
    })
    this.setData({
      sum: sum
    })
  },
  delete(event){

    var index = event.target.dataset.index
    var arr = this.data.products
    var that=this
    wx.showModal({
      title: '提示',
      content: '你确定删除这条购物车',
      success(res) {
        if (res.confirm) {
               arr.splice(index,1)
               that.setData({
                products:arr
              })
              wx.setStorage({
                key: "shop",
                data: arr             
              })
          console.log('用户点击取消')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    this.pay()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log("页面加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

    // console.log("页面渲染")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    // console.log("页面显示")
    var arr = wx.getStorageSync('shop') || []
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

    // console.log("页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    // console.log("页面卸载")

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