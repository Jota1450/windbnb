<script setup>
import DrawerMenu from '../UI/Drawer/DrawerMenu.vue';
import SearchBar from '../UI/SearchBar.vue';
import { toggleDrawer } from '../UI/Drawer/drawer.js';
</script>

<template>
    <DrawerMenu></DrawerMenu>
    <header class="my-6 flex justify-between items-center flex-col md:flex-row gap-y-5 md:gap-y-0">
        <div class="self-start">
            <picture>
                <img src="/logo.svg" alt="">
            </picture>
        </div>
        <SearchBar @click="toggleDrawer"></SearchBar>
    </header>
</template>