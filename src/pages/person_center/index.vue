<template>
  <div class="container" >
    <!-- :name="userInfo.nickName" -->
    <userinfo :name="userInfo.nickName" :img="userInfo.avatarUrl"></userinfo>
    <div class="wxui-grids">
      <grid @clickgrid="clickGridHandle" :griditem="item" v-for="(item, index) in grids" v-bind:key="index"></grid>
    </div>
  </div>
</template>

<script>
import grid from '@/components/Grid'
import userinfo from '@/components/userInfo'

export default {
  data() {
    return {
       userInfo: {},
       grids: [
        {
          name: "button",
          img: '/static/images/icon_nav_button.png'
        },
         {
          name: "cell",
          img: '/static/images/icon_nav_cell.png'
        },
         {
          name: "dialog",
          img: '/static/images/icon_nav_dialog.png'
        },
         {
          name: "icons",
          img: '/static/images/icon_nav_icons.png'
        },
         {
          name: "center",
          img: '/static/images/icon_nav_button.png'
        },
         {
          name: "action",
          img: '/static/images/icon_nav_actionSheet.png'
        },
         {
          name: "article",
          img: '/static/images/icon_nav_article.png'
        }
        ,
         {
          name: "panel",
          img: '/static/images/icon_nav_panel.png'
        },
         {
          name: "toast",
          img: '/static/images/icon_nav_toast.png'
        }
       ]
       
    };
  },
  components: {
    grid,
    userinfo
  },
  computed: {

  },
  methods: {
    getUserInfo() {
      //调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              console.log(res);
              this.userInfo = res.userInfo;
              wx.setStorageSync('userInfo', this.userInfo) 
            }
          });
        }
      });
    },
    clickGridHandle (msg) {
      console.log("监听触发子组件的clickgrid事件");
      //从子组件传过来的值
      console.log(msg);
      wx.showToast({
        title: msg.name
      })
    }
  },
  //created生命周期,组件创建后执行
  created() {

  },
  mounted() {
        //从缓存中获取登录用户信息
    if(wx.getStorageSync('userInfo')) {
        this.userInfo = wx.getStorageSync('userInfo')
    }
  },

};
</script>

<style lang="scss" scoped>
$borderColor: #d9d9d9;
.wxui-grids {
  margin-top: 10rpx;
  border-top: 1rpx solid  $borderColor;
  border-left: 1rpx solid $borderColor;
  overflow: hidden;
}


</style>
