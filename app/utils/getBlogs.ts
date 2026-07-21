export const GetBlogs=async()=>{
    "use cache"

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const postData = await res.json();
console.log(postData)
return postData

}