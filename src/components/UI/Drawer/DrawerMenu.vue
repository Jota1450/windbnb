<script setup>
import { ref } from 'vue';
import { toggleDrawer } from './drawer.js'
import cities from '../../../globals/cities';
import CounterInput from '../CounterInput.vue';
import useLocationStore from '../../../store/locationStore.js'

const { setState } = useLocationStore()
let form = ref({
    location: "",
    adults: 0,
    children: 0
})

let focus = ref(true)

function getFilteredCities() {
    return cities.filter(
        (city) => city.toLowerCase().includes(form.value.location.toLowerCase())
    )
}

function handleSubmit() {
    setState.value(form.value)
    toggleDrawer()
}
</script>

<template>
    <div id="curtain" class="fixed w-screen h-screen z-[5] top-0 left-0 bg-neutral-600 bg-opacity-40 hidden"
        @click="toggleDrawer"></div>
    <div id="main-drawer"
        class="fixed bg-white w-full h-3/4 md:h-1/2 z-10 top-[-100vh] left-0 px-5 mx-0 my-auto custom-transition">
        <div id="drawer-content" class="max-w-[1200px] mx-auto py-5 h-full font-mulish flex gap-x-2 flex-col md:flex-row">
            <div class="flex flex-col gap-y-2 flex-grow">
                <div class="md:hidden">
                    Edit your search
                </div>
                <div class="flex gap-2 flex-col md:flex-row">
                    <div class="select">
                        <label for="location" class="block text-[9px] uppercase font-bold">
                            LOCATION
                        </label>
                        <input id="location" v-model="form.location" @focus="focus = true" type="text"
                            placeholder="Helsinki, Finland" class="block outline-none w-full text-[14px]">
                    </div>
                    <div class="select">
                        <label for="guests" class="block text-[9px] uppercase font-bold">
                            GUESTS
                        </label>
                        <input id="guests" :value="form.adults + form.children" @focus="focus = false" type="text"
                            placeholder="Add guests" class="block outline-none w-full text-[14px]" readonly>
                    </div>
                </div>
                <div class="flex gap-x-2">
                    <div class="md:w-full ml-2 md:ml-4">
                        <ul v-show="focus">
                            <li v-for="city in getFilteredCities()"
                                class="flex gap-3 my-7 cursor-pointer relative hover:bottom-[2px] active:top-0"
                                @click="form.location = city">
                                <img src="../../../assets/location.svg" alt=""> {{ city }}
                            </li>
                        </ul>
                    </div>
                    <div class="md:w-full ml-2 md:ml-4">
                        <div  v-show="!focus">
                            <div class="my-7">
                                <CounterInput v-model="form.adults" title="Adults" label="Ages 13 or above" />
                            </div>
                            <div class="my-7">
                                <CounterInput v-model="form.children" title="Children" label="Ages 2-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center md:block">
                <button @click="handleSubmit" type="button"
                    class="bg-[#EB5757] rounded-xl py-3 px-4 text-white flex items-center gap-2 text-[12px] relative active:top-[2px]">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z"
                                fill="#F2F2F2" />
                        </svg>
                    </span>
                    Search
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.select {
    @apply rounded-xl border border-solid border-zinc-800 pt-2 pb-1 px-4 w-full shadow-custom
}

.custom-transition {
    @apply transition-all ease-in duration-300
}
</style>