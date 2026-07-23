"use server"

import { cookies } from "next/headers";


type LoginState = {
  success: boolean;
  message: string;
  statusCode?: number;
  data?: {
    accessToken:string;
    refreshToken:string;
  };
}


export const loginAction = async(
  prevState:LoginState,
  formData:FormData
)=>{

  const email=formData.get("email");
  const password=formData.get("password");


  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/v1/auth/login`,
    {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    }
  )


  const result = await res.json()


  if(result.success){

    const cookieStore = await cookies()


    cookieStore.set(
      "accessToken",
      result.data.accessToken,
      {
        httpOnly:true,
        maxAge:60*60*24,
        sameSite:"lax",
        path:"/"
      }
    )


    cookieStore.set(
      "refreshToken",
      result.data.refreshToken,
      {
        httpOnly:true,
        maxAge:60*60*24*7,
        sameSite:"lax",
        path:"/"
      }
    )

  }


  return result

}