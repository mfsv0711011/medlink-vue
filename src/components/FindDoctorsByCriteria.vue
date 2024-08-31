<template>
    <HeadingTwo class="text-dark text-center sm:text-start">Find doctors and dentists by city</HeadingTwo>
<!--    <div class="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 mt-7 mb-20">-->
    <div class="columns-4 space-y-5 mt-7 mb-20 gap-x-12 gap-y-2">
        <test v-for="(filter, index) in filters"
              :key="index"
              v-model="openIndex[index]"
              class="break-inside-avoid-column"
              :filter="filter"
              :ref="setItemRef"
              @update:modelValue="handleToggle(index)"
              @itemClicked="handleItemClick(index)"
        />
    </div>
</template>

<script setup>
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import Test from "@/components/test.vue";
import {onMounted, ref} from "vue";

const itemRefs = ref([]);
const setItemRef = el => {
    if (el) {
        itemRefs.value.push(el);
    }
};
const handleItemClick = clickedIndex => {
    itemRefs.value.forEach((item, index) => {
        if (index !== clickedIndex) {
            item.close();
        } else {
            item.open()
        }
    });
};
const filters = [
    {
        name: 'New York City',
        options: [
            { value: 'New York City Doctors', label: 'White', checked: false },
            { value: 'New York City Dentists', label: 'Beige', checked: false },
            { value: 'New York City Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'New York City Pediatricians', label: 'Brown', checked: false },
            { value: 'New York City Dermatologists', label: 'Green', checked: false },
            { value: 'New York City OB-GYNs', label: 'Purple', checked: false },
            { value: 'New York City Psychiatrists', label: 'Purple', checked: false }
        ],
    },
    {
        name: 'Los Angeles',
        options: [
            { value: 'Los Angeles Doctors', label: 'White', checked: false },
            { value: 'Los Angeles Dentists', label: 'Beige', checked: false },
            { value: 'Los Angeles Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'Los Angeles Pediatricians', label: 'Brown', checked: false },
            { value: 'Los Angeles Dermatologists', label: 'Green', checked: false }
        ],
    },
    {
        name: 'Chicago',
        options: [
            { value: 'Chicago Doctors', label: 'White', checked: false },
            { value: 'Chicago Dentists', label: 'Beige', checked: false },
            { value: 'Chicago Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'Chicago Pediatricians', label: 'Brown', checked: false },
            { value: 'Chicago Dermatologists', label: 'Green', checked: false },
            { value: 'Chicago OB-GYNs', label: 'Purple', checked: false },
            { value: 'Chicago Psychiatrists', label: 'Purple', checked: false },
            { value: 'Chicago Therapists', label: 'Purple', checked: false },
            { value: 'Chicago Eye Doctors', label: 'Purple', checked: false },
            { value: 'Chicago ENT Doctors', label: 'Purple', checked: false },
        ],
    },
    {
        name: 'Houston',
        options: [
            { value: 'Houston Doctors', label: 'White', checked: false },
            { value: 'Houston Dentists', label: 'Beige', checked: false },
            { value: 'Houston Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'Houston Pediatricians', label: 'Brown', checked: false },
            { value: 'Houston Dermatologists', label: 'Green', checked: false },
            { value: 'Houston OB-GYNs', label: 'Purple', checked: false },
            { value: 'Houston Psychiatrists', label: 'Purple', checked: false },
            { value: 'Houston Therapists', label: 'Purple', checked: false },
            { value: 'Houston Eye Doctors', label: 'Purple', checked: false },
            { value: 'Houston ENT Doctors', label: 'Purple', checked: false },
        ],
    },
    {
        name: 'Phoenix',
        options: [
            { value: 'Phoenix Doctors', label: 'White', checked: false },
            { value: 'Phoenix Dentists', label: 'Beige', checked: false },
            { value: 'Phoenix Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'Phoenix Pediatricians', label: 'Brown', checked: false },
            { value: 'Phoenix Dermatologists', label: 'Green', checked: false },
            { value: 'Phoenix OB-GYNs', label: 'Purple', checked: false },
            { value: 'Phoenix Psychiatrists', label: 'Purple', checked: false },
            { value: 'Phoenix Therapists', label: 'Purple', checked: false },
            { value: 'Phoenix Eye Doctors', label: 'Purple', checked: false },
            { value: 'Phoenix ENT Doctors', label: 'Purple', checked: false },
        ],
    },
    {
        name: 'Philadelphia',
        options: [
            { value: 'Philadelphia Doctors', label: 'White', checked: false },
            { value: 'Philadelphia Dentists', label: 'Beige', checked: false },
            { value: 'Philadelphia Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'Philadelphia Pediatricians', label: 'Brown', checked: false },
            { value: 'Philadelphia Dermatologists', label: 'Green', checked: false },
            { value: 'Philadelphia OB-GYNs', label: 'Purple', checked: false },
            { value: 'Philadelphia Psychiatrists', label: 'Purple', checked: false },
            { value: 'Philadelphia Therapists', label: 'Purple', checked: false },
            { value: 'Philadelphia Eye Doctors', label: 'Purple', checked: false },
            { value: 'Philadelphia ENT Doctors', label: 'Purple', checked: false },
        ],
    },
    {
        name: 'San Antonio',
        options: [
            { value: 'San Antonio Doctors', label: 'White', checked: false },
            { value: 'San Antonio Dentists', label: 'Beige', checked: false },
            { value: 'San Antonio Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'San Antonio Pediatricians', label: 'Brown', checked: false },
            { value: 'San Antonio Dermatologists', label: 'Green', checked: false },
            { value: 'San Antonio OB-GYNs', label: 'Purple', checked: false },
            { value: 'San Antonio Psychiatrists', label: 'Purple', checked: false },
            { value: 'San Antonio Therapists', label: 'Purple', checked: false },
            { value: 'San Antonio Eye Doctors', label: 'Purple', checked: false },
            { value: 'San Antonio ENT Doctors', label: 'Purple', checked: false },
        ],
    },
    {
        name: 'San Diego',
        options: [
            { value: 'San Diego Doctors', label: 'White', checked: false },
            { value: 'San Diego Dentists', label: 'Beige', checked: false },
            { value: 'San Diego Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'San Diego Pediatricians', label: 'Brown', checked: false },
            { value: 'San Diego Dermatologists', label: 'Green', checked: false },
            { value: 'San Diego OB-GYNs', label: 'Purple', checked: false },
            { value: 'San Diego Psychiatrists', label: 'Purple', checked: false },
            { value: 'San Diego Therapists', label: 'Purple', checked: false },
            { value: 'San Diego Eye Doctors', label: 'Purple', checked: false },
            { value: 'San Diego ENT Doctors', label: 'Purple', checked: false },
        ],
    },
    {
        name: 'Dallas',
        options: [
            { value: 'Dallas Doctors', label: 'White', checked: false },
            { value: 'Dallas Dentists', label: 'Beige', checked: false },
            { value: 'Dallas Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'Dallas Pediatricians', label: 'Brown', checked: false },
            { value: 'Dallas Dermatologists', label: 'Green', checked: false },
            { value: 'Dallas OB-GYNs', label: 'Purple', checked: false },
            { value: 'Dallas Psychiatrists', label: 'Purple', checked: false },
            { value: 'Dallas Therapists', label: 'Purple', checked: false },
            { value: 'Dallas Eye Doctors', label: 'Purple', checked: false },
            { value: 'Dallas ENT Doctors', label: 'Purple', checked: false },
        ],
    },
    {
        name: 'San Jose',
        options: [
            { value: 'San Jose Doctors', label: 'White', checked: false },
            { value: 'San Jose Dentists', label: 'Beige', checked: false },
            { value: 'San Jose Pediatric Dentists', label: 'Blue', checked: true },
            { value: 'San Jose Pediatricians', label: 'Brown', checked: false },
            { value: 'San Jose Dermatologists', label: 'Green', checked: false },
            { value: 'San Jose OB-GYNs', label: 'Purple', checked: false },
            { value: 'San Jose Psychiatrists', label: 'Purple', checked: false },
            { value: 'San Jose Therapists', label: 'Purple', checked: false },
            { value: 'San Jose Eye Doctors', label: 'Purple', checked: false },
            { value: 'San Jose ENT Doctors', label: 'Purple', checked: false },
        ],
    }
];


const openIndex = ref(Array(filters.length).fill(false));

const handleToggle = (index) => {
    openIndex.value = openIndex.value.map((value, i) => i === index ? !value : false);
}

onMounted(() => {
    console.log(itemRefs.value);
})
</script>
