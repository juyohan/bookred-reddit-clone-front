import axios from "axios";

export const axiosPrivateInstance = axios.create({
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("Access_Token"),
        "Content-Type": 'application/json'
    },
    baseURL: 'http://localhost:8080'

    // JWT 를 쿠키에 저장할 땐 withCreedentials 을 봐야한다.
});

export const axiosPublicInstance = axios.create({
    headers: {
        "Content-Type": 'application/json'
    },
    baseURL: 'http://localhost:8080'
});
