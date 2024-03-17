<template>
    <div class="comment">
        <div class="user">
            <div class="user-head" :style="{background: portrait[item.imgurl]}"></div>
            <div class="user-name">{{ item.name }}</div>
        </div>
        <div class="timestamp">{{ dayjs(item.moment).format('YYYY-MM-DD') }}</div>
        <div class="content">
            {{ item.message }}
        </div>
    </div>
</template>

<script setup>
import dayjs from 'dayjs';
import { portrait } from '../utils/data';
const props = defineProps(['item'])
console.log(props.item)
</script>

<style lang="less" scoped>
/* 基本样式 */
.comment {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
}

.user-head {
    width: 28px;
    height: 28px;
    border: 14px;
    border-radius: 14px;
}

.user-name {
    margin-left: @padding-8;
}
.comment .user {
    display: flex;
    align-items: center;
    font-weight: bold;
}

.comment .timestamp {
    font-size: 0.8em;
    color: #999;
}

.comment .content {
    margin-top: 5px;
    line-height: 1.8;
}

/* 示例样式 */
.comment .user {
    color: #555;
}

.comment .timestamp {
    font-style: italic;
}

.comment .content {
    color: #333;
}
</style>