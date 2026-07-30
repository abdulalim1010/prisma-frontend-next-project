import { cookies } from "next/headers";

const API = process.env.BACKEND_API_URL;


export const getPublicNews = async () => {

  const res = await fetch(
    `${API}/api/v1/news/public`,
    {
      next:{
        revalidate:60,
      }
    }
  );

  return res.json();
};



export const getPremiumNews = async () => {

  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;


  const res = await fetch(
    `${API}/api/v1/news/premium`,
    {
      headers:{
        Cookie:`accessToken=${token}`,
      },
      cache:"no-store",
    }
  );


  return res.json();

};