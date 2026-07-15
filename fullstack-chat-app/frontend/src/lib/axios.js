import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");

export const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api`,
  withCredentials: true,
});

export const getApiErrorMessage = (error, fallback = "Something went wrong") =>
  error.response?.data?.message || error.response?.data?.error || fallback;
