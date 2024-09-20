Page({
  data: {
    bgImageSrc: '/pages/images/zishi11.png',
    cameraWidth: 0,
    devicePosition: 'back' ,
    showView: true, // 初始化为显示状态
    stv: {
      offsetX: 0,
      offsetY: 0,
      zoom: false, //是否缩放状态
      distance: 0,  //两指距离
      scale: 1,  //缩放倍数
    },// 默认使用后置摄像头,

  },
  chooseMedia0: function() {
    wx.chooseMedia({
      mediaType: ['image'], // 仅选择图片
      sourceType: ['album'], // 从相册选择
      success: (res) => {
        var tempFilePath = res.tempFiles[0].tempFilePath;
        // 更新image组件的src属性
        this.setData({
          bgImageSrc: tempFilePath
        });
      }
    })
  },
  chooseMedia1: function() {
  
        // 更新image组件的src属性
        this.setData({
          bgImageSrc: "/pages/images/zishi11.png",
        });
 
   
  },
  chooseMedia2: function() {
  
    // 更新image组件的src属性
    this.setData({
      bgImageSrc: "/pages/images/zishi21.png",
    });


},
chooseMedia3: function() {
  
  // 更新image组件的src属性
  this.setData({
    bgImageSrc: "/pages/images/zishi31.png",
  });


},

  // 其他函数和生命周期函数

  onReady: function() {
    const query = wx.createSelectorQuery();
    query.select('#camera').boundingClientRect(rect => {
      const cameraWidth = rect.width;
      this.setData({
        cameraWidth: cameraWidth
      });
    }).exec();
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
  switchCamera() {
    const currentCameraPosition = this.data.cameraPosition;
    const newCameraPosition = currentCameraPosition === 'back' ? 'front' : 'back';
    this.setData({
      cameraPosition: newCameraPosition
    });
  },
  touchstartCallback: function(e) {
    //触摸开始
    console.log('touchstartCallback');
    console.log(e);

    if (e.touches.length === 1) {
      let {clientX, clientY} = e.touches[0];
      this.startX = clientX;
      this.startY = clientY;
      this.touchStartEvent = e.touches;
    } else {
      let xMove = e.touches[1].clientX - e.touches[0].clientX;
      let yMove = e.touches[1].clientY - e.touches[0].clientY;
      let distance = Math.sqrt(xMove * xMove + yMove * yMove);
      this.setData({
        'stv.distance': distance,
        'stv.zoom': true, //缩放状态
      })
    }

  },
  touchmoveCallback: function(e) {
    //触摸移动中
    //console.log('touchmoveCallback');
    //console.log(e);

    if (e.touches.length === 1) {
      //单指移动
      if (this.data.stv.zoom) {
        //缩放状态，不处理单指
        return ;
      }
      let {clientX, clientY} = e.touches[0];
      let offsetX = clientX - this.startX;
      let offsetY = clientY- this.startY;
      this.startX = clientX;
      this.startY = clientY;
      let {stv} = this.data;
      stv.offsetX += offsetX;
      stv.offsetY += offsetY;
      stv.offsetLeftX = -stv.offsetX;
      stv.offsetLeftY = -stv.offsetLeftY;
      this.setData({
        stv: stv
      });

    } else {
      //双指缩放
      let xMove = e.touches[1].clientX - e.touches[0].clientX;
      let yMove = e.touches[1].clientY - e.touches[0].clientY;
      let distance = Math.sqrt(xMove * xMove + yMove * yMove);

      let distanceDiff = distance - this.data.stv.distance;
      let newScale = this.data.stv.scale + 0.005 * distanceDiff;

      this.setData({
        'stv.distance': distance,
        'stv.scale': newScale,
      })
    }

  },
  touchendCallback: function(e) {
    //触摸结束
    console.log('touchendCallback');
    console.log(e);

    if (e.touches.length === 0) {
      this.setData({
        'stv.zoom': false, //重置缩放状态
      })
    }
  },
  onLoad: function () {
    console.log('onLoad');
  },
  toggleView: function () {
    // 取反 showView 的值，实现隐藏/显示的切换
    this.setData({
      showView: !this.data.showView
    });
  },
})