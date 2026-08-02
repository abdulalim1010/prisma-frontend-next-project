import { getPublicNews } from "@/service/news";
import PublicNews from "./PublicNews";
import SearchBar from "../_components/SearchBar";


export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
  }>;
}) {
  const { search } = await searchParams;

  const result = await getPublicNews(search);

  console.log("NEWS RESULT:", result);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">
        Latest News
      </h1>
      <h1>
        <SearchBar path="/news" />
      </h1>

      <PublicNews news={result.data} />
    </div>
  );
}