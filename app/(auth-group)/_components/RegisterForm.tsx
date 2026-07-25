"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { registerAction } from "../_actions/authAction";




const initialState = {
  success: false,
  message: "",
};


export const RegisterForm = () => {


  const [state, action, pending] = useActionState(
    registerAction,
    initialState
  );


  const router = useRouter();



  useEffect(()=>{


    if(!state.message) return;


    if(state.success){

      toast.success(
        state.message || "Registration successful"
      );


      router.push("/login");

    }
    else{

      toast.error(
        state.message || "Registration failed"
      );

    }


  },[state, router]);




  return (

    <form action={action} className="space-y-4">


      <Card className="p-5 space-y-4">


        <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />



        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />



        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />



        <select
          name="role"
          required
          className="h-10 rounded-md border px-3"
        >

          <option value="">
            Select Role
          </option>


          <option value="TENANT">
            Tenant
          </option>


          <option value="LANDLORD">
            Landlord
          </option>


        </select>




        <Button
          type="submit"
          className="w-full"
          disabled={pending}
        >

          {
            pending
            ? "Creating account..."
            : "Register"
          }


        </Button>


      </Card>


    </form>

  );
};


export default RegisterForm;