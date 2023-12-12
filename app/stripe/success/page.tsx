import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

const StripeSuccessPage = () => {
  return (
    <div className="h-screen">
      <div className="mx-auto mt-32 md:max-w-[50vw]">
        <CheckCheck className="mx-auto my-6 h-16 w-16 text-green-600" />
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Order confirmed
          </h3>
          <p className="my-2 text-gray-600 [text-wrap:balance]">
            Your order has been confirmed. You will receive a order confirmation
            on your email.
          </p>

          <Button className="mt-5">
            <Link href="/">Continue shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StripeSuccessPage;
