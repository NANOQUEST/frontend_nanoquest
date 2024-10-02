import axios from "axios";

const api = axios.create({
    baseURL: "https://llp-qxsy.onrender.com",
});

export default api;
