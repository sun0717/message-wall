<template>
    <div>
        <Transition name="bounce">
            <top-bar v-show="!isTabBarHide"></top-bar>
        </Transition>
        <video src="@/assets/images/qm1.mp4" autoplay="autoplay" muted="muted" loop="loop" class="bg-video"></video>
        <wall-message @tabbarHide="handleListener"></wall-message>
        <!-- <router-view></router-view> -->
        <footer-bar></footer-bar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import topBar from "@/components/TopBar.vue"
import footerBar from "@/components/FooterBar.vue"
import WallMessage from "./WallMessage.vue"

const isTabBarHide = ref(false)
const handleListener = (value) => {
    isTabBarHide.value = value
}
</script>

<style scoped lang="less">
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
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