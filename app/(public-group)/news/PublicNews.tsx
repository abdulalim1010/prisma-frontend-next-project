const PublicNews = ({ news }: any) => {
  console.log(news);

  return (
    <div>
      {news?.map((item: any) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  );
};