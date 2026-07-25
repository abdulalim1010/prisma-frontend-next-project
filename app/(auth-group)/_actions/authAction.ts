"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken"

export const loginAction = async (
  prevState: LoginState,
  formData: FormData
) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/v1/auth/login`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      path: "/",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
      path: "/",
    });


const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload | null;

if (!decodedToken) {
  return {
    success: false,
    message: "Invalid token",
  };
}

switch (decodedToken.role) {
  case "LANDLORD":
    redirect("/dashboard");

  case "TENANT":
    redirect("/tanten-dashboard");

  case "ADMIN":
    redirect("/admin-dashboard");

  default:
    redirect("/");
}
  }
  return result;
};


type RegisterState = {
  success: boolean;
  message: string;
};



export const registerAction = async (
  prevState: RegisterState,
  formData: FormData
) => {


  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");



  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/v1/auth/register`,
    {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password,
        role
      })
    }
  );


  const result = await res.json();


  return result;

};