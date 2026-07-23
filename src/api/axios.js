import axios from "axios";
const URL_API = import.meta.env.VITE_URL_API;

const api = axios.create({
  baseURL: URL_API || "http://localhost:8000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
