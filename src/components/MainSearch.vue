<template>
    <div class="border shadow border-gray bg-white rounded-full flex justify-between p-1 lg:p-2 items-center text-sm">
        <div class="border-r border-gray w-full flex justify-start items-center px-1 lg:px-2 lg:gap-1">
            <MagnifyingGlassIcon class="flex-none size-5 text-darker font-bold" aria-hidden="true" />
            <Combobox class="text-sm w-full" placeholder="Condition, procedure, doctor..." />
<!--            <input class="w-full bg-transparent border-none focus:ring-0" type="text" placeholder="Condition, procedure, doctor...">-->
        </div>
        <div class="w-full flex justify-start items-center px-1 lg:px-2 lg:gap-1">
            <MapPinIcon class="flex-none size-6 text-darker font-bold" aria-hidden="true" />
            <Combobox class="text-sm w-full" placeholder="Location..."/>
<!--            <input class="w-full bg-transparent border-none focus:ring-0" type="text" placeholder="Location...">-->
        </div>
        <div class="w-fit">
            <button class="bg-darkblue/80 hover:shadow transition-all hover:bg-darkblue rounded-full flex justify-center items-center p-2">
                <MagnifyingGlassIcon class="size-5 text-white font-bold" aria-hidden="true" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/vue/24/solid'
import Combobox from "@/components/Combobox.vue";

</script>

<style scoped>

</style>