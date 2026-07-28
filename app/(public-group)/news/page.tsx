
import { getPublicNews } from "@/service/news";
import PublicNews from "./PublicNews";




export default async function NewsPage() {
  const result = await getPublicNews();

  console.log("NEWS RESULT:", result);

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">
        Latest News
      </h1>

      <PublicNews news={result.data} />
    </div>
  );
}