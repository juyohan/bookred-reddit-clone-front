import {axiosInstance} from "./Config/AxiosConfig";

export const File = {
    getFile : async function(fileName) {
        return await axiosInstance.request({
            url : `/api/file/image`,
            params : {
                fileName : `${fileName}`
            },
            method : "get"
        })
    }
}
