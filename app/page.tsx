import DislikeButton from "./ui/dislike-button";
import LikeButton from "./ui/Likebutton";



import Link from "next/link";
import { Myblogpage } from "./ui/myBlogPage";




export default async function Home() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">
        Home Page
      </h1>

      <Link href="/blogs/react" className="text-blue-600 underline">
        Go to React Blog
      </Link>

   <Myblogpage/>

      <LikeButton likes={10} />
      <DislikeButton dislikes={5} />
    </div>
  );
}