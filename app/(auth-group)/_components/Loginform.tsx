"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginAction } from "../_actions/authAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export const LoginForm = () => {


const [state,action,pending]=useActionState(loginAction,false)

const router=useRouter()
useEffect(()=>{

if (state.success) {
  toast.success(state.message || "Login succesfull");
  router.push("/dashboard")
} else {
  toast.error(
    state.message === "Invalid credentials"
      ? "Email or Password is incorrect"
      : state.message
  );
}
},[state])

  return (
    <form action={action}   className="space-y-4">
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

        <Button type="submit" className="w-full">

{

pending?"submitting........":"Login"

}



          Login
        </Button>
      </Card>
    </form>
  );
};

export default LoginForm;