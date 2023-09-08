import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Newsletter from "@/app/models/newsletter";
import client from "../handlers/emailHandler";

export async function POST(req) {
  try {
    const { username, password, content } = await req.json();
    await connectDB();
    if (!username || !password)
      return NextResponse.json("username sau porola neintroduse", {
        status: 400,
      });
    if (username !== process.env.username || password !== process.env.password)
      return NextResponse.json("username sau porola gresite", {
        status: 400,
      });
    if (!content)
      return NextResponse.json("parca voiai sa trimiti ceva", {
        status: 400,
      });

    let emailList;
    //   Query trough db
    try {
      const people = await Newsletter.find({
        subscribed: true,
        buyer: false,
      });
      if (people.lenght === 0)
        return NextResponse.json(
          "Ori toti au cumparat ori nu i pasa nimanui de newsletter",
        );
      console.log(people);
      emailList = people.map((person) => person.email);
      console.log(emailList);
    } catch (err) {
      console.log(err);
      return NextResponse.json("cannot query", { status: 400 });
    }
    //   send emails in sync
    const messageData = {
      from: "InnerChampionQuest <no-reply@InnerChampionQuest.com>",
      to: emailList,
      subject: "Buna dimineata, soare!",
      text: content,
    };
    try {
      await client.messages.create(process.env.MAILGUN_DOMAIN, messageData);
    } catch (err) {
      console.log(err);
      return NextResponse.json("eroare mailgun", { status: 400 });
    }
    console.log("Everything was successfull");
    return NextResponse.json("Everything was successfull");
  } catch (err) {
    console.log(err);
    return NextResponse.json("Something went wrong", { status: 400 });
  }
}
