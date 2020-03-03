//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    msg:['官方资讯','用车知识'],
    isCurrent:1,
    isShow:true,
    // newsList:[
    //   {
    //     msg:" 自动挡4不准,一个比一个上车，别傻傻不知道了",
    //     timeago:'30分钟前',
    //     url:'/assets/1.jpg',
    //     zf:'1',
    //     pl:'1',
    //     dz:23,
    //     isAdd:true
    //   },
    //   {
    //     msg: " 自动挡'4不准',一个比一个上车，别傻傻不知道了",
    //     timeago: '30分钟前',
    //     url: '/assets/2.jpg',
    //     zf: '2',
    //     pl: '2',
    //     dz: 23,
    //     isAdd: true
    //   },
    //   {
    //     msg: " 自动挡'4不准',一个比一个上车，别傻傻不知道了",
    //     timeago: '30分钟前',
    //     url: '/assets/3.jpg',
    //     zf: '3',
    //     pl: '3',
    //     dz: 23,
    //     isAdd: true
    //   }
    // ],
    tabList:['官方资讯','用车知识'],
    imgList: ['/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg'],
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  // tab选项
  tabClick(e) {
    let index = e.detail.tabCurrent
    this.setData({
      isCurrent:index
    })
    if(index == 0){
      this.setData({
        isShow:true
      })
    }else{
      this.setData({
        isShow:false
      })
    }
  },
 
 //详情
 detail1(e){
   console.log(e)
   let imgurl = e.detail.imgurl
   wx.navigateTo({
     url: './detail/detail?imgurl=' + imgurl
   })
 },

  zxDetail(){
   wx.navigateTo({
     url: './zxDetail/zxDetail',
   })
}

})
