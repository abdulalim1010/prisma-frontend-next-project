const API = process.env.BACKEND_API_URL;

export const getPublicNews = async () => {
  const res = await fetch(`${API}/api/v1/news/public`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};
export const getPremiumNews = async () => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/v1/news/premium`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};