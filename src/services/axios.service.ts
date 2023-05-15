import axios from "axios";
import {baseURL} from "../constants/urls";
import {accessToken} from "../constants";


const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(config=> {
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
})
export {
    axiosService,


}