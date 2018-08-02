<template>
    <div class="user_wrap">
        <img class="user_img" :src="img" alt="">
        <p class="user_name">{{name}}</p>    
    </div>    
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "用户名"
    },
    img: {
        type: String,
        default: "/static/images/nologinuser.png"
    }
  }
};
</script>

<style scoped>
.user_wrap {
  text-align: center;
  padding: 20rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(92, 169, 241, 0.8);
}
.user_img {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}
.user_name {
    margin-top: 10rpx;
    padding: 10rpx 0;
    font-size: 30rpx;
}
</style>


