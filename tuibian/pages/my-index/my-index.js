// pages/my-index/my-index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      selectId:0,

    videoList: [
      {
        videoSrc: "/images/hello.jpg",
        videotitle: "标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
        view_number: 1245,
        chat_number: 123,
        video_duration: 12.12,
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
        view_number: 1235,
        chat_number: 145,
        video_duration: 14.12,
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
        view_number: 455,
        chat_number: 13,
        video_duration: 12.24,
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
        view_number: 166,
        chat_number: 73,
        video_duration: 16.52,
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
        view_number: 455,
        chat_number: 13,
        video_duration: 12.24,
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "标题标题标题标题标题标题标题标题标题标题标题标题标题标题",
        view_number: 166,
        chat_number: 73,
        video_duration: 16.52,
        user_name: "Adah、木易"
      }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      windowHeight: windowHeight
    })
  },
  onEditDataTap:function(event){
    wx.navigateTo({
      url: 'edit-data-page/edit-data-page'
    })
  },

  stopTouchMove: function () {
    return false;
  },

  onHistoryTap:function(evevt){
    this.setData({
      selectId: 0
    })
  },
  onCollectTap:function(){
    this.setData({
      selectId: 1
    })
  },
  onBindChangeTap: function (event) {
    var current = event.detail.current;
    this.setData({
      selectId: current
    })
  },

  onVideoTap: function (event) {
    var videoId = event.currentTarget.dataset.videoid;
    console.log(videoId);

    wx.navigateTo({
      url: '/pages/home-page/secondary-page/video-detail/video-detail?videoId=' + videoId,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})