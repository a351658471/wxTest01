// pages/carFriend/carFriend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:['关注','广场','话题'],
    inputValue: '',
    PData:[
      {
        tx:'/assets/tx.jpg',
        author:'汤姆说车',
        isFocus:'关注',
        searchKey:'奔驰',
        describe:'外观年轻且不乏商务感，内饰个性十足，运动感十足，你喜欢么？',
        img:[
          '/assets/2.jpg',
          '/assets/1.jpg',
          '/assets/3.jpg',
        ],
        timeago: '30分钟前',
        zf: '2',
        pl: '2',
        dz: 23,
        isAdd: true,
      },
      {
        tx: '/assets/tx.jpg',
        author: '汤姆说车',
        isFocus: '关注',
        searchKey: '奔驰',
        describe: '外观年轻且不乏商务感，内饰个性十足，运动感十足，你喜欢么？',
        img: [
          '/assets/2.jpg',
          '/assets/1.jpg',
          '/assets/3.jpg',
        ],
        timeago: '30分钟前',
        zf: '2',
        pl: '2',
        dz: 23,
        isAdd: true,
      },
      {
        tx: '/assets/tx.jpg',
        author: '汤姆说车',
        isFocus: '关注',
        searchKey: '宝马',
        describe: '外观年轻且不乏商务感，内饰个性十足，运动感十足，你喜欢么？',
        img: [
          '/assets/2.jpg',
          '/assets/1.jpg',
          '/assets/3.jpg',
        ],
        timeago: '30分钟前',
        zf: '2',
        pl: '2',
        dz: 23,
        isAdd: true,
      },
      {
        tx: '/assets/tx.jpg',
        author: '汤姆说车',
        isFocus: '关注',
        searchKey: '宝马',
        describe: '外观年轻且不乏商务感，内饰个性十足，运动感十足，你喜欢么？',
        img: [
          '/assets/2.jpg',
          '/assets/1.jpg',
          '/assets/3.jpg',
        ],
        timeago: '30分钟前',
        zf: '2',
        pl: '2',
        dz: 23,
        isAdd: true,
      },
      {
        tx: '/assets/tx.jpg',
        author: '汤姆说车',
        isFocus: '关注',
        searchKey: '宝马',
        describe: '外观年轻且不乏商务感，内饰个性十足，运动感十足，你喜欢么？',
        img: [
          '/assets/2.jpg',
          '/assets/1.jpg',
          '/assets/3.jpg',
        ],
        timeago: '30分钟前',
        zf: '2',
        pl: '2',
        dz: 23,
        isAdd: true,
      },
      {
        tx: '/assets/tx.jpg',
        author: '汤姆说车',
        isFocus: '关注',
        searchKey: '奥迪',
        describe: '外观年轻且不乏商务感，内饰个性十足，运动感十足，你喜欢么？',
        img: [
          '/assets/2.jpg',
          '/assets/1.jpg',
          '/assets/3.jpg',
        ],
        timeago: '30分钟前',
        zf: '2',
        pl: '2',
        dz: 23,
        isAdd: true,
      }
    ],
    filterData:[]
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
    this.setData({
      filterData:this.data.PData
    })
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
  //搜索过滤
  inputEvent(e){
      let searchValue = e.detail.seachValue;
      let newlist = [];
      this.data.PData.forEach(item =>{
        if (item.searchKey.indexOf(searchValue) != -1){
          newlist.push(item)
        }
      })

      this.setData({
        filterData:newlist
      })

  },

  //clear
  clearEvent(){
    this.setData({
      filterData:this.data.PData,
      inputValue:''
    })
  },

  //点赞按钮
  dzClick(e) {
    let index = e.currentTarget.dataset.index
    let count = 'PData[' + index + '].dz'
    let isAdd = 'PData[' + index + '].isAdd'
    console.log(this.data.PData[index].isAdd)
    if (this.data.PData[index].isAdd) {
      this.setData({
        [count]: this.data.PData[index].dz + 1,
        [isAdd]: !this.data.PData[index].isAdd

      })

      wx.showToast({
        title: '点赞成功',
      })
    } else {
      this.setData({
        [count]: this.data.PData[index].dz - 1,
        [isAdd]: !this.data.PData[index].isAdd

      })
      wx.showToast({
        title: '取消点赞',
        duration:5000,
        success:()=>{
          console.log('1秒后关闭')
          setTimeout(()=>{
            wx.hideToast()
          },100)
        }
      })

    }

  }
})