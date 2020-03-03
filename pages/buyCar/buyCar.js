// pages/buyCar/buyCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: ['/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg'],
    isNew:true,
    carData: [
       {
        img: '/assets/1.jpg',
        name: '兰博基尼-Huracan610',
        isnew: '全新',
        price: '200万',
        cars: [
          '2.0T-H4',
          '250p']
       },
       {
         img:'/assets/2.jpg',
         name: '兰博基尼-Huracan610',
         isnew: '全新',
         price: '200万',
         cars: [
           '2.0T-H4',
           '250p']
       },
       {
         img: '/assets/3.jpg',
         name: '兰博基尼-Huracan610',
         isnew: '全新',
         price: '200万',
         cars: [
           '2.0T-H4',
           '250p']
       },
    ],
    oldcar: [
      {
        img: '/assets/3.jpg',
        name: '兰博基尼-Huracan610',
        isnew: '二手',
        price: '200万',
        cars: [
          '2.0T-H4',
          '250p']
      },
      {
        img: '/assets/2.jpg',
        name: '兰博基尼-Huracan610',
        isnew: '二手',
        price: '200万',
        cars: [
          '2.0T-H4',
          '250p']
      },
      {
        img: '/assets/1.jpg',
        name: '兰博基尼-Huracan610',
        isnew: '二手',
        price: '200万',
        cars: [
          '2.0T-H4',
          '250p']
      },
    ]
    
    
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

  tabClick(e){
    console.log(e)
    if (e.detail.tabCurrent == 0){
      this.setData({
        isNew:true
      })
    }else{
      this.setData({
        isNew: false
      })
     
    }
  },

  caritemClick(e){
    let name = e.detail.itemData.name
      wx.navigateTo({
        
        url: '/pages/carDetail/carDetail?name='+ name

      })
  }
})