import {axiosInstance} from "./Config/AxiosConfig";
import {getCookie} from "../JwtToken/Cookie";

export const FeedData = {
    getFeedData : async function(params) {
        return await axiosInstance.request({
            url : `/api/feed/${params}`,
            method : "GET",
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`
            }
        })
    },

    postLike : async function(type, id) {
        return await axiosInstance.request({
            url : `/api/likes`,
            data : {
                feedId : id,
                likeType : type
            },
            method : 'POST',
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`
            }
        })
    },



}