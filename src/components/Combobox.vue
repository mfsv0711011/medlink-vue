<template>
    <Combobox as="div" v-model="selectedPerson" @update:modelValue="query = ''">
        <div class="relative">
            <ComboboxInput :placeholder="$attrs.placeholder" v-on-click-outside="() => isOpenMenu = false" @focus="isOpenMenu = true" @click="isOpenMenu = true" class="w-full rounded-md border-0 py-1.5 lg:pl-3 lg:pr-10 text-gray-900 outline-none focus:ring-0 sm:text-sm sm:leading-6" @change="query = $event.target.value" @blur="query = ''" :display-value="(person) => person?.name" />

            <div v-show="isOpenMenu">
                <ComboboxOptions static v-if="filteredPeople.length > 0" class="absolute z-10 mt-1 max-h-60 w-40 sm:w-full overflow-auto rounded-md bg-white py-1 text-sm lg:text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <ComboboxOption @click="isOpenMenu = false" v-for="person in filteredPeople" :key="person.id" :value="person" as="template" v-slot="{ active, selected }">
                        <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                        <span :class="['block truncate', selected && 'font-semibold']">
                          {{ person.name }}
                        </span>

                            <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </ComboboxOption>
                </ComboboxOptions>
            </div>
        </div>
    </Combobox>
</template>

<script setup>
import { computed, ref } from 'vue'
import { CheckIcon } from '@heroicons/vue/20/solid'
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/vue'
import { vOnClickOutside } from '@vueuse/components'

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
    // More users...
]

const query = ref('')
const isOpenMenu = ref(false)
const selectedPerson = ref(null)
const filteredPeople = computed(() =>
    query.value === ''
        ? people
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.value.toLowerCase())
        }),
)
</script>