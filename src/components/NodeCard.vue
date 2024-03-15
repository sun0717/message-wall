<template>
    <div class="node-card" :style="{width:width,background:'rgba(252, 175, 162, .3)'}">
        <div class="top">
            <p class="time">2024.3</p>
            <p class="label">具有</p>
        </div>
        <p class="message">
            只是因为在人群中多看了你一眼
        </p>
        <div class="foot">
            <div class="foot-left">
                <div class="x">
                    <span class="iconfont icon-aixin"></span>
                    <span class="value">3</span>
                </div>
                <div class="x">
                    <span class="iconfont icon-xiaoxi-zhihui"></span>
                    <span class="value">3</span>
                </div>
            </div>
            <div class="name">星雨</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    width: {
        default: '288px',
    },
})
</script>

<style lang="less" scoped>
@font-face {
    font-family: fo;
    src: url("@/assets/fonts/regular.ttf");
}

.node-card {
    height: 240px;
    padding: 10px 20px;
    padding-bottom: 16px;
    // font-size: 16px;
    position: relative;
    .top {
        display: flex;
        justify-content: space-between;
        p {
            font-size: 14px;
            color: @gray-3;
        }
    }
    .message {
        height: 140px;
        font-family: fo;
        color: @gray-1; 
        padding: 10px 0;     
    }
    .foot {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 16px;
        left: 0;
        padding: 0 @padding-20;
        width: calc(100% - 40px);

        .foot-left {
            display: flex;
            .x {
                margin-right: @padding-4;
            }
            .value {
                font-size: @size-12;
                color: @gray-3;
                line-height: 16px;
                padding-left: @padding-4;
            }

            .iconfont {
                font-size: 16px;
                color: @gray-3;
            }

            .icon {
                padding-right: @padding-8;
                display: flex;
                align-items: center;
            }

            .icon-aixin {
                cursor: pointer;
                transition: @tr;
                &:hover {
                    color: @like-color;
                }
            }
        }
        .name {
            font-family: fo;
            font-size: 17px;
            color: @gray-1;
            font-weight: 500;
        }

    }
}
</style>