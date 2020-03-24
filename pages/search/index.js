/* 
1 输入框绑定 值改变事件 input事件
  1 获取到输入框的值
  2 合法性判断
  3 校验通过 把输入框的值 发送到后台
  4 返回的数据打印到页面上
2 防抖 定时器 节流
  0 防抖 输入框中 防止重复输入 重复发送请求
  1 节流 用在页面上拉和下拉
  1 定义全局的计时器
*/
import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    // 取消按钮是否选中
    isFocus:false,
    // 输入框
    inpValue:""
  },
  TimeId:-1,
  // 输入框的只改变 就会触发的事件
  handleInput(e){
    // 1 获取输入框的值
    const {value} = e.detail;
    // 2 检验合法性
    if(!value.trim()){
      this.setData({
        goods:[],
        isFocus:false
      })
      // 值不合法
      return;
    }
    // 3 发送请求
    this.setData({isFocus:true});
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      this.qsearch(value);
    },1000);
  },
  // 发送请求获取搜索建议 数据
  async qsearch(query){
    const goods = await request({url:"/goods/qsearch",data:{query}});
    this.setData({
      goods:goods
    })
  },
  // 点击取消按钮
  handleCancel(){
    this.setData({
      inpValue:"",
      isFocus:false,
      goods:[]
    })
  }
})