// pages/my-index/my-index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectId: 0,
    avatar:"/images/hello.jpg",
    upAvatar:false,
    user_name:"Adah、木易",
    showModalStatus:false,
    psignature:null,
    personalized_signature:"未填写",
    genderValue:"男",
    gender:[
      { name: "男", value: "男性", },
      { name: "女", value: "女性", }
    ],
    showDatePicker:true,
    dateValue:"1990-01-01",
    date:{
      fields:"day",
      start:'1900-01-01',
      end:'2100-12-31',
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var personalized_signature = this.data.personalized_signature;
    if (personalized_signature.length>20){
      var psignature = personalized_signature.substring(0, 20) + "...";
      this.setData({
        psignature: psignature
      })
    }else{
      this.setData({
        psignature: personalized_signature
      })
    }
    
    wx.showToast({
      title: '111',
    })
  },

  changeAvatar:function(){
    var that = this;
    wx.chooseImage({
      count:1,
      sizeType:['compressed'],
      sourceType:['album','camera'],
      success: function(res) {
        console.log(res.tempFilePaths + "修改页面");
        var avatar = res.tempFilePaths;
        that.setData({
          avatar: avatar,
          upAvatar: true
        })
      },
    })
  },

  modify:function(event){
    var targetId = event.currentTarget.dataset.targetid;
    var value;
    if (targetId==0)
        value = this.data.user_name;
    else
        value = this.data.personalized_signature;
    wx.navigateTo({
      url: 'modify/modify?detail='+targetId+"|"+value,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  powerDrawer:function(event){
    var currentStatu = event.currentTarget.dataset.statu;
    this.util(currentStatu);
  },
  util:function(currentStatu){
    //创建动画实例
    var animation = wx.createAnimation({
      duration:200,
      timingFunction:"linear",
      delay:0
    });

    this.animation = animation;
    animation.opacity(0).rotateX(-100).step();//执行第一组动画
    this.setData({
      animationData:animation.export()
    })

    setTimeout(function(){
      animation.opacity(1).rotateX(0).step();
      this.setData({
        animationData: animation
      }) 
      //关闭
      if(currentStatu=="close"){
        this.setData({
          showModalStatus: false
        })
      }
    }.bind(this),200)
    //显示
    if(currentStatu == "open"){
      this.setData({
        showModalStatus:true
      })
    }
  },

  radioChange:function(event){
    var value = event.detail.value;
    this.setData({
      genderValue:value
    })
  },

  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
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