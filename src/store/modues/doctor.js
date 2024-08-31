import {defineStore} from "pinia";
import { client } from "@/http/axios.js";
import {computed, reactive} from "vue";

export const useDoctorStore = defineStore('useDoctorStore', () => {
    const state = reactive({
        doctors: {
            models: [],
            totalCount: 0,
        },
        topRatedDoctors: {
            models: [],
            totalCount: 0,
        },
        isLoading: true,
    })

    const fetchDoctors = async () => {
        state.isLoading = true;
        const { data } = await client.get('/doctor')
        state.doctors.models = data.data.doctors
        state.doctors.totalCount = data.data.totalCount
        state.isLoading = false
    }

    const fetchTopRatedDoctors = async (limit = 15) => {
        state.isLoading = true;
        const { data } = await client.get(`/doctor/top-rated?limit=${limit}`)
        state.topRatedDoctors.models = data.data.doctors
        state.topRatedDoctors.totalCount = data.data.totalCount
        state.isLoading = false
    }

    return {
        fetchDoctors,
        fetchTopRatedDoctors,
        getDoctors: computed(() => state.doctors),
        getTopRatedDoctors: computed(() => state.topRatedDoctors),
        getLoading: computed(() => state.isLoading),
    }
})