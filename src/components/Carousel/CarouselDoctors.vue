<template>
    <div class="w-full">
        <div class="flex justify-between mb-4 mx-3.5 lg:mx-16">
            <div class="gap-1 flex flex-col">
                <HeadingTwo class="text-dark">{{ heading }}</HeadingTwo>
                <p class="text-darker">
                    <slot name="description"></slot>
                </p>
            </div>
            <div class="lg:flex gap-5 hidden items-center">
                <button class="hover:text-lightblue">See all ({{ doctors.totalCount }}+)</button>
                <div class="flex gap-2 items-center">
                    <button class="hover:bg-gray/25 p-2 rounded" @click="scrollPrev">
                        <ChevronLeftIcon class="size-7 text-dark font-bold" aria-hidden="true"/>
                    </button>
                    <button class="hover:bg-gray/25 p-2 rounded" @click="scrollNext">
                        <ChevronRightIcon class="size-7 text-dark font-bold" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        </div>
        <div class="mb-20">
            <div class="embla" ref="emblaRef">
                <div class="embla__container py-3 ml-3.5 lg:ml-16">
                    <div v-if="isLoading" class="w-80 lg:w-[400px] flex-none mr-5" v-for="skeleton of [1,2,3,4,5,6,7,8,9,10]" :key="skeleton">
                        <CardSkeleton />
                    </div>
                    <div
                        class="w-80 lg:w-[400px] flex-none mr-5"
                        v-for="doctor of doctors.models"
                        :key="doctor.id"
                    >
                        <router-link :to="{name: 'doctor-info', params: {id: doctor.id}}">
                            <Card :doctor="doctor"/>
                        </router-link>
                    </div>
                </div>
                <h2 v-if="!doctors.models.length" class="text-center text-xl text-darker">No data yet.</h2>
            </div>
            <div class="container">
                <div class="flex flex-col lg:hidden gap-5 items-center">
                    <button class="px-4 py-3 border rounded w-full border-dark hover:text-lightblue">See all ({{ doctors.totalCount }}+)</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/16/solid'
import CardSkeleton from "@/components/Carousel/CardSkeleton.vue";
import Card from "@/components/Carousel/Card.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";

defineProps({
    heading: {
        type: String,
        required: true,
    },
    doctors: {
        type: Object,
        required: true
    },
    isLoading: {
        type: Boolean,
        required: true
    }
})

const [emblaRef, emblaApi] = emblaCarouselVue({ align: "start"})

const scrollPrev = () => {
    if (emblaApi) emblaApi.value.scrollPrev()
}
const scrollNext = () => {
    if (emblaApi) emblaApi.value.scrollNext()
}
</script>

<style scoped>
.embla {
    overflow: hidden;
}
.embla__container {
    display: flex;
}
.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
}
</style>