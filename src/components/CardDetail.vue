<template>
    <div class="card-detail">
        <div class="top-bt">
            <p class="revoke">联系墙主撕掉该标签</p>
            <p class="report">举报</p>
        </div>
        <note-card :note="card" style="margin: 12px 0;"></note-card>
        <div class="form">
            <a-textarea placeholder="请输入..." allow-clear :max-length="50" show-word-limit class="tx" />
            <a-input :style="{width:'328px'}" placeholder="签名..." allow-clear class="ip"/>
        </div>
        <p class="title">---评论({{ card.comment }})---</p>
        <div class="comment-list" v-for="(item, index) in comment.data" :key="index">
            <Comment :item="item" :style="{width: '328px'}"/>
        </div>
    </div>
</template>

<script setup>
import NoteCard from './NoteCard.vue'
import dayjs from 'dayjs'
import { comment } from '../../mock/index'
import { portrait } from '@/utils/data'

import Comment from './Comment.vue'
defineProps(['card'])
</script>

<style lang="less" scoped>
.card-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    .top-bt {
        display: flex;
        justify-content: space-between;
        .revoke {
            color: @primary-color;
            cursor: pointer;
            padding-right: 30px;
            font-size: @size-16;
        }
        .report {
            font-size: @size-16;
            color: @warning-color;
            cursor: pointer;
        }
    }
    .form {
        display: flex;
        flex-direction: column;
        .tx {
            // background: none;
            width: 328px;
            border: none;
            resize: none;
            margin-bottom: 12px;
        }
        .ip {
            width: 288px;
            // background: none;
            border: 1px solid #fff;
            border-radius: 10px;
            padding: 0 12px;
            bottom: 40px;
            right: 0;
        }  
    }
    .title {
        font-weight: 600;
    }
}
</style>