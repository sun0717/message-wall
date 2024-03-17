<template>
    <div class="yk-photo-card">
        <img class="photo-img" :src="'../../../public/'+ photo.imgurl + '.jpg'" alt="">
        <div class="photo-bg"></div>
        <div class="photo-like">
            <span class="iconfont icon-aixin"></span>
            <span class="like-data">{{ photo.like }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    photo: {
        default: {

        }
    }
})
</script>

<style lang="less" scoped>
.yk-photo-card {
    position: relative;

    .photo-img {
        width: 100%;
    }
    .photo-bg {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .2);
        width: 100%;
        height: 100%;
        // z-index: 10;
        opacity: 0;
        transition: @tr;
        cursor: pointer;
    }
    .photo-like {
        position: absolute;
        left: @padding-8;
        top: @padding-8;
        background: rgba(255, 255, 255, .8);
        border-radius: 20px;
        height: 28px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        backdrop-filter: blur(10px);

        .icon-aixin1 {
            color: @gray-3;
            padding-right: @padding-4;
        }
        .like-data {
            color: @gray-1;
        }
    }
    &:hover {
        .photo-bg {
            opacity: 1;
        }
        .photo-like {
            opacity: 1;
        }
    }
}
</style>