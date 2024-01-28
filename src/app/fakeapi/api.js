import axios from "axios"

export const getApi=async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
}

export const getApiData=async(id)=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    return res.data
}