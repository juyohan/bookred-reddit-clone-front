import {axiosInstance} from "./Config/AxiosConfig";
import {getCookie} from "../JwtToken/Cookie";

export const User = {
    userInfo : async function() {
        return await axiosInstance.request({
            url : '/api/user/get',
            method : 'GET',
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`
            }
        })
    },

    checkUserPw : async function(pw) {
        return await axiosInstance.request({
            url : `/api/user/checkPw`,
            method : 'POST',
            data : {
                pw : pw
            },
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`
            }
        })
    },

}