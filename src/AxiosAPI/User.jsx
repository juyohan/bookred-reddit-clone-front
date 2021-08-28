import {axiosPrivateInstance} from "./Config/AxiosConfig";

export const User = {
    userInfo : async function() {
        return await axiosPrivateInstance.request({
            url : '/api/user/get',
            method : 'GET'
        })
    },

    checkUserPw : async function(pw) {
        return await axiosPrivateInstance.request({
            url : `/api/user/checkPw`,
            method : 'POST',
            data : {
                pw : pw
            }
        })
    }
}