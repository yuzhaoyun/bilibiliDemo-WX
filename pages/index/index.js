Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的导航菜单索引
    currentIndexNav:0,
    // 首页导航数据
    navList:[],
    // 轮播图数据
    swiperList:[],
    // 视频数据
    videosList:[]
  },

  /**
   * 获取首页导航数据
   */
  getNavList(){
    // 备份this
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navlist',
      data:{},
      header:{},
      success(res){
        if(res.data.code == 0){
          that.setData({
            navList:res.data.data.navList
          });
        }
      },
      fail(res){

      },
      complete(res){

      }
    });
  },
  /**
   * 获取轮播图数据 
   */
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      data: {},
      // method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        if(res.data.code === 0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  /**
   * 获取视频数据 
   */
  getVideoList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      data: {},
      // method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success(res){
        // success
        if(res.data.code === 0){
          that.setData({
            videosList: res.data.data.videosList
          })
        }
      },
      fail() {
        // fail
      },
      complete() {
        // complete
      }
    })
  },

  // 点击首页导航按钮
  activeNav(e){
    this.setData({
      currentIndexNav : e.target.dataset.index
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页导航数据
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
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