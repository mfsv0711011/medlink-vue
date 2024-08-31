<template>
    <Menu as="div" class="relative inline-block text-left border border-darkblue px-4 rounded hover:bg-darkblue text-darkblue hover:text-white">
        <div class="-mx-3">
            <MenuButton class="text-nowrap transition-all px-4 py-1.5 rounded inline-flex w-full justify-center gap-x-1.5 cursor-pointer bg-transparent hover:bg-gray-50">
                Log in
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems class="text-dark p-3 sm:p-5 sm:text-xl flex flex-col gap-4 absolute overflow-x-auto scrollbar right-0 z-[100] mt-2 w-44 sm:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                    <div class="block ">
                        <p class="px-4 py-2 font-medium">Patients</p>
                        <button class="text-start w-full hover:bg-gray/25 px-4 py-2 rounded">Log in</button>
                    </div>
                </MenuItem>
                <div class="w-full h-px bg-gray"></div>
                <MenuItem>
                    <div class="block ">
                        <p class="px-4 py-2 font-medium">Doctors</p>
                        <button class="text-start w-full hover:bg-gray/25 px-4 py-2 rounded">Log in</button>
                    </div>
                </MenuItem>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<style scoped>
.scrollbar {
    scrollbar-width: thin;
}
</style>