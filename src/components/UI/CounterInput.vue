<script setup>
import { ref, watch, defineEmits } from 'vue';
defineProps({
    "title": String,
    "label": String
})

let count = ref(0);
const emit = defineEmits(['count', 'update:modelValue'])

watch(count, (count) => {
    emit('count', count)
    emit('update:modelValue', count)
})

function add() {
    count.value++;
}
function res() {
    if (count.value <= 0) return;
    count.value--;
}
</script>

<template>
    <div class="flex flex-col gap-y-2 text-sm">
        <div>
            <div class="text-zinc-800 font-bold p-0 m-0">{{ title }}<br /></div>
            <div class="text-stone-300 font-normal p-0 m-0">{{ label }}</div>
        </div>
        <div class="flex items-center gap-x-3 font-bold [&>*:nth-child(n)]:min-w-[18px] [&>*:nth-child(n)]:text-center">
            <button type="button" class="box" @click="res">-</button>
            <span>{{ count }}</span>
            <button type="button" class="box" @click="add">+</button>
        </div>
    </div>
</template>

<style scoped>
.box {
    @apply w-[23px] h-[23px] rounded border border-zinc-500 flex justify-center items-center cursor-pointer relative active:top-[2px]
}
</style>