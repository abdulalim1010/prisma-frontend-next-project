const API = process.env.BACKEND_API_URL;

export const getPublicNews = async () => {
  const res = await fetch(`${API}/api/v1/news/public`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};