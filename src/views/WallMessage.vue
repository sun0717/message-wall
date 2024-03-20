<template>
    <div class="wall-message">
        <p class="title">{{ wallType[id].name }}</p>
        <p class="slogan">{{ wallType[id].slogan }}</p>
        <div class="label">
            <p class="label-list" :class="{selected: labelCurIndex === -1}" @click="handleChange(-1)">全部</p>
            <p class="label-list" :class="{selected: labelCurIndex === index}" v-for="(item, index) in label[id]" :key="index" @click="handleChange(index)">{{ item }}</p>
        </div>
        <div class="card" :style="{width: cardWidth + 'px'}" v-show="id == 0">
            <note-card v-for="(item, index) in note.data" :key="index" :note="item" class="card-inner" :width="'288px'" :class="{ cardselected: index === cardselected }" @click="selectedCard(index)"></note-card>
        </div>
        <div class="photo" v-show="id == 1">
            <photo-card :photo="item" class="photo-card" v-for="(item, index) in photoT" :key="index" @click="selectedPhoto(index)"></photo-card>
            <xy-viewer v-show="modalVisible" :photos="photoArr" :nowNumber="photoselected" @changeNumber="handleChangeNumber"></xy-viewer>
            <xy-modal v-show="modalVisible" @cloose="changeModal" :isModal="modalVisible"/>
        </div>
        <div class="add">
            <icon-plus-circle-fill style="font-size: 64px;" @click="handleClick"/>
        </div>
        <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel" :ok-text="setTextInModal()">
            <template #title>
                {{ cardselected === -1 ? '写留言' : '浏览留言' }}
            </template>
            <new-card v-if="cardselected === -1"/>
            <card-detail v-else :card="note.data[cardselected]" />
        </a-modal>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router'
import { wallType, label } from '@/utils/data';
import NoteCard from '@/components/NoteCard.vue';
import NewCard from '@/components/NewCard.vue';
import CardDetail from '@/components/CardDetail.vue';
import PhotoCard from '../components/PhotoCard.vue';
import { note, photo } from '../../mock/index'
import XyViewer from '@/components/XyViewer.vue';
import XyModal from '@/components/XyModal.vue';
// import Typed from 'typed.js';

let $emits = defineEmits(['tabbarHide'])
const route = useRoute()
const id = computed(() => route.query.id)
const labelCurIndex = ref(-1) // -1 为全选
const cardWidth = ref(0)
const cardselected = ref(-1) // 当前选择卡片
const photoselected = ref(-1) // 当前选择照片
const visible = ref(false)
const modalVisible = ref(false) 
const photoT = ref(photo.data)
const photoArr = ref([])
const view = ref(false) // 预览大图
// const element = ref(null)
// const strTyped = ref(wallType)
const handleChange = (value) => {
    labelCurIndex.value = value
}
// 选择卡片
const selectedCard = (value) => {
    if (value !== cardselected.value) {
        cardselected.value = value
        visible.value = true
    } else {
        cardselected.value = -1
        visible.value = false
    }
}

// 选择照片
const selectedPhoto = (value) => {
    if (value !== photoselected.value) {
        photoselected.value = value
    } else {
        photoselected.value = -1
    }
    modalVisible.value = !modalVisible.value
}
const handleChangeNumber = (e) => {
    if (e === -1) {
        photoselected.value -= 1
    } else {
        photoselected.value += 1
    }
    
}

const handleClick = async () => {
    cardselected.value = -1;
    visible.value = true;
}

const handleOk = () => {
    visible.value = false;
};
const handleCancel = () => {
    visible.value = false;
}
const noteWidth = () => {
    // 页面宽度
    let width = document.body.clientWidth;
    // 120 两边间距,300是 pc端 padding + 288px
    // 除300可以算出一页能放多少
    cardWidth.value = Math.floor((width - 120) / 300) * 300;
}
const setTextInModal = () => {
    if (cardselected.value !== -1) return '评论'
}

// 关闭窗口
const changeModal = ()  => {
    modalVisible.value = !modalVisible.value
}

const getPhoto = () => {
    for (let i = 0; i < photoT.value.length; i++) {
        photoArr.value.push(photoT.value[i].imgurl)
    }
}

watch(visible, (newValue) => {
    $emits('tabbarHide', newValue)
})

onMounted(() => {
    noteWidth()
    getPhoto()
    // 监听屏幕宽度变化
    window.addEventListener('resize', noteWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', noteWidth)
})
</script>

<style lang="less" scoped>
.wall-message {
    min-height: 700px;
    padding-top: 52px;
    position: relative;
    .title {
        padding-top: 46px;
        padding-bottom: @padding-8;
        font-size: 56px;
        color: @gray-1;

        text-align: center;
        font-weight: 600;
    }
    .slogan {
        color: @gray-2;
        margin-top: 40px;
        text-align: center;
    }
    .label {
        display: flex;
        justify-content: center;

        margin-top: 40px;
        .label-list {
            padding: 0 14px;
            line-height: 28px;
            margin: 4px;
            color: @gray-2;
            cursor: pointer;
        }
        .selected {
            color: @gray-1;
            font-weight: 600;
            border: 2px solid rgba(32,32,32,1);
            border-radius: 16px;
        }
    }

    .card {
        display: flex;
        flex-wrap: wrap;
        // justify-content: center;
        padding-top: 28px;
        margin: auto;
        .card-inner {
            margin: 6px;
        }
        .cardselected {
            border: 1px solid @primary-color;
        }
    }

    .photo {
        width: 88%;
        margin: 0 auto;
        columns: 6;
        column-gap: @padding-4;
    }

    .photo-card {
        margin-bottom: @padding-4;
        break-inside: avoid;
    }

    .add {
        position: sticky;
        bottom: 50px;
        margin-left: calc(80vw - 32px);
    }
}
</style>