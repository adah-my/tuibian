// pages/my-index/edit-data-page/modify/modify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    targetId:0,
    tips:"2-10个字符，一个月只能修改一次",
    height:400,
    value:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var str = options.detail;
    var detail = str.split("|");
    var targetId = detail[0];
    var value = detail[1];
    if (targetId==0){
      this.setData({
        tips: "2-10个字符，一个月只能修改一次",
        height: 50,
        targetId:0,
        value: value
      })
    }else{
      this.setData({
        tips: "有趣的签名会让更多人喜欢哦",
        height: 400,
        targetId: 1,
        value: value
      })
    }
  },

  bindFormSubmit: function (event) {
    var targetId = this.data.targetId;
    var str = event.detail.value.textarea;
    var pages = getCurrentPages();
    var prepages = pages[pages.length-2];//上一级页面
    console.log(targetId);
    if (targetId==0){
      prepages.setData({
        user_name: str
      })
    }else{

      if(str.length>20){
        var str1 = str.substring(0, 20)+"...";
        prepages.setData({
          personalized_signature: str,
          psignature: str1
        })
      }else{
        prepages.setData({
          personalized_signature: str,
          psignature: str
        })
      }     
    }


    wx.navigateBack({
      delta:1
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