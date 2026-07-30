import NewsCard from "../news/NewsCard";


const PremiumNews = ({ 
 news = [] 
}: { 
 news?: any[] 
}) => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">
        Premium News
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            news={item}
          />
        ))}
      </div>
    </div>
  );
};

export default PremiumNews;