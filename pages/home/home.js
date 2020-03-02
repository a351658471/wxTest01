// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lastTapTime:0,
    carData:{
      imgList: ['/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg'],
      situation:{
        name:'兰博基尼-Huracan610',
        isnew:'全新',
        price:'200万',
        cars:[
          '2.0T-H4',
          '250p',
          '2门2座'        ]
      }
    },
    tabList:['详情介绍','车辆参数','购车流程'],
    
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  doubletap(e){
    console.log(e)
    let curTime = e.timeStamp;
    let lastTime = this.data.lastTapTime;

    if(lastTime > 0){
      if(curTime - lastTime <300){
        console.log("双击事件")
      }else{
        console.log("间隔超300ms的单击事件")
      }
    }else{
      console.log("单击事件")
    }

    this.setData({
      lastTapTime: curTime
    })
  },


  tolower(){
    console.log("到底了")
  },

  tabClick(e){
    console.log(e)
    this.setData({
      currentIndex:e.target.dataset.index
    })
  }

})