// imports
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Newsletter from "@/app/models/newsletter";
import { emailHandler } from "../handlers/emailHandler";

// look for the email in the db
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
      try {
        await Promise.all([
          emailHandler(email),
          Newsletter.create({ email, buyer: false, subscribed: true }),
        ]);
        console.log("Everything was successfull");
        return NextResponse.json("Everything was successfull");
      } catch (err) {
        console.log("err mailgun", err);
        return NextResponse.json(
          "An error occured while trying to send your chapter",
          { status: 400 },
        );
      }
    }
    return NextResponse.json("Email already used", { status: 400 });
  } catch (err) {
    console.log(err.errors.email.message);
    return NextResponse.json(err.errors.email.message, { status: 400 });
  }
}
