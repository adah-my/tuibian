
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [
      {
        videoSrc: "/images/hello.jpg",
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
        videotitle: "视频标题",
        view_number: 1235,
        chat_number: 123,
        video_duration: 12.12,
        brief_introduction: "简介简介简介简介简介",
        user_name: "Adah、木易"
      }, {
        videoSrc: "/images/hello.jpg",
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

    //请求热门搜索

  },

  onVideoTap: function (event) {
    var videoId = event.currentTarget.dataset.videoid;
    console.log(videoId);

    wx.navigateTo({
      url: '/pages/home-page/secondary-page/video-detail/video-detail?videoId=' + videoId,
    })
  },

})
