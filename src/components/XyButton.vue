<template>
    <button :class="[size, activeX]" class="xy-button">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps(['size', 'activeX'])
</script>

<style lang="less" scoped>
.xy-button {
  text-align: center; 
  border: none;
}
// size
.medium {
    width: 82px;
    height: 36px;
    border-radius: 24px;
    padding: 0 20px;
}

.large {
    min-width: 100px;
    height: 48px;
    // border: 1px solid rgba(32, 32, 32, 1);
    border-radius: 24px;
    padding: 0 20px;
}

.primary {
    background: @gray-1;
    color: @gray-10;
}

.secondary {
    background: @gray-10;
    color: @gray-1;
    border: 1px solid @gray-1;
}

.cprimary {
    background: @primary-color;
    color: @gray-10;
    font-weight: 600;
}

.csecondary {
    background: @gray-10;
    color: @gray-1;
}
</style>