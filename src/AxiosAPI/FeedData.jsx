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
    saveFeed : async function(data, files) {
        return await axiosInstance.request({
            url : `/api/feed/save`,
            method : 'POST',
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`,
                "Content-Type" : "multipart/form-data"
            },
            params : {
                'files' : files,
                'feed-dto' : {
                    title : data.title,
                    content : data.content
                }
            }
        })
    },
    getComments : async function(key) {
        return await axiosInstance.request( {
            url : `/api/comment/get`,
            method : "GET",
            params : {
                'feedKey' : key
            }
        })
    },
    saveComment : async function(data, feedKey) {
        return await axiosInstance.request({
            headers : {
                Authorization : `Bearer ${getCookie('Access-Token')}`
            },
            method : "POST",
            url : `/api/comment/save`,
            data : {
                content : data,
                key : feedKey
            }
        })
    }

}