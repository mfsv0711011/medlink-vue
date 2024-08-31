<template>
    <div class="p-4 rounded-lg border border-gray/50 bg-white hover:shadow-3xl transition-all flex flex-col gap-4 h-full">
        <div class="flex gap-5">
            <div class="relative h-fit">
                <div class="rounded-full size-24 overflow-hidden">
<!--                    <img v-if="doctor.photo !== 'doctor_photo.jpg'" class="w-full" :src="baseUrl + doctor.photo" alt="avatar">-->
                    <UserCircleIcon class="size-full text-darker" area-hidden="true" />
                </div>
                <button class="absolute bottom-0 right-0 bg-white shadow rounded-full">
                    <VideoCameraIcon class="size-7 p-1.5 text-darker font-bold" aria-hidden="true"/>
                </button>
            </div>
            <div class="text-dark flex flex-col gap-0.5">
                <h2 class="text-xl font-medium">Dr. {{ doctor.fullname }}</h2>
                <p class="capitalize text-[14px] font-medium">{{ getDoctorSpecializations }}</p>
                <div class="flex gap-2 text-[14px] leading-none items-center">
                    <div class="flex gap-1 leading-none items-center">
                        <StarIcon class="size-5 text-yellow-400 font-bold" aria-hidden="true"/>
                        4.71
                    </div>
                    <span>•</span>
                    {{ doctor.reviews.length }} reviews
                </div>
            </div>
        </div>
        <div class="flex gap-1 items-center">
            <MapPinIcon class="size-4 text-darker font-bold" aria-hidden="true"/>
            <p class="text-[14px] text-darker leading-none">{{ doctor.address }}</p>
        </div>
        <p class="text-darker/70 text-[14px] my-5">{{ doctor.description }}</p>
        <p class="text-[14px] mt-auto">Next available on Wed, Sep 11</p>
        <button :class="{'bg-gray cursor-not-allowed': isDisabled }" class="px-4 py-3 cursor-pointer bg-darkblue/90 text-white rounded active:bg-darkblue/70 hover:bg-darkblue">Book online</button>
    </div>
</template>

<script setup>
import {MapPinIcon, StarIcon, VideoCameraIcon, UserCircleIcon} from "@heroicons/vue/16/solid/index.js";
import {computed} from "vue";

const props = defineProps({
    doctor: {
        type: Object,
        required: true
    }
})

const getDoctorSpecializations = computed(() => props.doctor.specialization.join(', '))
const baseUrl = computed(() => import.meta.VITE_APP_API_URL)
const isDisabled = computed(() => false)
</script>

<style scoped>

</style>