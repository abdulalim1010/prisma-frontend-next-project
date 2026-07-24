"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"


export const logout=async()=>{
    const cookieStore=((await cookies()).delete("accessToken"));

revalidateTag("my-profile","max")

}