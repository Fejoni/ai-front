import api from "./api";

export default {
    createSession() {
        return api.get('http://ai.test:8000/sanctum/csrf-cookie')
    },

    login(params) {
        return api.post('http://ai.test:8000/login', params)
    },
    logout() {
        return api.post('http://ai.test:8000/logout')
    },

    getPosts() {
        return api.get('http://ai.test:8000/api/get');
    },
};
