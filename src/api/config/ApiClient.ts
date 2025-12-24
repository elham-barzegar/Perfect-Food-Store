import axios from "axios";
import {toast} from "react-toastify";

const apiClient = axios.create({
    baseURL: 'https://nest.navaxcollege.com/api',
    timeout: 12000
})

// Add a response interceptor
apiClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger

    return response;
}, function (error) {


    if (error.response) {
        if (error.response.status === 404) {
            toast.error('🦄 Wow :( => The requested resources do not exist.');
        } else if (error.response.status === 400) {
            toast.error('🦄 Wow :( => The parameters sent are not correct.');
        } else if (error.response.status === 403) {
            toast.error('🦄 Wow :( => You do not have access to these resources. ');
        } else if (error.response.status === 401) {
            toast.error('🦄 Wow :( => Please log in.');
        } else {
            toast.error('🦄 Wow :( => An error has occurred. Please check back later.');
        }


    } else if (error.request) {

        toast.error('🦄 Wow so easy! Server Error');
    } else {

        toast.error('🦄 Wow so easy! Undefined Error:(',);
    }


    return Promise.reject(error);
});



export default apiClient;