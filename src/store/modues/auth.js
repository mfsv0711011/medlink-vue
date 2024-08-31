import {defineStore} from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTcxNTU1LTEzZDgtNDM1Yy1iMTQxLTg4NTFjMDNlZjkzMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyNDk4MDU2NywiZXhwIjoxNzMzNjIwNTY3fQ.9W3boZJQfepteDbKKW0jCI9lqsPTc7pisjVdnQt3dlM'
    }),
    getters: {
        getToken: () => this.token,
    }
})