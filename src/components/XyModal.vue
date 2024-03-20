<template>
    <Transition name="modal">
        <div class="xy-modal" v-if="isModal">
            <div class="xy-modal-top">
                <p class="modal-name">{{ title }}</p>
                <icon-close class="icon-close" @click="clooseModal"/>
                <!-- <Comment :item="comment.data[0]"/> -->
            </div>
        </div>
    </Transition>
</template>

<script setup>
import Comment from "@/components/Comment.vue"
import { comment } from '../../mock/index'
const props = defineProps({
    // 真 - 显示，假 - 关闭
    isModal: {
        default: false,
    },
    title: {
        default: 'Look'
    }
})

const $emits = defineEmits(['cloose'])

const clooseModal = () => {
    $emits('cloose')
}

</script>

<style lang="less" scoped>
.modal {
    // 入场
    &-enter {
        &-from {
            transform: translateX(360px);
        }

        &-active {
            transition: all .2s ease-out;
        }

        &-to {
            transform: translateX(0px);
        }
    }
    // 出场
    &-leave {
        &-from {
            transform: translateX(0px);
        }

        &-active {
            transition: all .2s ease-in;
        }

        &-to {
            transform: translateX(360px);
        }
    }
}
// .slide-fade-enter-active {
//   transition: all 0.3s ease-out;
// }

// .slide-fade-leave-active {
//   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }

// .slide-fade-enter-from,
// .slide-fade-leave-to {
//   transform: translateX(20px);
//   opacity: 0;
// }
.xy-modal {
    width: 360px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 52px;
    z-index: 1000;
    background: rgba(255,255,255,.8);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(10px);
    padding: @padding-20;
    .xy-modal-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .modal-name {
            font-size: 16px;
            color: gray-1;
            font-weight: 600;
        }

        .icon-close {
            color: @gray-2;
            cursor: pointer;
            padding-left: @padding-8;
        }
    }
}
</style>