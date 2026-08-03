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

  return (
    <div className="container mx-auto py-8">

      {/* Header */}
      <div className="mb-8 rounded-2xl border bg-card p-6 shadow-sm">

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Latest News
            </h1>

            <p className="mt-2 text-muted-foreground">
              Browse the latest news and stay updated with current events.
            </p>
          </div>

          <div className="w-full md:w-[420px]">
            <SearchBar path="/news" />
          </div>

        </div>

      </div>

      <PublicNews news={result.data} />

    </div>
  );
}