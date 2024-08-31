<template>
    <div class="sticky top-0 zindex" :class="{ 'bg-white shadow': !isTopPosition }">
        <div class="container mx-auto">
            <div class="h-16 flex items-center justify-between text-dark">
                <PowerIcon class="size-6 text-dark font-bold" aria-hidden="true" /> <span class="text-2xl font-semibold ml-2">Logo</span>
                <div class="flex justify-end items-center grow">
                    <div class="flex gap-4 text-xl">
                        <p class="hover:bg-gray/25 transition-all cursor-pointer px-4 py-2 rounded" v-for="item of [1,2,3]" :key="item">
                            Navigation {{ item }}
                        </p>
                    </div>
                    <div class="h-7 w-px bg-gray mx-6"></div>
                    <div class="flex gap-5 items-center text-xl">
                        <DropdownComponent :expenses="expenses"/>
                        <button class="px-4 py-2 rounded bg-darkblue hover:bg-darkblue/80 transition-all text-white flex justify-center items-center">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { BellIcon, PowerIcon } from '@heroicons/vue/24/solid'
import {MagnifyingGlassIcon} from "@heroicons/vue/24/solid/index.js";
import Popover from "@/components/Popover.vue";
import DropdownComponent from "@/components/DropdownComponent.vue";
import {computed, onMounted, onUnmounted, ref, watch} from "vue";

const expenses = [
    { id: 1, name: 'menu 1'},
    { id: 2, name: 'menu 2'},
    { id: 3, name: 'menu 3'},
    { id: 4, name: 'menu 4'},
    { id: 5, name: 'menu 5'},
    { id: 6, name: 'menu 6'},
]

const isTopPosition = ref(true)

const setValueToIsTopPosition = () => {
    isTopPosition.value = window.scrollY === 0;
}
onMounted(() => {
    window.addEventListener("scroll", setValueToIsTopPosition)
})

onUnmounted(() => {
    window.removeEventListener("scroll", setValueToIsTopPosition)
})
</script>
<style>
.zindex {
    z-index: 3000000;
}
</style>