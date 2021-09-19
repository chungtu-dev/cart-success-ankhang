import axios from "axios";

export const request = axios.create({
    baseURL:"http://localhost:3000/AKdata",
    timeout:1000,
});

// export const request = axios.create({
//     baseURL:"https://staging.nhathuocankhang.com/api/CartTest",
//     timeout:1000,
// });