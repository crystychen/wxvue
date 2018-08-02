<template>
    <div class="good_item">
        <img mode="widthFix" :src="gooditem.img" alt="" @tap.stop="toNavigator(gooditem.id)" @load="loadImg" >
        <div>
            <div class="label">
                <text>{{gooditem.title}}</text>
            </div>
            <div class="row">
                <p class="star">采集{{gooditem.starnum}}</p>
                <p class="love">喜欢{{gooditem.lovenum}}</p>
                <p class="comment">评论{{gooditem.comment}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        gooditem: {
            type: Object,
            default: function () {
                return {
                    id: 1,
                    img: '/static/images/img/红尘陌上1.jpg',
                    title: '为了这次相聚, 我连见面时的呼吸都曾反复练习',
                    starnum: '0',
                    lovenum: '0',
                    comment: '0'
                }
            }
        }
    },
    methods: {
        toNavigator (id) {
            console.log("点击图片跳转"+ id);
            this.$emit("TapImg", id);
        },
        loadImg (e) {
            console.log("----------",e)
            var obj = {
                width: e.mp.width,
                height: e.mp.height
            }
            this.$emit("loadImg", obj)
        }
    }
}
</script>
 <style lang="scss" scoped>
    .row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        font-size: 28rpx;
    }
    image {
        width: 100%;
    }
    .good_item {
        width: 48%;
        // height: 300rpx;
        // box-sizing: border-box;
        // float: left;
        // padding: 10rpx;
        // border: 1px solid red;
        margin: 1%;
        display: inline-block;
        vertical-align: top;
    }
    .label {
        font-size: 26rpx;
    }
    // .good_item:nth-child(odd) {
    //   border-right: none;
    // }
 </style>
 