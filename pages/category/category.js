// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  
  testAPI: function(e){
    console.log("start test function ");
    wx.request({
      url:'https://api.mofun365.com:8888/api/address/getAddressList',
      data:{
         provinceId:'10'
      },
      method:'GET',
      success:function (res) {
         console.log("success ------------------",res);
     },
     fail:function(){
       console.log("fail----")
     },
     complete:function(){}
    });
  },
  uploadFile: function (e) {
    wx.chooseImage({
      count:9,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success:function (res) {
        let tempFilesPath = res.tempFilePaths
        const uploadTask = wx.uploadFile({
          filePath: tempFilesPath[0],
          name: 'file',
          url: 'https://api.mofun365.com:8888/api/banner/wxUploadFile',
          header:{
            'content-type':'Aplication/json'
          },
          formData:{
            imgName:"我是图片名称",
            imgSize:"122kb",
            position:'wx'
          },
          success:function(res) {
            console.log(res)
          }
        });

        uploadTask.onHeadersReceived(function (res) {
          console.log(res)
        })

        uploadTask.offHeadersReceived(function (res) {
          console.log(res)
        })

        uploadTask.onProgressUpdate(function (res) {
          console.log(res)
        })

        uploadTask.offProgressUpdate(function (res) {
          console.log(res)
        })

        uploadTask.abort()
      },
    })
  },
  downLoadFile: function (e) {
    let page = this
    const downloadTask = wx.downloadFile({
      url: 'https://api.mofun365.com:8888/image/banner/1555848473813.jpg',
      type:'image',
      success:function (res) {
        console.log(res)
        var tempFilesPath = res.tempFilePaths;
        page.setData({
          src: tempFilesPath
        })
      }
    })
    
    downloadTask.onHeadersReceived(function (res) {
          console.log(res)
        })

        downloadTask.offHeadersReceived(function (res) {
          console.log(res)
        })

        downloadTask.onProgressUpdate(function (res) {
          console.log(res)
        })

        downloadTask.offProgressUpdate(function (res) {
          console.log(res)
        })

        downloadTask.abort()
      },
})