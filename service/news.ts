import { cookies } from "next/headers";


const API = process.env.BACKEND_API_URL;



export const getAllNews = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API}/api/v1/news`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    cache: "no-store",
  });

  return res.json();
};


export const getSingleNews = async (id:string) => {

  const res = await fetch(
    `${API}/api/v1/news/${id}`,
    {
      cache:"no-store",
    }
  );


  return res.json();

};

//search public news
export const getPublicNews = async (
  search = ""
) => {
  const res = await fetch(
    `${API}/api/v1/news/public?search=${encodeURIComponent(search)}`,
    {
      cache: "no-store",
      // অথবা চাইলে আগের revalidate ব্যবহার করতে পারো:
      // next: { revalidate: 60 },
    }
  );

  return res.json();
};



export const getPremiumNews = async (
  search = ""
) => {

const cookieStore = await cookies();

const token = cookieStore.get("accessToken")?.value;


const res = await fetch(
`${API}/api/v1/news/premium?search=${search}`,
{
headers:{
Cookie:`accessToken=${token}`,
},
cache:"no-store",
}
);


return res.json();

};
//premium or not 


