<script setup>
import StayCard from '../UI/StayCard.vue';
import stays from '../../assets/stays.json'
import useLocationStore from '../../store/locationStore';
const { location } = useLocationStore()

function getFilteredStays() {
    return stays.filter(
        (stay) => `${stay.city}, ${stay.country}`.toLowerCase().includes(location.value.toLowerCase())
    )
}
</script>

<template>
    <main class="my-6 font-montserrat">
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold">Stays in Finland</h2>
            <span>{{ getFilteredStays().length > 12 ? '12+' : getFilteredStays().length }} stays</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <StayCard v-for="stay in getFilteredStays()" v-bind="stay"></StayCard>
        </div>
    </main>
</template>