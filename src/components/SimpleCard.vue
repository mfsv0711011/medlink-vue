<template>
    <div class="bg-white rounded px-10 h-fit">
        <div class="-translate-y-16 mx-auto relative">
            <img class="w-full" :src="img" alt="ValuePropsInsurance___5f19a.svg">
        </div>
        <div class="-translate-y-10">
            <h3 class="h-14 mb-8 text-xl sm:text-base md:text-base lg:text-xl text-dark font-medium text-center">{{ title }}</h3>
            <button class="lg:mb-4 px-4 py-3 border rounded w-full border-dark hover:bg-lightblue hover:text-white hover:border-lightblue transition-all">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    buttonText: {
        type: String,
        required: true,
    }
})
</script>

<style scoped>

</style>