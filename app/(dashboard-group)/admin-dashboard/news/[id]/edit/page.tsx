import { getSingleNews } from "@/service/news";
import EditNewsForm from "./edit-news-form";



export default async function EditNewsPage({
 params,
}:{
 params:Promise<{id:string}>
}){


const {id}=await params;


const result = await getSingleNews(id);


return (

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">
Edit News
</h1>


<EditNewsForm
news={result.data}
/>


</div>

)

}