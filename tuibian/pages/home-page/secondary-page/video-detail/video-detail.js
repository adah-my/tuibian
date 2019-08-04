function getRandomColor(){
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}



Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoSrc:'http://upos-hz-mirrorcosu.acgvideo.com/upgcxcode/32/53/86035332/86035332-1-6.mp4?e=ig8euxZM2rNcNbRM7WdVhoM17wUVhwdEto8g5X10ugNcXBB_&deadline=1564832434&gen=playurl&nbs=1&oi=2018882976&os=cosu&platform=html5&trid=a21f1957b986433e8116a8897195f596&uipk=5&upsig=f1ade18c63e9e78dfc80c616567ed1a7&uparams=e,deadline,gen,nbs,oi,os,platform,trid,uipk&mid=0',
    windowHeight:667,
    releaseFocus: false,
    selectList:['简介','评论','商品'],
    selectId:0,
    cosmeticsList: ["化妆品1", "化妆品1", "化妆品1", "化妆品1", "化妆品1", "化妆品1", "化妆品1", "化妆品1"],
    starsList:[1,2,3,4,5],
    scoreList: [134,120,20,10,2,12],
    isShow:false,
    stars:[0,1,2,3,4],
    normalSrc: '/images/icon/star-none.png',
    selectedSrc: '/images/icon/star-x.png',
    thumbSrc: "/images/icon/thumb.jpg",
    thumb_xSrc: "/images/icon/thumb-x.jpg",
    key:5,
    progress:[5,4,3,2,1],
    tabArr:{
      curHdIndex:4
    },
    placeholder:'',
    ifvalue:null,
    commentsList:[{
      userName:"Adah、木易",
      content:"评论本体，思考和对方讲话为上看到回复第三款副教是否水电费算法是估计快了金坷垃授",
      date:"7-23",
      isThumb:false,
      thumbNum:22,
      chatNum:6,
    },{
        userName: "进击的火锅",
        content: "评论本体，思考和对方讲话为上看到回复第深啡网ifuefiahdhhfhhsh是卢克奶时间 阿好几十十九大肯德基神贶景福忽视的开发了了金坷垃授",
        date: "7-23",
        isThumb: false,
        thumbNum: 10,
        chatNum: 2,
      },{
        userName: "耿爽",
        content: "评刷卡缴费的思考京东方IE估计快了金坷垃授",
        date: "7-24",
        isThumb: false,
        thumbNum: 1,
        chatNum: 0,
      },],

      height:0,
      inputFocus:false,
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var str = options.videoId;
    console.log(str);
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      windowHeight: windowHeight,
    })

  },

  onSelectedTap:function(event){ 
    var selectid = event.currentTarget.dataset.selectid;
    console.log(selectid);
    this.setData({
      selectId:selectid
    })
  },

  onSubmit:function(){
    var key = this.data.key;
    var scoreList = this.data.scoreList;
    scoreList[0] += 1;
    // 给对应的星加人数未写
    console.log(key+"星评分");
    wx.showToast({
      title: '提交成功',
    })
    this.setData({
      scoreList: scoreList,
      isShow:'true'
    })
  },

  selectRight:function(event){
    var key = event.currentTarget.dataset.key;
    this.setData({
      key:key
    });
    console.log(key);
  },

  isThumbTap:function(event){
    var idx = event.target.dataset.idx;
    var commentsList = this.data.commentsList;
  
    if (commentsList[idx].isThumb){
      commentsList[idx].isThumb = false;
      commentsList[idx].thumbNum -= 1;
    }else{
      commentsList[idx].isThumb = true;
      commentsList[idx].thumbNum += 1;
    }
    this.setData({
      commentsList : commentsList
    })
  },

  chooseicon: function (event) {

    var strnumber = event.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = strnumber;
    this.setData({
      tabArr: _obj
    });
  },

  //监听input获得焦点

  bindfocus: function (event) {
    this.setData({
      // height: height,
      inputFocus:true
    })
  },
  //监听input失去焦点
  bindblur: function (e) {
      this.setData({
        inputFocus: false,
      })
  },
  // bindconfirm:function(event){
  //   var content = event.detail.value;
  //   console.log(content);
  //   this.setData({
  //     content: content
  //   })
  // },
  // bindconfirmTap:function(event){
    
  //   console.log(event);
  // },

  bindFormSubmit:function(event){
    var value = event.detail.value.input;
    var commentsList = this.data.commentsList;
    var list = {
      userName: "Adah、木易",
      content: value,
      date: "7-26",
      isThumb: false,
      thumbNum: 0,
      chatNum: 0,
    };
    commentsList.push(list);
    this.setData({
      ifvalue:"",
      value: value,
      commentsList: commentsList
    })

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
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