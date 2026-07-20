"use client";

import { useState } from "react";

export default function DislikeButton({
  dislikes,
}: {
  dislikes: number;
}) {
  const [count, setCount] = useState(dislikes);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="rounded bg-red-500 px-4 py-2 text-white"
    >
      👎 Dislike ({count})
    </button>
  );
}