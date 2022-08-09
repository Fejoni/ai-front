import api from "./api";

export default {
    createSession() {
        return api.get('sanctum/csrf-cookie')
    },

    login(params) {
        return api.post('login', params)
    },
    logout() {
        return api.post('logout')
    },

    getPosts() {
        return api.get('api/v1/get');
    },
};
