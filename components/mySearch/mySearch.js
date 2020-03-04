// components/mySearch/mySearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputValue: {
      type:String,
      value:''
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
    inputEvent(e){
      this.triggerEvent('inputEvent',{
          seachValue:e.detail.value
      })
      
    },

    clearEvent(){
      this.triggerEvent('clearEvent')
    }
  }
})
