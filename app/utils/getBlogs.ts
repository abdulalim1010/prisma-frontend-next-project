import { cacheLife, revalidateTag } from "next/cache";


export const GetBlogs=async()=>{
    // "use cache"
    //  cacheLife('hours')

    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        cache:"force-cache",
        next:{
            revalidate:60*60*24,
            tags:["posts"]
        }

    });
const postData = await res.json();
console.log(postData)
return postData

}
const renewBlogTags=()=>{
    revalidateTag("post",{
        expire:60*60*24,

    })



}