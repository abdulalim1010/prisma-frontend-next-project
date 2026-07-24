"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginAction } from "../_actions/authAction";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export const LoginForm = () => {


  const toastShown = useRef(false); // ✅ এখানে থাকবে


  const [state, action, pending] = useActionState(loginAction, {
    success: false,
    message: "",
  });


  const router = useRouter();


  useEffect(()=>{

    if(!state || toastShown.current) return;


    if(state.success){

      toastShown.current = true;

      toast.success(
        state.message || "Login successful"
      );

      router.replace("/dashboard");

    }
    else if(state.message){

      toastShown.current = true;

      toast.error(
        state.message === "Invalid credentials"
        ? "Email or Password is incorrect"
        : state.message
      );

    }


  },[state, router]);



  return (
    <form action={action} className="space-y-4">

      <Card className="p-4 space-y-4">

        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />


        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        />


        <Button 
          type="submit" 
          className="w-full"
          disabled={pending}
        >
          {
            pending 
            ? "Submitting..."
            : "Login"
          }

        </Button>


      </Card>

    </form>
  );
};


export default LoginForm;