"use client";

import { Button } from "@/components/ui/button";

const SubscribeButton = () => {

  console.log("Subscribe component rendered");


  const handleSubscribe = () => {
    console.log("🔥 BUTTON CLICKED");
  };


  return (
    <Button 
      onClick={handleSubscribe}
    >
      Subscribe Now ⭐
    </Button>
  );
};


export default SubscribeButton;