<template>
    <div class="wall-message">
        <p class="title">{{ wallType[id].name }}</p>
        <p class="slogan">{{ wallType[id].slogan }}</p>
        <div class="label">
            <p class="label-list" :class="{selected: labelCurIndex === -1}" @click="handleChange(-1)">全部</p>
            <p class="label-list" :class="{selected: labelCurIndex === index}" v-for="(item, index) in label[id]" :key="index" @click="handleChange(index)">{{ item }}</p>
        </div>
        <node-card></node-card>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import { wallType, label } from '@/utils/data';
import NodeCard from '@/components/NodeCard.vue';
// import Typed from 'typed.js';

const id = ref(0)
const labelCurIndex = ref(-1) // -1 为全选
// const element = ref(null)
const strTyped = ref(wallType)
const handleChange = (value) => {
    labelCurIndex.value = value;
}


onMounted(() => {
})
</script>

<style lang="less" scoped>
.wall-message {
    min-height: 700px;
    padding-top: 52px;

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
            border-radius: 14px;
        }
    }
}
</style>