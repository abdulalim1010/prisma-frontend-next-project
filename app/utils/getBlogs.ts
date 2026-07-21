export const GetBlogs=async()=>{

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const postData = await res.json();
console.log(postData)
return postData

}