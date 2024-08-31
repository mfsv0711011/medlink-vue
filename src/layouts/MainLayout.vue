<template>
    <div class="flex flex-col min-h-dvh bg-gray/20">
        <Header/>
        <router-view/>
        <Footer class="mt-auto"/>
    </div>
</template>

<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>

</style>