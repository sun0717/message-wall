<template>
    <Transition name="view">
        <div class="xy-viewer">
            <div class="bg"></div>
            <div class="viewer-photo">
                <!-- {{ photos }} -->
                <img class="photo-img" :src="`../../public/${photos[nowNumber]}.jpg`" alt="">
            </div>
            <icon-left-circle class="switch switch-l" @click="changeNowNumber(-1)" v-show="nowNumber > 0"/>
            <icon-right-circle class="switch switch-r" @click="changeNowNumber(1)" v-show="nowNumber < photos.length - 1"/>
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps({
    photos: {
        default: [],
    },
    nowNumber: {
        default: 0,
    },
})

let $emits = defineEmits('changeNumber')

const changeNowNumber = (value) => {
    $emits('changeNumber', value)
}
</script>

<style lang="less" scoped>

.view {
    &-enter {
        &-from {
            opacity: 0;
        }

        &-active {
            transition: all .2s ease-out;
        }

        &-to {
            opacity: 1;
        }
    }

    // 出场
    &-leave {
        &-from {
            opacity: 1;
        }

        &-active {
            transition: all .2s ease-in;
        }

        &-to {
            opacity: 0;
        }
    }
}

.xy-viewer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, .9);
        backdrop-filter: blur(20px);
        height: 100%;
        width: 100%;
    }
    .viewer-photo {
        display: flex;
        position: absolute;
        justify-content: center;
        width: calc(100% - 360px);
        height: 100%;
        padding: 20px 400px 0px 0px;
        overflow-y: auto;
        img {
            max-width: 100%;
        }
    }
    .switch {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: @gray-3;
        color: @gray-10;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        opacity: 0.5;
        transition: @tr;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }
    .switch-l {
        left: 20px;
    }

    .switch-r {
        right: 420px;
    }
}
</style>