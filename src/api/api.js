import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'http://ai.test:8000/'
});

instance.interceptors.request.use(request => {
    request.headers.common['Accept']       = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';
    return request;
});

instance.interceptors.response.use(
    response => { return response },
    error => { return Promise.reject(error)}
);


export default instance;