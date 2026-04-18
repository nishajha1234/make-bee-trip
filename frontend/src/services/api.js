import axios from "axios";

/* Axios instance */
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 5000,
});

/* Response interceptor */
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Request failed";

    console.error({
      message,
      url: error.config?.url,
      method: error.config?.method,
    });

    return Promise.reject(new Error(message));
  }
);

/* Generic request wrapper */
const request = async (apiCall) => {
  try {
    const response = await apiCall;
    return response.data;
  } catch (error) {
    throw error;
  }
};

/* API methods with query support */
export const getFlights = (params = {}) =>
  request(API.get("/flights", { params }));

export const getBuses = (params = {}) =>
  request(API.get("/buses", { params }));

export const getTrains = (params = {}) =>
  request(API.get("/trains", { params }));

export const getHotels = (params = {}) =>
  request(API.get("/hotels", { params }));