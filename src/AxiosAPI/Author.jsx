import {axiosPrivateInstance} from "./Config/AxiosConfig";
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
    }
}