// components/carList02/carList02.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newsList:{
      type:Array,
      value: [
        {
          msg: " 自动挡4不准,一个比一个上车，别傻傻不知道了",
          timeago: '30分钟前',
          url: '/assets/1.jpg',
          zf: '1',
          pl: '1',
          dz: 23,
          isAdd: true
        },
        {
          msg: " 自动挡'4不准',一个比一个上车，别傻傻不知道了",
          timeago: '30分钟前',
          url: '/assets/2.jpg',
          zf: '2',
          pl: '2',
          dz: 23,
          isAdd: true
        },
        {
          msg: " 自动挡'4不准',一个比一个上车，别傻傻不知道了",
          timeago: '30分钟前',
          url: '/assets/3.jpg',
          zf: '3',
          pl: '3',
          dz: 23,
          isAdd: true
        }
      ],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //跳转到详情页
    detail1(e) {
      this.triggerEvent('detail',{
        imgurl:e.currentTarget.dataset.imgurl
      })
    },

    //点赞按钮
    dzClick(e) {
      let index = e.currentTarget.dataset.index
      let count = 'newsList[' + index + '].dz'
      let isAdd = 'newsList[' + index + '].isAdd'
      console.log(this.data.newsList[index].isAdd)
      if (this.data.newsList[index].isAdd) {
        this.setData({
          [count]: this.data.newsList[index].dz + 1,
          [isAdd]: !this.data.newsList[index].isAdd

        })
      } else {
        this.setData({
          [count]: this.data.newsList[index].dz - 1,
          [isAdd]: !this.data.newsList[index].isAdd

        })
      }

    },
  }
})
