// components/leftTab/leftTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    tabList: {
      type:Array,
      value:['新车', '二手车'],
      
    },

    tabCurrent:{
      type:Number,
      value:0
    },

    fontSize: {
      type:String,
      value: '1rem'
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
    tabClick(e) {
      this.setData({
        tabCurrent: e.currentTarget.dataset.index
      })
    
    this.triggerEvent('tabClick',{
      tabCurrent: this.data.tabCurrent
    })
    }
  }
})
