<template>
    <div class="list-item">
        <div class="item-head">
            <p class="order-code" >
               订单号: {{info.orderCode}}
            </p>
            <p class="order-status">
                {{info.status}}
            </p>
        </div>
        <div class="item-body">
            <div class="item-img">
                <img :src="info.img"/>
            </div>
            <div class="item-info">
                <div class="info-row">
                    <p>{{info.name}}</p>
                    <p class="price">￥{{info.price}}</p>
                </div>
                <div class="info-row">
                    <p>{{info.size}}</p>
                    <p class="item-num">X{{info.num}}</p>
                </div>
            </div>
        </div>
        <div class="item-footer">
            <div><p>共{{info.totalnum}}件</p><p>合计</p><p class="price">￥{{info.totalprice}}</p></div>
            <div class="btn-container">
                <button @click="cancelHandle" v-if="info.status == 1">取消订单</button>
                <button @click="cancelHandle" v-if="info.status == 4">订单跟踪</button>
                <button class="act-btn" v-if="info.status == 1" @click="payHandle">支付</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'list-item',
    props: {
        info: {
            type: Object,
            default: {
                "totalnum":1,
                "size":1,
                "price":1,
                "totalprice":1,
                "status":1,
                "name":"自然堂",
                "num":1,
                "img":'',
                "orderCode": 123456789
            }
        },
        text: {
            type: String,
            default: "aaaaaa"
        }
    }
}
</script>

<style lang="scss" scoped>
$lGrayColor: #8b8686;
$lineColor: #eeeeee;
$actColor: #33b393;
$smfontSize: 24rpx;
$lgfontSize: 36rpx;
$mdfontSize: 32rpx;
    .price {
        font-size: $mdfontSize;
    }
    .btn-container {
        margin-top: 20rpx;
        text-align: right;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
        button {
            width:200rpx;
            padding: 12rpx 6rpx;
            border: 1rpx solid black;
            margin-left: 20rpx;
            line-height: 32rpx;
            font-size: 32rpx;
            border-radius: 30rpx;
        }
        .act-btn {
            color: $actColor;
            border:1rpx solid $actColor;
        }

    }
    .list-item {
        display: flex;
        flex-direction: column;
        .item-head {
            padding: 20rpx 10rpx;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background: #fff;
            border-bottom: 1rpx solid $lineColor;
            .order-code {
                color: $lGrayColor;
                font-size: $smfontSize;
            }
            .order-status {
                color: $actColor;
                font-size: $smfontSize;
            }
        }
        .item-body {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            padding: 20rpx 10rpx;
            border-bottom: 1rpx solid $lineColor;
            .item-img {
             width: 200rpx;
             height: 200rpx;
             border: 1px solid red;   
            }
            .item-info {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 20rpx 10rpx;
                width: 100%;
                .info-row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                    p {
                        width: auto;
                        height: 60rpx;
                        line-height: 60rpx;
                        font-size: 32rpx;
                    }
                }
            }
        }
        .item-footer {
            text-align: right;
            padding: 10rpx 20rpx; 
            & div:first-child{                
                display: inline-block;
                p {
                    font-size: $smfontSize;
                    display: inline-block;
                    color:#8b8686;
                }
                p:first-child {
                    letter-spacing: 4rpx;
                }
                .price {
                    font-size: $mdfontSize;
                    color: black;
                }
            }
        }
    }
</style>
