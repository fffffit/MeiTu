var common = require('../utils/common.js')
Page({
  data:{
    filter:" ",
    bgImageSrc:" ",
    isLeaded: false,
    copy: " "
  },
  savePicture: function() {
    wx.downloadFile({
      url: this.data.bgImageSrc,//confirmationUrl图片地址
      success: (res) => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: (res) => {
            wx.showToast({
              title: '保存成功',
              duration:1000,
            })
          },
          fail: (err) => {
            wx.showToast({
              title: '获取权限失败',
              duration:1000,
            })
          }
        })
      }
    })
  },
  getFilter: function() {
    if(this.data.filter == "opacity:1"){
      console.log(1);
      this.setData({
        filter:this.data.copy
      })
    }else{
      console.log(2);
      this.setData({filter:"opacity:1"});
    }
  },
  chooseMedia0: function() {
    wx.chooseMedia({
      mediaType: ['image'], // 仅选择图片
      sourceType: ['album'], // 从相册选择
      success: (res) => {
        var tempFilePath = res.tempFiles[0].tempFilePath;
        // 更新image组件的src属性
        this.setData({
          bgImageSrc: tempFilePath,
          isLeaded:true
        });
      }
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

    // 获取页面跳转来时携带的新闻id
    let id = options.id;
    let result = common.getFilterDetail(id)
    if(result.code =='200'){
      this.setData({
        copy:result.filter.Style
      })
    }
  }
})