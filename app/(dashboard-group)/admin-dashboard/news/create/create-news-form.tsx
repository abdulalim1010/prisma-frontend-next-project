"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNewsForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const res = await fetch(
      "http://localhost:5000/api/v1/news",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          content,
          category,
          image,
        }),
      }
    );

    const data = await res.json();

    console.log(data);

    if (res.ok) {
      alert("News created successfully");

      router.push("/admin-dashboard/news");
      router.refresh();
    } else {
      alert(data.message || "Failed to create news");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 max-w-3xl mx-auto"
    >
      <div>
        <label className="block mb-2 font-medium">
          Title
        </label>

        <input
          type="text"
          placeholder="Enter news title"
          className="w-full border rounded-lg p-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          placeholder="Short description"
          className="w-full border rounded-lg p-3"
          rows={4}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Content
        </label>

        <textarea
          placeholder="Full news content"
          className="w-full border rounded-lg p-3"
          rows={8}
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Category
        </label>

        <input
          type="text"
          placeholder="Sports / Politics / Technology"
          className="w-full border rounded-lg p-3"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Image URL (Optional)
        </label>

        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          className="w-full border rounded-lg p-3"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
      >
        Publish News
      </button>
    </form>
  );
}