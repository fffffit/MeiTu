var common = require('../utils/common.js')
Page({
  data:{
    filter:" ",
    bgImageSrc:" ",
    isLeaded: false,
    copy: " ",
    filters: []
  },
  getFilter: function(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      filter:this.data.fliters[id-1].Style
    })
  },
  switchCamera() {
    const currentCameraPosition = this.data.cameraPosition;
    const newCameraPosition = currentCameraPosition === 'back' ? 'front' : 'back';
    this.setData({
      cameraPosition: newCameraPosition
    });
  },
  takePhoto: function() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempImagePath,
          success: (res) => {
            wx.showToast({
              title: '保存成功',
              icon: 'success'
            });
          },
          fail: (error) => {
            wx.showToast({
              title: '保存失败',
              icon: 'none'
            });
          }
        });
      },
      fail: (error) => {
        console.error('拍照失败', error);
      }
    });
  },
  onLoad: function(options) {
    let list = []
    list = common.getFilterList()
    let n = list.length;
    this.setData({
      fliters:list,
      list1:list[0],
      list2:list[1],
      list3:list[2],
      list4:list[3],
    })
  }
})