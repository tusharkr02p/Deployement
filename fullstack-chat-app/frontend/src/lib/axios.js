import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://deployement-ngte.onrender.com/api" : "/api",
  withCredentials: true,
});
