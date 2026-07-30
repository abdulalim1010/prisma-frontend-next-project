import SubscribeButton from "../_components/SubscribeButton";

export default function PaymentPage() {
  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border p-8 shadow-lg text-center">

        <h1 className="text-3xl font-bold">
          Confirm Your Subscription
        </h1>

        <p className="mt-4 text-muted-foreground">
          You will be redirected to Stripe's secure checkout page to complete
          your payment.
        </p>

        <div className="mt-8">
          <SubscribeButton />
        </div>

      </div>
    </div>
  );
}