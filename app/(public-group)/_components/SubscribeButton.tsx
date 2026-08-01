"use client";

import { Button } from "@/components/ui/button";

export default function SubscribeButton(){

const handleSubscribe = async()=>{

const res = await fetch(
"http://localhost:5000/api/v1/payment/create-checkout-session",
{
method:"POST",
credentials:"include",
}
);


const data = await res.json();

console.log(data);


if(res.ok){

 window.location.href = data.url;

}


};


return(
<Button onClick={handleSubscribe}>
 Subscribe
</Button>
)

}