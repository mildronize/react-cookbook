import axios from "axios";

export const baseURL = "http://localhost:3005";

export default axios.create({
    baseURL: baseURL,
    timeout: 2000,
    headers: { 'Content-Type': 'application/json' }
});