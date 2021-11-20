import {getCookie} from "../JwtToken/Cookie";
import {axiosInstance} from "./Config/AxiosConfig";


export const Author = {
    login: async function (email, password) {
        return await axiosInstance.request({
            url: '/api/auth/login',
            method: 'POST',
            data: {
                email: email,
                password: password
            },
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`
            }
        })
    },

    signUp: async function (data) {
        return await axiosInstance.request({
            url: '/api/auth/signup',
            method: 'POST',
            data: {
                email: data.email,
                username: data.nickname,
                password: data.pw
            },
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`
            }
        })
    },

    checkEmail: async function (email) {
        return await axiosInstance.request({
            url: '/api/auth/check/email',
            method: 'POST',
            data: {
                email: email
            }
        })
    }
    ,

    checkNickname: async function (nickname) {
        return await axiosInstance.request({
            url: '/api/auth/check/username',
            method: 'POST',
            data: {
                username: nickname
            }
        })
    }
    ,

    logout: async function () {
        return await axiosInstance.request({
            url: `/api/auth/logout`,
            method: 'POST',
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`
            }
        })
    }
}