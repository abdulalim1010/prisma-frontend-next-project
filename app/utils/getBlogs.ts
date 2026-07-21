import { cacheLife } from "next/cache";


export const GetBlogs=async()=>{
    "use cache"
     cacheLife('hours')

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const postData = await res.json();
console.log(postData)
return postData

}