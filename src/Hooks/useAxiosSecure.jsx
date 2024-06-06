//import React from 'react';
import axios from "axios";
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_URL
})
//console.log(import.meta.env.VITE_URL,axiosSecure)

const useAxiosSecure = () => {



    return axiosSecure;
};

export default useAxiosSecure;