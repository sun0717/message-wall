<template>
    <div class="footer-bar">
        <div class="center">
            <div class="footer-left">
                <div class="logo">
                    <img src="/public/favicon.ico" alt="icon">
                    <h1 style="color: #fff;">小雨星影</h1>
                </div>
            </div>
            <div class="footer-center">
                
            </div>
            <div class="footer-right">
                <h2 style="color: #fff;">关注我</h2>
                <a-space >
                    <icon-github :style="{fontSize:'32px'}" ></icon-github>
                    <a-popover position="bottom" title="wx" >
                        <icon-wechat :style="{fontSize:'32px'}" style="color:"></icon-wechat>
                        <template #content>
                            <img :src="qr" alt="qrcode" style="width:80px"/>
                        </template>
                    </a-popover>
                </a-space>
                <!-- <icon-wechat /> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import qr from '@/assets/images/qr_weixin.png'

</script>

<style lang="less" scoped>
.footer-bar {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    justify-content: center;
    width: 100%;
    height: 120px;
    background: @primary-color;

    .center {
        min-width: 700px;
        width: 70%;
        height: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .footer-left {
            text-align: center;
            .logo {
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>