import { getPremiumNews } from "@/service/news";
import PremiumNews from "./PremiumNews";


export default async function PremiumPage() {
  const news = await getPremiumNews();

  return <PremiumNews news={news.data} />;
}