const filter = [
  {
    id:"1",
    nickName:"使用滤镜",
    collect:"❤点击收藏",
    collected:"❤已收藏",
    isAdd:false,
    reward:"2",
    avatarUrl:"/pages/images/lujing1.jpg",
    Style:"filter: brightness(11); filter:grayscale(9);filter: contrast(11),filter: saturate(10) ;filter: hue-rotate(0deg) ;filter:sepia(0.4);",
    count: "#ins风 美食滤镜技巧 ",
    name: "美食滤镜技巧 ",
  },
  {
    id:"2",
    nickName: "使用滤镜",
    collect:"❤点击收藏",
    collected:"❤已收藏",
    isAdd:false,
    reward: "2",
    avatarUrl:"/pages/images/lujing2.jpg",
    Style:"filter: hue-rotate(185deg);filter: saturate(2.0);",
    count: "#春天的花 #花",
    name: "三月好事正酿三月如愿以偿",
  },
  {
    id:"3",
    nickName: "使用滤镜",
    collect:"❤点击收藏",
    collected:"❤已收藏",
    isAdd:false,
    reward: "2",
    avatarUrl:"/pages/images/lujing3.jpg",
    Style:"filter: contrast(1.5);",
    count: "#滤镜调色#滤镜 复古曝光低像素滤镜调色",
    name: "复古曝光低像素滤镜调色",
  },
  {
    id:"4",
    nickName: "使用滤镜",
    collect:"❤点击收藏",
    collected:"❤已收藏",
    isAdd:false,
    reward: "2",
    avatarUrl:"/pages/images/lujing4.jpg",
    Style:"filter: blur(1.2px);filter: contrast(1.2);filter: saturate(0.8);",
    count: "#可爱 #韩系穿搭 ",
    name: "韩系可爱贴纸日常拍照 ",
  },
  {
    id:"5",
    nickName: "使用滤镜",
    collect:"❤点击收藏",
    collected:"❤已收藏",
    isAdd:false,
    reward: "2",
    avatarUrl:"/pages/images/lujing5.jpg",
    Style:"filter: hue-rotate(185deg);filter: saturate(2.0);",
    count: "#涂鸦#花样描边涂鸦  可爱猫咪描边涂鸦拍照配方",
    name: "可爱猫咪描边涂鸦拍照配方",
  },
  {
    id:"6",
    nickName: "使用滤镜",
    collect:"❤点击收藏",
    collected:"❤已收藏",
    isAdd:false,
    reward: "2",
    avatarUrl:"/pages/images/lun1.jpg",
    Style:"filter: hue-rotate(185deg);filter: saturate(2.0);",
    count: "#Plog #ins风",
    name: "ins风日常plog",
  },
  {
    id:"7",
    nickName: "使用滤镜",
    collect:"❤点击收藏",
    collected:"❤已收藏",
    isAdd:false,
    reward: "2",
    avatarUrl:"/pages/images/lun2.jpg",
    Style:"filter: hue-rotate(185deg);filter: saturate(2.0);",
    count: "#海报 高级杂志海报模板 ",
    name: "高级杂志海报模板  ",
  },
  {
    id:"8",
    nickName: "使用滤镜",
    collect:"❤点击收藏",
    collected:"❤已收藏",
    isAdd:false,
    reward: "2",
    avatarUrl:"/pages/images/lun3.jpg",
    Style:"filter: hue-rotate(185deg);filter: saturate(2.0);",
    count: "#ins风自拍效果挑战 #ins风",
    name: "ins风自拍lemoji",
  },
]

// 自定义函数：获取新闻列表
function getFilterList() {
  let list = [];
  for (var i = 0; i < filter.length; i++) {
    let obj = {};
    obj.id = filter[i].id;
    obj.nickName = filter[i].nickName;
    obj.collect = filter[i].collect;
    obj.collected = filter[i].collected;
    obj.reward = filter[i].reward;
    obj.avatarUrl = filter[i].avatarUrl;
    obj.Style = filter[i].Style;
    obj.isAdd = filter[i].isAdd;
    obj.count = filter[i].count;
    obj.name = filter[i].name;
    list.push(obj)
  }

  return list;
}


// 自定义函数：获取新闻内容
function getFilterDetail(filterID) {
  let msg = {
    code: '404',
    filter: {}
  };

  for (var i = 0; i < filter.length; i++) {
    if (filterID == filter[i].id) {
      msg.code = '200';
      msg.filter = filter[i];
      break;
    }
  }

  return msg;

}

module.exports = {
  getFilterList: getFilterList,
  getFilterDetail: getFilterDetail
}