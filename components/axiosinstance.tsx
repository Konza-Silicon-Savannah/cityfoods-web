"use client"

import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/'; // Adjust this to your API base URL

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(`${baseURL}accounts/api/token/refresh/`, {
          refresh: refreshToken
        });

        if (response.status === 200) {
          localStorage.setItem('authToken', response.data.access);
          
          // Retry the original request with the new token
          originalRequest.headers['Authorization'] = `Token ${response.data.access}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // If refreshing the token fails, redirect to login
        window.location.href = '/login';
        console.log(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;