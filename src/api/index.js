import axios from "axios";

export const request = axios.create({
    baseURL:"http://localhost:3000/AKdata/",
    timeout:1000,
});