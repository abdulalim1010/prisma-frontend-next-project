"use client";

import { Button } from "@/components/ui/button";

const SubscribeButton = () => {


  const handleSubscribe = async () => {

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/payment/create-checkout-session`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


      const data = await res.json();


      if(data.success){

        window.location.href = data.data.url;

      }


    } catch(error){

      console.log(error);

    }

  };


  return (
    <Button onClick={handleSubscribe}>
      Subscribe Now ⭐
    </Button>
  );

};


export default SubscribeButton;