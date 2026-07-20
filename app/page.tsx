import DislikeButton from "./ui/dislike-button";
import LikeButton from "./ui/Likebutton";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">
        Blog Slug: {slug}
      </h1>

      <LikeButton likes={10} />
      <DislikeButton dislikes={5} />
    </div>
  );
}