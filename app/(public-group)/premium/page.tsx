import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PremiumPage() {
  return (
    <div className="container mx-auto py-16">

      <h1 className="text-5xl font-bold text-center">
        Upgrade to Premium
      </h1>

      <p className="text-center text-muted-foreground mt-4">
        Unlock exclusive premium news and features.
      </p>

      <div className="max-w-md mx-auto mt-12 rounded-xl border p-8 shadow">

        <h2 className="text-3xl font-bold">
          Premium Plan
        </h2>

        <p className="text-5xl font-bold mt-6">
          $5
          <span className="text-lg font-normal">
            /month
          </span>
        </p>

        <ul className="space-y-3 mt-8">
          <li>✅ Unlimited Premium News</li>
          <li>✅ Early Property Updates</li>
          <li>✅ Premium Badge</li>
          <li>✅ Future Premium Features</li>
        </ul>

        <Button
          asChild
          className="w-full mt-8"
        >
          <Link href="/payment">
            Continue
          </Link>
        </Button>

      </div>

    </div>
  );
}