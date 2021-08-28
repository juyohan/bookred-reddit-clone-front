import {axiosPrivateInstance} from "./Config/AxiosConfig";
import {axiosPublicInstance} from "./Config/AxiosConfig";
import Token from "../JwtToken/Token";

export const FeedData = {
    getFeedData : async function(params) {
        return await axiosPublicInstance.request({
            headers : {
                "Authorization": "Bearer " + Token()
            },
            url : `/api/feed/${params}`,
            method : "GET"
        })
    },
    getFeedDateAndUser : async  function(params) {
        return await axiosPrivateInstance.request({
            headers : {
                "Authorization": "Bearer " + Token(),
            },
            url : `/api/feed/${params}`,
            method : "GET"
        })
    },

    postLike : async function(type, id) {
        return await axiosPrivateInstance.request({
            headers : {
                "Authorization": "Bearer " + Token(),
            },
            url : `/api/likes`,
            data : {
                feedId : id,
                likeType : type
            },
            method : 'POST'
        })
    },



}