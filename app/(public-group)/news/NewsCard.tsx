import Link from "next/link";

const NewsCard = ({ news }: any) => {
  return (
    <div className="rounded-lg border p-4 shadow-sm">

      <img
        src={news.image}
        alt={news.title}
        className="h-48 w-full rounded-md object-cover"
      />

      <h2 className="mt-4 text-xl font-bold">
        {news.title}
      </h2>

      <p className="mt-2 text-muted-foreground">
        {news.description}
      </p>

      <Link
        href={`/news/${news.id}`}
        className="mt-4 inline-block text-blue-600"
      >
        Read More →
      </Link>
    </div>
  );
};

export default NewsCard;