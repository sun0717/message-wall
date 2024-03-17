<template>
    <div class="new-card">
        <div class="colors">
            <p class="color-li" v-for="(item, index) in cardColor2" :key="index" :style="{background: item}" :class="{colorSelected: index === selected}" @click="handleChangeColor(index)"></p>
        </div>
        <div class="card-main" :style="{background: cardColor2[selected]}">
            <a-textarea placeholder="留言..." :max-length="100" allow-clear show-word-limit class="tx" auto-size="true"/>
            <a-input :style="{width:'320px'}" placeholder="签名..." allow-clear class="ip"/>
        </div>
        <div class="labels">
            <a-select :style="{width:'320px'}" placeholder="选择标签">
                <a-option v-for="(item, index) in label[0]" :key="index">{{ item }}</a-option>
            </a-select>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { cardColor2, label } from '@/utils/data'
const selected = ref(0)
const handleChangeColor = (index) => {
    selected.value = index
}
</script>

<style lang="less" scoped>
@font-face {
    font-family: fo;
    src: url("@/assets/fonts/regular.ttf");
}
.new-card {
    padding: @padding-20;
    .colors {
        display: flex;
        margin-bottom: 12px;
        .color-li {
            width: 24px;
            height: 24px;
            margin-right: @padding-8;
        }
        .colorSelected {
            border: 2px solid rgba(59, 115, 240, 1);
        }
    }
    .card-main {
        height: 240px;
        padding: 12px;
        font-family: fo;
        .tx {
            background: none;
            border: none;
            resize: none;
            height: 172px;
        }
        .ip {
            background: none;
            border: 1px solid #fff;
            border-radius: 10px;
            padding: 0 12px;
            bottom: 40px;
            right: 0;
        }  
    }
    .labels {
        margin-top: @padding-12;
    }
}
</style>