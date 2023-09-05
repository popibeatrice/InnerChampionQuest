import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);
const client = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_SECRET_KEY,
});

export async function emailHandler(email) {
  const messageData = {
    to: email,
    from: "InnerChampionQuest <no-reply@InnerChampionQuest.io>",
    subject: "Buna dimineata!",
    text: "Capitol din curs",
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
