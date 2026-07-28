import NewsCard from "./NewsCard";


const PublicNews = ({ news }: any) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item: any) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};

export default PublicNews;