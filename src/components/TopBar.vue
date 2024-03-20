<template>
    <div class="top-bar">
        <div class="logo">
            <img src="/public/favicon.ico" alt="">
            <p class="logo-name">小雨星影</p>
        </div>
        <div class="menu">
            <xy-button size="large" :activeX="id === '0' ? 'cprimary' : 'csecondary'" class="btnMessage" @click="handleClick(0)">留言墙</xy-button>
            <xy-button size="large" :activeX="id === '1' ? 'cprimary' : 'csecondary'" @click="handleClick(1)">照片墙</xy-button>
        </div>
        <div class="user">
            <div class="user-head"></div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import XyButton from './XyButton.vue'

const router = useRouter()
const route = useRoute()
const id = computed(() => route.query.id)
const handleClick = (id) => {
    const query = { ...route.query };
    query.id = id;
    router.replace({ query });
}
</script>

<style lang="less" scoped>
.top-bar {
    width: 100%;
    height: 52px;
    background-color: rgba(255,255,255,.8);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,.1);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    
    .logo {
       display: flex; 
       align-items: center;
       .logo-name {
            font-size: 20px;
            color: @gray-1;
            text-align: justify;
            font-weight: 600;
            padding-left: 10px;
       }
    }

    .menu {
        .btnMessage {
            margin-right: 24px;
        }
    }

    .user {
        .user-head {
            border-radius: 50%;
            height: 36px;
            width: 36px;
            background-image: linear-gradient(180deg, #7BE7FF 2%, #1E85E2);
            margin-right: 36px;
        }
    }
}
</style>