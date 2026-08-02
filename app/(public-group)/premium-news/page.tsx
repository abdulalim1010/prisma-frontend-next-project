
import { getPremiumNews } from "@/service/news";
import PremiumNews from "../premium/PremiumNews";
import SearchBar from "../_components/SearchBar";


export default async function PremiumNewsPage(){

  const result = await getPremiumNews();

  console.log("PREMIUM RESULT:", result);


  return (
    
   <>
   
   <h1><SearchBar/></h1>
   
    <PremiumNews 
      news={result.data}
    />
   </>
  );
}