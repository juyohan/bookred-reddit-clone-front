import {axiosPrivateInstance} from "./Config/AxiosConfig";
import {axiosPublicInstance} from "./Config/AxiosConfig";

export const FeedData = {
    getFeedData : async function(params) {
        return await axiosPublicInstance.request({
            url : `/api/feed/${params}`,
            method : "GET"
        })
    },

    postLike : async function(type, id) {
        return await axiosPrivateInstance.request({
            url : `/api/likes`,
            data : {
                feedId : id,
                likeType : type
            },
            method : 'POST'
        })
    },



}