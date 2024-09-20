// pages/healdata/healthydata.ts
var common = require('../utils/common.js')
Page({
  /**
   * 页面的初始数据
   */
  data:{
    bgColor: "#fbeeed",
    aa:[],
  },
  gotoPage: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({      
        url: '/pages/filter/filter?id='+id,    //要跳转到的页面路径
    })
 },
  /**
   * 自定义函数--添加收藏
   */
  addFavorites: function(e) {
    const id = e.currentTarget.dataset.bid-1;
    const isAdd = "aa["+id+"].isAdd"
    this.setData({
      [isAdd]:true
    })
    wx.setStorageSync(this.data.aa[id].id, this.data.aa[id])
  },
  /**
   * 自定义函数--取消收藏
   */
  cancelFavorites: function(e) {
    const id = e.currentTarget.dataset.bid-1;
    const isAdd = "aa["+id+"].isAdd"
    this.setData({
      [isAdd]:false
    })
    wx.removeStorageSync(this.data.aa[id].id)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取新闻列表
    let list = common.getFilterList()
    // 读取本地缓存信息
    let info = wx.getStorageInfoSync()
    // 获取全部的key信息
    let keys = info.keys
    // 获取新闻总数量
    let num = keys.length
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i])
      for(var j=0; j<7; j++){
        if(list[j].id==obj.id) list[j]=obj;
      }
    }
    // 更新新闻列表
    this.setData({
      aa:list
    })
  },

})