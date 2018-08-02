<template>
        <div class="wxui-grid" @click="clickHandel(griditem)">
            <image class="wxui-grid__icon" :src="griditem.img" />
            <div class="wxui-grid__label">{{griditem.name}}</div>
        </div>
</template>

<script>
export default {
  props: {
    griditem: {
        type: Object,
        default: function (){
           return  {
                name: 11111,
                img: '/static/images/icon_nav_button.png'
            }
        }
    }
  },
  data () {
      return {

      }
  },
  methods: {
      clickHandel (item) {
          this.$emit("clickgrid", item);
      }
  }
};
</script>

<style lang="scss" scoped>
$borderColor: #d9d9d9;
.wxui-grid {
  position: relative;
  float: left;
  padding: 40rpx 20rpx;
  width: 33.333333333%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-right: 1rpx solid $borderColor;
  border-bottom: 1px solid $borderColor;
}
.wxui-grid__icon {
  display: block;
  width: 56rpx;
  height: 56rpx;
  margin: 0 auto;
}
.wxui-grid__label {
  margin-top: 10rpx;
  display: block;
  text-align: center;
  color: #000;
  font-size: 28rpx;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>


