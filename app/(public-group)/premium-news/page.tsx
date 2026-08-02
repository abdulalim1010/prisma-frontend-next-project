import { getPremiumNews } from "@/service/news";

import PremiumNews from "../premium/PremiumNews";
import SearchBar from "../_components/SearchBar";

export default async function PremiumNewsPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
  }>;
}) {

  const { search } = await searchParams;

  const result = await getPremiumNews(search);

  console.log("PREMIUM RESULT:", result);


  return (
    <div className="container mx-auto py-8">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Premium News
        </h1>

        <SearchBar path="/premium-news" />

      </div>


      <PremiumNews 
        news={result.data}
      />

    </div>
  );
}