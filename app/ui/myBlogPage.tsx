export const Myblogpage=async()=>{
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const postData = await res.json();


return(
      <div>
      <h1>All Blogs</h1>

      {postData.slice(0, 10).map((post: any) => (
        <div
          key={post.id}
          className="border p-4 my-2 rounded"
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
)
}