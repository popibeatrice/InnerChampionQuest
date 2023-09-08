// imports
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Newsletter from "@/app/models/newsletter";
import client from "../handlers/emailHandler";

// look for the email in the db
async function isEmailInDatabase(email) {
  try {
    const existingSubscriber = await Newsletter.findOne({ email });
    return !!existingSubscriber;
  } catch (error) {
    throw new Error(error);
  }
}

async function emailHandler(email) {
  const messageData = {
    to: email,
    from: "InnerChampionQuest <no-reply@InnerChampionQuest.io>",
    subject: "Buna dimineata!",
    template: "innerchampionquest",
  };
  try {
    const res = await client.messages.create(
      process.env.MAILGUN_DOMAIN,
      messageData,
    );
  } catch (err) {
    throw new Error(err);
  }
}

export async function POST(req) {
  const { email } = await req.json();

  try {
    await connectDB();
    const verifyExistence = await isEmailInDatabase(email);
    if (!verifyExistence) {
      try {
        await Newsletter.create({
          email,
          buyer: false,
          subscribed: true,
        });
      } catch (error) {
        return NextResponse.json(error.errors.email.message, { status: 400 });
      }
      try {
        await emailHandler(email);
      } catch (error) {
        return NextResponse.json(
          "An error occured while trying to send your chapter",
          { status: 400 },
        );
      }
      console.log("Everything was successfull");
      return NextResponse.json("Everything was successfull");
    }
    return NextResponse.json("Email already used", { status: 400 });
  } catch (err) {
    console.log(err);
    return NextResponse.json("Something went wrong", { status: 400 });
  }
}
