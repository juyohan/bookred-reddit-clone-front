import {axiosInstance} from "./Config/AxiosConfig";
import {getCookie} from "../JwtToken/Cookie";

export const FeedData = {
    getFeedData : async function(params, pageNum) {
        return await axiosInstance.request({
            url : `/api/feed/${params}`,
            params : {
              page : `${pageNum}`
            },
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
    saveFeed : async function(data) {
        return await axiosInstance.request({
            url : `/api/feed/save`,
            data : {
                title : data.title,
                content : data.content,
            },
            method : 'POST',
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`
            }
        })
    }


}