"use client";

import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <CartProvider
      mode="payment"
      currency="SEK"
      cartMode="client-only"
      cancelUrl="http://localhost:3000/"
      successUrl="http://localhost:3000/stripe/success"
      billingAddressCollection
      shouldPersist
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY || ""}
    >
      {children}
    </CartProvider>
  );
};

export default Providers;
