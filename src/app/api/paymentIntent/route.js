const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 4999,
      currency: "usd",
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    return NextResponse.json(err.message, { status: 400 });
  }
}
