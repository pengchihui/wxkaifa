// pages/finds/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      books:null
  },
  download(even) {
    var it = even.target.dataset.it;
    var obj = JSON.stringify(it);
    var img = obj.book_cover;
    wx.downloadFile({
      url: obj,
      success(res) {
        if (res.statusCode === 200) {
              var pic = res.tempFilePath
              wx.saveImageToPhotosAlbum({
                filePath: pic1.book_cover,
              })
            }
        
        } 
    })
    // 本地存储
    // wx.setStorage({
    //   key: "shop",
    //   data: file,
    //   success() {
    //     wx.showToast({
    //       title: '成功',
    //       icon: 'success',
    //       duration: 2000
    //     })
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面加载 初始化数据
    var that=this;
    wx.request({
      url: 'https://www.apiopen.top/novelApi', 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var arr=res.data.data
        console.log(arr)
        that.setData({
          books:arr
        })
      }
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
       //请求数据




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