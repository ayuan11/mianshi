// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      {name:'joke',gender:'男'},
      {name:'rose',gender:'女'},
      {name:'aoke',gender:'男'},
      {name:'boke',gender:'男'},
      {name:'coke',gender:'女'},
      {name:'doke',gender:'女'},
      {name:'eoke',gender:'男'},
      {name:'foke',gender:'女'},
  ],
  list2:[{name:'joke',gender:'男'},
  {name:'rose',gender:'女'},
  {name:'aoke',gender:'男'},
  {name:'boke',gender:'男'},
  {name:'coke',gender:'女'},
  {name:'doke',gender:'女'},
  {name:'eoke',gender:'男'},
  {name:'foke',gender:'女'},
],
    items:[
      {value:'nv',name:'女'},
      {value:'nan',name:'男'},
      {value:'quanbu',name:'全部',checked:'true'}
    ]
  },

  //单选
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
   let {list,list2} = this.data
    if(e.detail.value == 'nv'){//点击女筛选性别为女的并赋值
      this.setData({
        list: [],
        list : list2.filter(item => item.gender === '女'),
      })
    }else if(e.detail.value == 'nan'){ //点击男筛选性别为男的并赋值
      this.setData({
        list: [],
        list : list2.filter(item => item.gender === '男'),
      })
    }else{
      this.setData({
        list:list2,
      })
    }
  },
  onPullDownRefresh:function(){
  wx.showNavigationBarLoading()
  let {list,list2} = this.data

  //模拟加载，获取全部内容
  this.setData({
    list:list2,
  })
 

  //让全部在刷新后处于选中状态
this.data.items[2].checked="true"
    this.setData({
      items: this.data.items
    })

 
  setTimeout(function(){
  wx.hideNavigationBarLoading() //完成停止加载
  wx.stopPullDownRefresh() //停止下拉刷新
  
  },1500);
  
  },
})
