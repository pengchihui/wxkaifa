// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello",
    animationData:null
  },
  test: function() {    
    this.setData({//修改data里面的数据
      msg:"666"
    })
    // wx.navigateTo({
    //   url:"../index/index"
    // })

    // wx.showToast({
    //   title: '',
    //   icon: 'loading',
    //   duration: 2000
    // })

    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })

    wx.setNavigationBarTitle({
      title: '当前页面'
    })
    wx.setTabBarBadge({
      index: 2,
      text: '3'
    })
    // wx.startPullDownRefresh()
    // setTimeout(function(){
    //   wx.stopPullDownRefresh()
    // },1000)

    // wx.pageScrollTo({
    //   scrollTop: 100,
    //   duration: 300
    // })

    wx.setStorage({
      key: "cart",
      data: "123456789",
      success(){
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000
        })
      }
    })


    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    this.animation = animation
    animation.scale(2, 2).rotate(45).step()

    this.setData({
      animationData: animation.export()
    })



    wx.request({
      url: 'https://api.apiopen.top/musicBroadcasting', //仅为示例，并非真实的接口地址
      success(res) {
        console.log(res.data)
      }
    })

    wx.downloadFile({
      url: 'http://1578086.s21i-1.faiusr.com/4/ABUIABAEGAAg_vjIlAUo27ThxwcwoAY45wE.png', //仅为示例，并非真实的资源
      //filePath:"http://localhost/img/",
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        var file=res.tempFilePath
        wx.saveImageToPhotosAlbum({
          filePath:file,
          success(res) {
            console.log("请到手机相册查看图片")
           }
        })
      }
    })



    // wx.setBackgroundColor({
    //   backgroundColor: '#00ff00',
    //   success(){
    //     console.log(123)
    //   },
    //   fail(){
    //     console.log(456)
    //   }
    // })

  },
  turn(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
    this.animation = animation
    animation.scale(1, 1).rotate(0).step()

    this.setData({
      animationData: animation.export()
    })
  },
  test2() {
    console.log(456)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
console.log("页面加载时触发")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
console.log("数据有了，但页面可能还未显示")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("页面显示")





  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("下拉")
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