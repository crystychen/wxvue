<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())  //在数组前面插入时间
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  height: 100%;
  background: #F5F5F5;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
text,view{
    font-family: "OpenSansRegular";
    /*以iphone6为例：750rpx=750物理像素=375px，1rpx=0.5px
                    750rpx=768px,1rpx=768/750px
    */
    font-size: 28rpx;
    color:#333333;
}
button {
  padding: 0;
  margin: 0;
}
button::after {
  border: none;
}
::-webkit-scrollbar{
  width: 0;
  height: 0;
  color: transparent;
}
</style>
