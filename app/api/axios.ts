// api/axios.ts
import axios from 'axios';

// Create separate instances for auth and API endpoints
const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  withCredentials: true,
});

// Create a separate instance for local Next.js API routes
const localApi = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    try {
      // Use the correct path for the token endpoint
      const response = await localApi.get('/auth/token');
      const data = await response.data;
      
      if (data.accessToken) {
        config.headers.Authorization = `Bearer ${data.accessToken}`;
      }
      
      return config;
    } catch (error) {
      console.error('Error in interceptor:', error);
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;