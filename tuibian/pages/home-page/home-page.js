var beautyMakeupData = require('../../data/home-page-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    beautyMakeupType: ['皮肤类型', '好评最多', '收藏最多', '点击最多', '推荐最高', '大牌护肤', '大牌美妆'],
    sceneMakeup: ['职业妆','日常妆','约会妆','少女妆','派对妆','宴会妆','日系妆','韩系妆'],
    makeupLook: ['全妆篇', '眼妆篇', '唇妆篇', '脸型篇'],
    tryType:[0,1,2,3,4,5,6,7],
    typeId:0,
    typeId1: 0,
    winWidth:0,
    winHeight:0,
    arrayLength:8,
    
    containerShow:true,
    searchPanelShow:false,
    inpuVal: "",//input框内值
    listarr: [],//创建数组
    SearchText: '取消',//按钮变动值
    keydown_number: 0,//检测input框内是否有内容
    input_value: "",//value值
    hostarr: ['适油性', '肿泡眼', '职业妆', '适干性', '单眼皮', '显白'],//热门搜索接收请求存储数组  
    genderIf:true,
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
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var page = this;
      this.setData({
        beautyMakeup_key: beautyMakeupData.beautyMakeupList
      });

      wx.getSystemInfo({
        success: function(res) {
          page.setData({winWidth:res.windowWidth});
          page.setData({winHeight:600});
        },
      });

    let This = this;

    //读取缓存历史搜索记录
    wx.getStorage({
      key: 'list_arr',
      success: function (res) {
        This.setData({
          listarr: res.data
        })
      }
    })
  },

  genderTransform:function(event){
    //获取应用实例
    const app = getApp();
    const genderIf = app.globalData.genderIf;
    // 获取现在的值
    app.globalData.genderIf = !genderIf;
    this.setData({
      genderIf: !genderIf
    })
  },

  stopTouchMove: function () {
    return false;
  },

  onBindFocus:function(event){
    this.setData({
      containerShow: false,
      searchPanelShow: true
    });
    wx.setNavigationBarTitle({
      title:"搜索"
    });
  },

  onClickTypeTap:function(event){
    var typeid = event.currentTarget.dataset.typeid;
    var length = beautyMakeupData.beautyMakeupList[typeid].length;
    // console.log(length);
    this.setData({
      typeId:typeid,
      arrayLength:length
    })

  },
  onBindChangeTap:function(event){
    var current = event.detail.current;
    var length = beautyMakeupData.beautyMakeupList[current].length;
    this.setData({
      typeId:current,
      arrayLength: length
    })
  },

  onBeautyMakeupClickTap:function(event){
    var typeId = this.data.typeId;
    var beautyId = event.currentTarget.dataset.beautyid;
    console.log(typeId, beautyId);
    wx.navigateTo({
      url: 'secondary-page/secondary-page?detail='+typeId+"|"+beautyId,
    })
  },
  
  onClickTypeTap1: function (event) {
    var typeid1 = event.currentTarget.dataset.typeid1;
    console.log(event);
    this.setData({
      typeId1: typeid1
    })
  },
  onBindChangeTap1: function (event) {
    var current1 = event.detail.current;
    this.setData({
      typeId1: current1
    })
  },
  onBeautyMakeupListLen:function(){

  },

  onVideoTypeClickTap:function(event){
    var videoTypeId = this.data.typeId1;//妆容id，职业、日常。。。
    var videoTypeid = event.currentTarget.dataset.videotypeid;//具体哪一个妆的id
    console.log(videoTypeId,videoTypeid);
  },

  onVideoTap: function (event) {
    var videoId = event.currentTarget.dataset.videoid;
    console.log(videoId);
    wx.navigateTo({
      url: 'secondary-page/video-detail/video-detail?videoId=' + videoId,
    })
  },

  //取值input判断输入框内容修改按钮
  inputvalue: function (event) {
    //console.log(event);
    this.setData({
      inputVal: event.detail.value 
    })
    if (event.detail.cursor != 0) {
      this.setData({
        SearchText: "搜索",
        keydown_number: 1
      })
    } else {
      this.setData({
        SearchText: "取消",
        keydown_number: 0
      })
    }
  },
  //搜索方法
  search: function () {
    if (this.data.keydown_number == 1) {
      let This = this;
      //把获取的input值插入数组里面
      let arr = this.data.listarr;
      console.log(this.data.inputVal)
      console.log(this.data.input_value)
      //判断取值是手动输入还是点击赋值
      if (this.data.input_value == "") {
        // console.log('进来第er个')
        // 判断数组中是否已存在
        let arrnum = arr.indexOf(this.data.inputVal);
        console.log(arr.indexOf(this.data.inputVal));
        if (arrnum != -1) {
          // 删除已存在后重新插入至数组
          arr.splice(arrnum, 1)
          arr.unshift(this.data.inputVal);

        } else {
          arr.unshift(this.data.inputVal);
        }

      } else {
        console.log('进来第一个')
        let arr_num = arr.indexOf(this.data.input_value);
        console.log(arr.indexOf(this.data.input_value));
        if (arr_num != -1) {
          arr.splice(arr_num, 1)
          arr.unshift(this.data.input_value);
        } else {
          arr.unshift(this.data.input_value);
        }

      }
      console.log(arr)

      //存储搜索记录
      wx.setStorage({
        key: "list_arr",
        data: arr
      })


      //取出搜索记录
      wx.getStorage({
        key: 'list_arr',
        success: function (res) {
          This.setData({
            listarr: res.data
          })
        }
      })
      this.setData({
        input_value: '',
      })
    } else {
      console.log("取消");
      //设置当前页标题
      wx.setNavigationBarTitle({
        title: '蜕变'
      });
      this.setData({
        containerShow: true,
        searchPanelShow: false
      })
    }

  },
  //清除搜索记录
  delete_list: function () {
    //清除当前数据
    this.setData({
      listarr: []
    });
    //清除缓存数据
    wx.removeStorage({
      key: 'list_arr'
    })
  },
  //点击赋值到input框
  this_value: function (e) {
    this.setData({
      name_focus: true
    })
    let value = e.currentTarget.dataset.text;
    this.setData({
      input_value: value,
      SearchText: "搜索",
      keydown_number: 1
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