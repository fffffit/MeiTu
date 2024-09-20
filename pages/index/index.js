//index.js
//获取应用实例
var app = getApp();
var cardTeams;
Page({
  gotoPage: function (e) {
    wx.navigateTo({      
        url: '/pages/lvjing/lvjing',    //要跳转到的页面路径
    })
  },
  jumpXi:function() {
    wx.navigateTo({
      url: '/pages/xiangji/xiangji'
    })
  },
  visitingCard:function() {
    wx.navigateTo({
      url: '/pages/visitingCard/visitingCard'
    })
  },
  waterMark:function() {
    wx.navigateTo({
      url: '/pages/waterMarkSet/waterMarkSet'
    })
  },
  word:function() {
    wx.navigateTo({
      url: '/pages/word/word'
    })
  },
  paint:function() {
    wx.navigateTo({
      url: '/pages/drawPic/drawPic'
    })
  },
  // photoCombine:function() {
  //   wx.navigateTo({
  //     url: '/pages/photoCombine/photoCombine'
  //   })
  // },
  photoCombine:function(){
    wx.chooseImage({
      count: 9,
      success: function (res) {
        let tempFilePaths = res.tempFilePaths
        var imagesArrJson = JSON.stringify(tempFilePaths);
        wx.navigateTo({
          url: '/pages/photoCombine/photoCombine?imageUrls=' + imagesArrJson,
        })
      },
    })
  },
  jumpPing:function() {

    wx.navigateTo({
      url: '/pages/wordCombine/wordCombine'
    })
  },
  yasuo:function() {

    wx.navigateTo({
      url: '/pages/yasuo/yasuo'
    })
  },
  data: {
    cardTeams: [{
      "viewid": "1",
      "imgsrc": "/pages/images/jiqiao1.jpg",
      "count": "#滤镜调色#滤镜 复古曝光低像素滤镜调色",
      "name": "复古曝光低像素滤镜调色",
    }, {
      "viewid": "2",
        "imgsrc": "/pages/images/jiqiao2.jpg",
        "count": "#涂鸦#花样描边涂鸦  可爱猫咪描边涂鸦拍照配方",
        "name": "可爱猫咪描边涂鸦拍照配方",
    }, {
      "viewid": "3",
        "imgsrc": "/pages/images/jiqiao3.jpg",
        "count": "#海报 高级杂志海报模板 ",
        "name": "高级杂志海报模板  ",
    }, {
      "viewid": "4",
        "imgsrc": "/pages/images/jiqiao4.jpg",
        "count": "#ins风 美食滤镜技巧 ",
        "name": "美食滤镜技巧 ",
    }
    ]
  },
  goToDetail: function (e) {
    // 获取新闻id
    let id = e.currentTarget.dataset.id

    // 跳转新页面
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  }
})