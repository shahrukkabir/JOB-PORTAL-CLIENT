import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-eight-tawny.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;


// import axios from 'axios';
// import React, { useEffect } from 'react';
// import useAuth from './useAuth';
// import { useNavigate } from 'react-router-dom';


// const axiosInstance = axios.create({
//     baseURL: 'https://job-portal-server-for-recruiter-part3.vercel.app',
//     withCredentials: true
// });

// const useAxiosSecure = () => {
//     const { signOutUser } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         axiosInstance.interceptors.response.use(response => {
//             return response;
//         }, error => {
//             console.log('api response error status', error.status);
//             if (error.status === 401 || error.status === 403) {
//                 signOutUser()
//                     .then(() => {
//                         // redirect to the login page
//                         navigate('/signIn')
//                     })
//                     .catch(err => console.log(err))
//             }
//             return Promise.reject(error);
//         })
//     }, [])

//     return axiosInstance;
// };

// export default useAxiosSecure;

