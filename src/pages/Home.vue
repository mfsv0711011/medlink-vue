<template>
    <section class="grid grid-cols-12 pt-10 px-3.5">
        <Toast/>
        <div class="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col gap-12 mb-20">
            <h1 class="text-2xl lg:text-[44px] leading-tight text-dark text-center mt-14">Book local doctors <br> who take your insurance</h1>
            <MainSearch/>
        </div>
    </section>
    <section class="bg-white pt-20">
        <CarouselDoctors :doctors="doctorStore.getDoctors" :is-loading="doctorStore.getLoading" heading="Top-rated primary care doctors">
            <template #description>
                <b class="font-medium text-dark">90%</b> of patients gave these primary care doctors 5 stars
            </template>
        </CarouselDoctors>

        <CarouselDoctors :doctors="doctorStore.getDoctors" :is-loading="doctorStore.getLoading" heading="Dentists with the shortest wait time">
            <template #description>
                <b class="font-medium text-dark">91%</b>  of patients spent less than 30 minutes in the waiting room for these Dentists
            </template>
        </CarouselDoctors>
    </section>

    <section class="sm:py-20 px-4 lg:px-16 bg-gray/20 py-20">
        <TopSearchedSpecialties/>
    </section>

    <section class="py-20 bg-aqua">
        <div class="container">
            <HeadingTwo class="text-white mb-20 text-center">Let’s get you a doc who gets you</HeadingTwo>

            <div class="grid grid-cols-1 md:grid-cols-3 space-y-14 md:space-y-0 gap-2 lg:gap-10">
                <SimpleCard title="Browse providers who take your insurance" button-text="See specialities" img="/ValuePropsInsurance___5f19a.svg"/>
                <SimpleCard title="Read reviews from users" button-text="See providers" img="/ValuePropsReviews___d6977.svg"/>
                <SimpleCard title="Book an appointment today, online" button-text="See availability" img="/ValuePropsBook___893a8.svg"/>
            </div>
        </div>
    </section>

    <section class="py-20">
        <div class="container">
            <FindDoctorsByCriteria/>
        </div>
    </section>
</template>

<script setup>
import MainSearch from "@/components/MainSearch.vue";
import Toast from "@/components/Toast.vue";
import CarouselDoctors from "@/components/Carousel/CarouselDoctors.vue";
import {onMounted, ref, watch} from "vue";
import {useDoctorStore} from "@/store/modues/doctor.js";
import SimpleCard from "@/components/SimpleCard.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import TopSearchedSpecialties from "@/components/TopSearchedSpecialties.vue";
import Test from "@/components/CollapseMenu.vue";
import FindDoctorsByCriteria from "@/components/FindDoctorsByCriteria.vue";

const doctorStore = useDoctorStore()

const isOpen = ref(false)
const test = ref(null)

const updateOpenClose = val => isOpen.value = val;

onMounted(() => {
    doctorStore.fetchDoctors()
})
</script>

<style scoped>

</style>