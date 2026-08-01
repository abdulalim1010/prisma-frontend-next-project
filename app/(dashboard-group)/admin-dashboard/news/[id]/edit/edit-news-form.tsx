"use client";

import { useState } from "react";


export default function EditNewsForm({
  news
}:{
  news:any
}){


const [title,setTitle]=useState(news.title);



const handleUpdate=async(
 e:React.FormEvent
)=>{

 e.preventDefault();


const res = await fetch(
`http://localhost:5000/api/v1/news/${news.id}`,
{
 method:"PATCH",

 credentials:"include",

 headers:{
  "Content-Type":"application/json",
 },

 body:JSON.stringify({
  title
 })
}
);


 const data = await res.json();


 console.log(data);


};



return (

<form 
onSubmit={handleUpdate}
className="space-y-5"
>


<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="border p-3 w-full rounded"

/>



<button

type="submit"

className="bg-black text-white px-5 py-2 rounded"

>

Update News

</button>


</form>

);

}