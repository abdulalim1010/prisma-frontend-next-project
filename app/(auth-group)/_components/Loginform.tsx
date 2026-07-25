"use client";

import { useActionState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { loginAction } from "../_actions/authAction";

import { toast } from "sonner";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, {
    success: false,
    message: "",
  });

  useEffect(() => {
    // শুধু error toast দেখাবে
    if (!state.success && state.message) {
      toast.error(
        state.message === "Invalid credentials"
          ? "Email or Password is incorrect"
          : state.message
      );
    }
  }, [state]);

  return (
    <form action={action} className="space-y-4">
      <Card className="space-y-4 p-4">
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
          {pending ? "Submitting..." : "Login"}
        </Button>
      </Card>
    </form>
  );
}