import {axiosInstance} from "./Config/AxiosConfig";

export const OAuth = {
    postCode : async function(code) {
        return await axiosInstance.request({
            url : `/api/auth/kakao?code=${code}`,
            method : "GET",
            headers : {
                "Content-type" : "application/x-www-form-urlencoded;charset=utf-8"
            }
        })
    },
    // getToken : async function(code) {
    //     return await axiosInstance.request({
    //         baseURL : `https://kauth.kakao.com`,
    //         url : `/oauth/token`,
    //         params : {
    //             client_id : ``,
    //             redirect_uri : ``,
    //             grant_type : ``,
    //             code : code,
    //             client_secret : ``,
    //
    //         }
    //
    //     })
    // }
}