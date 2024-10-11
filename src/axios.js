import axios from "axios";

const api = axios.create({
    baseURL: "https://llp-qxsy.onrender.com",
    // baseURL: "http://localhost:5000",
});

export default api;
