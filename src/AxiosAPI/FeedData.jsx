import {axiosPrivateInstance} from "./Config/AxiosConfig";
import {axiosPublicInstance} from "./Config/AxiosConfig";

export const FeedData = {
    getFeedData : async function(params) {
        return await axiosPublicInstance.request({
            url : `/api/feed/${params}`,
            method : "GET"
        })
    }
}