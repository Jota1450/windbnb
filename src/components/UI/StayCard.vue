<script setup>
defineProps({
    "city": String,
    "country": String,
    "superHost": Boolean,
    "title": String,
    "rating": Number,
    "maxGuests": Number,
    "type": String,
    "beds": Number,
    "photo": String
})
</script>

<template>
    <div class="my-6">
        <picture>
            <img class="w-full max-h-[240px] rounded-lg object-cover" :src="photo" alt="">
        </picture>
        <div class="my-4 flex justify-between items-center">
            <div class="flex justify-between items-center gap-2">
                <template v-if="superHost">
                    <div
                        class="rounded-xl border-solid border-2 border-neutral-600 text-neutral-600 py-1 px-2 text-[10px] font-bold">
                        SUPER HOST
                    </div>
                </template>
                <div class="text-zinc-500 text-[14px]">
                    {{ type }}
                </div>
            </div>

            <span class="flex justify-center items-center text-sm">
                <img src="../../assets/star.svg" alt="">
                {{ rating }}
            </span>
        </div>
        <p class="font-semibold text-zinc-800 whitespace-nowrap overflow-hidden text-ellipsis">
            {{ title }}
        </p>
    </div>
</template>