<template>
    <div>
        <top-bar></top-bar>
        <video src="@/assets/images/qm1.mp4" autoplay="autoplay" muted="muted" loop="loop" class="bg-video"></video>
        <wall-message></wall-message>
        <router-view></router-view>
        <footer-bar></footer-bar>
    </div>
</template>

<script setup>
import topBar from "@/components/TopBar.vue"
import footerBar from "@/components/FooterBar.vue";
import WallMessage from "./WallMessage.vue";
</script>

<style scoped lang="less">


.bg-video {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>