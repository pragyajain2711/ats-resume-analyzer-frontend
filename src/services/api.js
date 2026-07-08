import axios from "axios";

const api = axios.create({
    baseURL: "https://ats-resume-analyzer-backend-production.up.railway.app/api"
});

export default api;