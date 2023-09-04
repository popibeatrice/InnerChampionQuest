import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Newsletter from "@/app/models/newsletter";

async function isEmailInDatabase(email) {
  try {
    const existingSubscriber = await Newsletter.findOne({ email });
    return !!existingSubscriber;
  } catch (error) {
    throw new Error(error);
  }
}

export async function POST(req) {
  const { email } = await req.json();

  try {
    await connectDB();
    const verifyExistence = await isEmailInDatabase(email);
    if (!verifyExistence) {
      await Newsletter.create({ email, buyer: false, subscribed: true });
      return NextResponse.json("Everything was successfull");
    }
    return NextResponse.json("Email already used", { status: 400 });
  } catch (err) {
    console.log(err.errors.email.message);
    return NextResponse.json(err.errors.email.message, { status: 400 });
  }
}
