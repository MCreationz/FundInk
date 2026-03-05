import axios from "axios";

// Base URL for your API
const API_URL = import.meta.env.VITE_API_URL;
// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor to attach token from cookies
api.interceptors.request.use(
  (config) => {
    const token = "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional: handle 401 Unauthorized globally
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Optimized wrapper methods
const ApiService = {
  get: async (url, params = {}) => {
    const { data } = await api.get(url, { params });
    return data;
  },

  post: async (url, body = {}) => {
    const { data } = await api.post(url, body);
    return data;
  },

  put: async (url, body = {}) => {
    const { data } = await api.put(url, body);
    return data;
  },
  patch: async (url, body = {}) => {
    const { data } = await api.patch(url, body);
    return data;
  },
  delete: async (url, body = {}) => {
    const { data } = await api.delete(url, { data: body });
    return data;
  },
};

export default ApiService;
