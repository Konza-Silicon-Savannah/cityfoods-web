//utils/api.ts
import axios from 'axios';
import { secureStorage } from './secureStorage';

const api =axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
    const token = secureStorage.getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

//Handle token expiration
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status == 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = secureStorage.getRefreshToken();
                if (!refreshToken) {
                    throw new Error('No refresh token available');
                }

                //call your refresh token endpoint
                const response = await axios.post('api/v1/refresh-token', {
                    refresh: refreshToken
                });

                const { access } = response.data;
                secureStorage.setTokens({
                    access,
                    refresh: refreshToken
                });

                //Retry the original request
                return api(originalRequest);
            } catch (refreshError) {
                //Token refresh failed, clear storage and redirect to login
                secureStorage.clearAll();
                window.location.href = '/signin';
                return Promise.reject(refreshError)
            }
        }
    }
)

export default api;