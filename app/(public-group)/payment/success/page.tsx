import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-green-600">
          🎉 Payment Successful
        </h1>

        <p>
          Congratulations! You are now a Premium Member.
        </p>

        <Button asChild>
          <Link href="/premium-news">
            Go to Premium News
          </Link>
        </Button>
      </div>
    </div>
  );
}