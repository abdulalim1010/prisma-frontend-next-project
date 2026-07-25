import Link from "next/link";

export default function NotFound(){

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold">
        404
      </h1>

      <p className="mt-3 text-muted-foreground">
        Page not found
      </p>


      <Link
        href="/"
        className="mt-5 rounded bg-primary px-5 py-2 text-white"
      >
        Go Home
      </Link>

    </div>
  );
}