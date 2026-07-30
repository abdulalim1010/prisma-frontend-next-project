
import { getPremiumNews } from "@/service/news";
import PremiumNews from "../premium/PremiumNews";


export default async function PremiumNewsPage(){

  const result = await getPremiumNews();

  console.log("PREMIUM RESULT:", result);


  return (
    <PremiumNews 
      news={result.data}
    />
  );
}