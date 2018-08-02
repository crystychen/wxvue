<template>
  <div class="container" > 
    <nav class="nav-bar">
      <p>蝶恋花</p>
    </nav>
    <p class="title">{{title}}</p>
    <!-- <a class="link" href="/pages/grids/main">Grids</a> -->
    <div class="goodlist-wrap" >
      <!-- <div v-for="(index,item) in goods" v-bind:key="index"> -->
        <gooditem v-for="(item, index) in goods" v-bind:key="index" :gooditem="item" :@TapImg="toDetail" :@loadImg="onImageLoad"></gooditem>
    </div>
      <!-- <a class="link" href="/pages/list/main">列表</a> -->
  </div>
</template>

<script>
import gooditem from "@/components/goodItem";
var myPluginInterface = requirePlugin('myPlugin')

export default {
  data() {
    return {
      title: "发现",
      goods: [
        {
          id: 1,
          img: '/static/images/img/红尘陌上1.jpg',
          title: '为了这次相聚, 我连见面时的呼吸都曾反复练习',
          starnum: '22',
          lovenum: '12',
          comment: '3'
        },
        {
          id: 2,
          img: '/static/images/img/water4.jpg',
          title: '为了这次相聚, 我连见面时的呼吸都曾反复练习',
          starnum: '25',
          lovenum: '20',
          comment: '7'
        },
        {
          id: 3,
          img: '/static/images/img/water5.jpg',
          title: '为了这次相聚, 我连见面时的呼吸都曾反复练习',
          starnum: '2',
          lovenum: '1',
          comment: '2'
        },
        {
          id: 4,
          img: '/static/images/img/water6.jpg',
          title: '为了这次相聚, 我连见面时的呼吸都曾反复练习',
          starnum: '10',
          lovenum: '28',
          comment: '10'
        }
      ]
    };
  },
  components: {
    gooditem
  },
  computed: {},
  methods: {
    getUserInfo() {
      //调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              console.log(res);
              this.userInfo = res.userInfo;
              wx.setStorageSync("userInfo", this.userInfo);
            }
          });
        }
      });
    },
    toDetail(id) {
      wx.navigateTo({
        url: `/pages/good_detail/main?id=${id}`
      });
    },
    onImageLoad(obj) {
      // let oImgW = e.detail.width;         //图片原始宽度
      // let oImgH = e.detail.height;        //图片原始高度
      console.log(obj)
    }
  },
  created() {
    //调用登录接口
    this.getUserInfo();
    this.onImageLoad();
    // myPluginInterface.getData()
  }
};
</script>

<style lang="scss" scoped>
$bcgColor: #fcfafa;
$mfcolor: rgb(44, 43, 43);
.container {
  width: 100%;
  height: 100%;
  background: $bcgColor;
  color: $mfcolor;
  position: relative;
  .navbar {
    width: 100%;
    height: 70rpx;
    text-align: center;
    line-height: 70rpx;
  }
  .link {
    position: fixed;
    right: 0;
    top: 0;
  }
  .title {
    width: 100%;
    text-align: center;
  }
  .goodlist-wrap {
    width: 100%;
  }
}
</style>
