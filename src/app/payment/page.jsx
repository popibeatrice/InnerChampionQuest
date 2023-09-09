"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/paymentIntent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "night",
    variables: {
      colorPrimary: "#009EE1",
      colorBackground: "#27272a",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App flex min-h-screen flex-col items-center justify-start gap-14 py-14   lg:gap-20 lg:py-20">
      <h1 className="font-heydex text-4xl xxs:text-5xl sm:text-6xl lg:text-7xl">
        The <span className="text-accentBlue">big</span> step
      </h1>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
}
