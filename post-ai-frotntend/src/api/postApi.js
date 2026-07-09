import api from "./axios";

export const fetchPosts = () =>{
    // return api.get("/post")
    return api.get(`/post/?t=${new Date().getTime()}`)
}

export const createPostApi = (postData) =>{
    return api.post("/post/postcre", postData)
}