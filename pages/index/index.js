

Page({
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:5000,
    duration:1000,
    imgUrls:[
      "/pages/images/haibao/1.jpg",
      "/pages/images/haibao/2.jpg",
      "/pages/images/haibao/3.jpg"
    ],
    hotList:[
      {"id":1,"listPic":"https://api.mofun365.com:8888/images/goods/1555850845474.jpg","goodsName":"微信小程序开发图解案例教程","goodsPrice":62.8},
      {"id":2,"listPic":"https://api.mofun365.com:8888/images/goods/1555851154057.jpg","goodsName":"微信小程序开发全案精讲","goodsPrice":41.88},
      {"id":3,"listPic":"https://api.mofun365.com:8888/images/goods/1555851345937.jpg","goodsName":"第一行代码Java","goodsPrice":57.7}
    ],
    splikeList:[
      {"id":4,"listPic":"https://api.mofun365.com:8888/images/goods/1555851497575.jpg","goodsName":"Android原理解析与开发指南","goodsPrice":35.99},
      {"id":5,"listPic":"https://gimg3.baidu.com/topone/src=https%3A%2F%2Fbkimg.cdn.bcebos.com%2Fsmart%2F8ad4b31c8701a18b87d61ffb5d64100828381f305079-bkimg-process%2Cv_1%2Crw_1%2Crh_1%2Cmaxl_800%2Cpad_1%3Fx-bce-process%3Dimage%2Fresize%2Cm_pad%2Cw_348%2Ch_348%2Ccolor_ffffff&refer=http%3A%2F%2Fwww.baidu.com&app=2011&size=f200,200&n=0&g=0n&er=404&q=75&fmt=auto&maxorilen2heic=2000000?sec=1728838800&t=1577e5e5b7c308b732217c71a4839405","goodsName":"响应式Web开发项目教程","goodsPrice":36.4},
      {"id":6,"listPic":"https://api.mofun365.com:8888/images/goods/1555851817322.jpg","goodsName":"第一行代码C语言","goodsPrice":41.99}
    ],
    bestSellerList:[
      {"id":7,"listPic":"https://api.mofun365.com:8888/images/goods/1555851965264.jpg","goodsName":"前端HTML+CSS修炼之道","goodsPrice":57.7},
      {"id":8,"listPic":"https://api.mofun365.com:8888/images/goods/1555850845474.jpg","goodsName":"微信小程序开发图解案例教程","goodsPrice":62.8},
      {"id":9,"listPic":"https://api.mofun365.com:8888/images/goods/1555851154057.jpg","goodsName":"微信小程序开发全案精讲","goodsPrice":41.8}
    ]
  },
  searchInput:function(e){
    wx.navigateTo({
      url:'../search/search',
    })
  },
  more:function(e){
    var id = e.currentTarget.id;
    wx.navigateTo({
      url:'../goods/goods?id='+id,
    })
  }
})  
//     motto: 'Hello World',
//     userInfo: {
//       avatarUrl: defaultAvatarUrl,
//       nickName: '',
//     },
//     hasUserInfo: false,
//     canIUseGetUserProfile: wx.canIUse('getUserProfile'),
//     canIUseNicknameComp: wx.canIUse('input.type.nickname'),
//   },
//   bindViewTap() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onChooseAvatar(e) {
//     const { avatarUrl } = e.detail
//     const { nickName } = this.data.userInfo
//     this.setData({
//       "userInfo.avatarUrl": avatarUrl,
//       hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
//     })
//   },
//   onInputChange(e) {
//     const nickName = e.detail.value
//     const { avatarUrl } = this.data.userInfo
//     this.setData({
//       "userInfo.nickName": nickName,
//       hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
//     })
//   },
//   getUserProfile(e) {
//     // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//     wx.getUserProfile({
//       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
//       success: (res) => {
//         console.log(res)
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     })
//   },
// })
