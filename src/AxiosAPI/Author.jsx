import {axiosPublicInstance} from "./Config/AxiosConfig";


export const Author = {
    login : async function(email, password) {
        return await axiosPublicInstance.request({
            url : '/api/auth/login',
            method : 'POST',
            data : {
                email : email,
                password : password
            }
        })
    },

    signUp : async function(data) {
        return await axiosPublicInstance.request({
            url : '/api/auth/signup',
            method : 'POST',
            data : {
                email : data.email,
                username : data.nickname,
                password : data.pw
            }
        })
    },

    checkEmail : async function(email) {
        return await axiosPublicInstance.request({
            url : '/api/auth/check/email',
            method : 'POST',
            data : {
                email : email
            }
        })
    },

    checkNickname : async function(nickname) {
        return await axiosPublicInstance.request({
            url : '/api/auth/check/username',
            method : 'POST',
            data : {
                username : nickname
            }
        })
    },


}