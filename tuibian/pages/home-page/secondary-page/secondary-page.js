// pages/home-page/secondary-page/secondary-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchPanelShow:false,
    windowHeight:667,
    typeId:'',
    beautyId:'',
    videoTypeId:0,
    input_value:null,
    trials: ["油性试用1", "油性试用2", "油性试用3", "油性试用4", "油性试用5", "油性试用6", "油性试用7", "油性试用8", "油性试用3", "油性试用4", "油性试用5", "油性试用6", "油性试用4", "油性试用5", "油性试用6"],
    videoList:[
      {
        videotitle:"视频标题",
        view_number:1235,
        chat_number:123,
        video_duration:12.12,
        brief_introduction:"简介简介简介简介简介",
        user_name:"Adah、木易"
      }, {
        videotitle: "视频标题视频标题视频标题视频",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介简介简介简介简介介简介简介简介简介介简介简介简介简介介",
        user_name: "Adah、木易"
      }, {
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }, {
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }, {
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var str = options.detail;
      var detail = str.split("|");
    var windowHeight = wx.getSystemInfoSync().windowHeight;
      this.setData({
        typeId:detail[0],
        beautyId:detail[1],

        windowHeight:windowHeight,
      })
      console.log(detail);   
  },

  typeTransformUp:function(event){
    var videoid = this.data.videoTypeId;
    if (videoid!=0){
      videoid -= 1;
      this.setData({
        videoTypeId: videoid
      })
    }   
  },
  typeTransformDown: function (event) {
    var videoid = this.data.videoTypeId;
    var length = this.data.trials.length - 1;
    if (videoid != length) {
      videoid += 1;
      this.setData({
        videoTypeId: videoid
      })
    }
  },





  inputvalue:function(event){
    this.setData({
      input_value: event.detail.value
    })
  },

  onBindFocus: function (event) {
    this.setData({
      searchPanelShow: true
    });
  },

  search:function(){
    var input_value = this.data.input_value;
    console.log(input_value);
    this.setData({
      input_value:null
    })
  },

  onVideoType:function(event){
    var videoTypeId = event.currentTarget.dataset.videotypeid;
    console.log(videoTypeId);
    this.setData({
      videoTypeId: videoTypeId,
    })
  },

  onVideoTap:function(event){
    var videoId = event.currentTarget.dataset.videoid;
    console.log(videoId);
    wx.navigateTo({
      url: 'video-detail/video-detail?videoId='+videoId,
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