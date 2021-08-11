import {axiosPrivateInstance} from "./Config/AxiosConfig";

export const User = {
    userInfo : async function() {
        return await axiosPrivateInstance.request({
            url : '/api/user/get',
            method : 'GET'
        })
    }
}