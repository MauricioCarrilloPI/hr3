import axios from 'axios';

const hr3GetClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_AUTH_VERCEL}`,
    timeout:10000,
    headers: {
        'Content-Type' : 'application/json',
    }
});



hr3GetClient.interceptors.request.use(
    (config) => {
     const token = localStorage.getItem('token');

     if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;

    },

    (error:any)=> Promise.reject(error)
    )
export default hr3GetClient;