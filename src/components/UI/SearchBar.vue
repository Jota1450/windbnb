<script setup>
import useLocationStore from '../../store/locationStore.js'
const { location, getGuests } = useLocationStore()

const totalGuests = () => {
    const total = getGuests.value()
    if (total === 0) return 'Add guests'
    return total > 1 ? `${total} Guests` : 'Just me'
}
</script>

<template>
    <div class="flex rounded-[16px] shadow-custom max-w-[300px] font-mulish text-sm cursor-pointer">
        <input class="max-w-[150px] px-3 py-3" :placeholder="location === '' ? 'Anywhere, Finland' : location" type="text"
            readonly>
        <div class="border-solid border border-zinc-100"></div>
        <input class="max-w-[100px] px-3 py-3" :placeholder="totalGuests()" type="text" readonly>
        <div class="border-solid border border-zinc-100"></div>
        <span class="px-3 py-3">
            <img class="h-[17px] w-[17px]" src="../../assets/search.svg" alt="Search Icon">
        </span>
    </div>
</template>

<style scoped>
input {
    @apply bg-inherit cursor-pointer outline-none text-center
}
</style>