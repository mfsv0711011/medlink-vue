<template>
    <div class="sticky top-0 zindex" :class="{ 'bg-white shadow': !isTopPosition }">
        <div class="container mx-auto">
            <div class="h-16 flex items-center justify-between text-dark">
                <div class="flex items-center">
                    <PowerIcon class="size-7 text-dark font-bold" aria-hidden="true" />
                    <span class="text-2xl font-semibold ml-2">Logo</span>
                </div>

                <div class="hidden lg:flex justify-end items-center grow">
                    <div class="flex gap-4 text-xl">
                        <p class="hover:bg-gray/25 transition-all cursor-pointer px-4 py-2 rounded" v-for="item of [1,2,3]" :key="item">
                            Navigation {{ item }}
                        </p>
                    </div>
                    <div class="h-7 w-px bg-gray mx-6"></div>
                    <div class="flex gap-5 items-center text-xl">
                        <DropdownComponent />
                        <button class="text-nowrap  text-sm sm:text-xl px-4 py-1.5 rounded bg-darkblue hover:bg-darkblue/80 transition-all text-white flex justify-center items-center">
                            Sign up
                        </button>
                    </div>
                </div>
                <button @click="openSidebar" class="lg:hidden ">
                    <Bars3BottomRightIcon class="size-7 z-50 text-dark font-bold" aria-hidden="true" />
                </button>
                <HamburgerMenu ref="menu" class="lg:hidden"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Bars3BottomRightIcon, PowerIcon } from '@heroicons/vue/24/solid'
import DropdownComponent from "@/components/DropdownComponent.vue";
import { onMounted, onUnmounted, ref } from "vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";

const isTopPosition = ref(true)
const menu = ref(null)

const openSidebar = () => {
    menu.value.openSidebar()
}

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
.z-1000 {
    z-index: 1000000;
}
</style>