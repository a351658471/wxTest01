// components/carsList/carsList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    carData:{
      type:Array,
      value:[]
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
    caritemClick(e){
      console.log(e)
      this.triggerEvent('caritemClick',{
        itemData: e.currentTarget.dataset.item
      })
    }
  }
})
