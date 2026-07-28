
import Link from "next/link";

const NewsCard = ({ news }: { news: any }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow">
    <img
  src={news.image}
  alt={news.title}
  className="w-full h-52 object-cover"
/>

      <div className="p-5">
        <h2 className="font-bold text-xl">
          {news.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {news.description}
        </p>

        <Link
          href={`/news/${news.id}`}
          className="text-blue-600 mt-3 inline-block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;