Page({
  data:{
    result:[],
    name:"",
    goodsNames:[
      {"goodsName":"机器学习"},
      {"goodsName":"Spring Cloud"},
      {"goodsName":"网站"},
      {"goodsName":"Redis"},
      {"goodsName":"Memcached"},
      {"goodsName":"Vue"},
      {"goodsName":"Sping MVC"},
      {"goodsName":"小程序"},
      {"goodsName":"Oracle"},
      {"goodsName":"Java"},
    ]
  },
  formSubmit:function(e){
    var that = this;
    var goodsName = e.detail.value.goodsName;
    var array = [
      {"id":1,"goodsName":"微信小程序开发图解案例教程"},
      {"id":2,"goodsName":"微信小程序开发全案精讲"}
    ];
    that.setData({result:array});

  }
})