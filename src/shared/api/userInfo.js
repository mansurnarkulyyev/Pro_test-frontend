
import { instance } from "./api";


export async function addUserInfo(data) {
    const  {data:result}  = await instance.post("users/info", data, {headers:{"Content-Type":"multipart/form-data"}});
    return result;
}

export const getUserInfo = async (_page = 1) => {
    const {data} = await instance.get("/users/info", {
        params:{
            _page
        }
    });
    return data;
}