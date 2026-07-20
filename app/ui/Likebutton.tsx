"use client";

export default function LikeButton() {
  return (
    <button
      onClick={() => {
        console.log("Button clicked");
      }}
    >
      Hello
    </button>
  );
}