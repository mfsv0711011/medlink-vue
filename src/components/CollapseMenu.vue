<template>
    <Disclosure @click="toggle" as="div" class="border-b border-gray/50 py-6 transition-all cursor-pointer h-fit">
        <h3 class="-my-3 flow-root">
            <DisclosureButton
                class="flex w-full items-center justify-between text-dark">
                <span class="font-medium text-dark text-sm sm:text-base">{{ filter.name }}</span>
                <span class="ml-6 flex items-center hover:bg-gray/25 p-1.5 rounded transition-all">
                  <ChevronDownIcon v-if="!isOpen" aria-hidden="true" class="size-7 text-dark"/>
                  <ChevronUpIcon v-else aria-hidden="true" class="size-7 text-dark"/>
                </span>
            </DisclosureButton>
        </h3>
        <div v-show="isOpen">
            <DisclosurePanel class="pt-5" static>
                <div class="space-y-1">
                    <div
                        v-for="option in filter.options"
                        :key="option.value"
                        class="flex items-center"
                    >
                        <button class="w-full text-start text-xs lg:text-sm underline hover:text-lightblue transition-all">{{ option.value }}</button>
                    </div>
                </div>
            </DisclosurePanel>
        </div>
    </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
import {ref} from "vue";

const emit = defineEmits(['itemClicked'])
const props = defineProps({
    filter: {
        type: Object,
        required: true,
    }
})

const isOpen = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
    emit('itemClicked')
}

const close = () => {
    isOpen.value = false
}

defineExpose({ close })

</script>