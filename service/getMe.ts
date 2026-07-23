"use server"

import { cookies } from "next/headers"


export const getMe = async()=>{

    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value

    console.log("TOKEN:", accessToken)


    if(!accessToken){
        return {
            success:false,
            message:"User not logged in"
        }
    }


    const url = `${process.env.BACKEND_API_URL}/api/v1/users/me`

    console.log("FETCH URL:", url)


    const res = await fetch(
        url,
        {
            headers:{
                Authorization:`Bearer ${accessToken}`
            },
            cache:"no-store"
        }
    )


    console.log("STATUS:", res.status)


    const result = await res.json()


    console.log("ME RESPONSE:", result)


    return result
}