// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";
// define type response
type Message = {
  id?: ObjectId;
  email: string;
  name: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage: Message = {
      email,
      name,
      message,
    };
    try {
      const client: MongoClient = await MongoClient.connect(
        "mongodb+srv://sonhip:HwDvZtdupvzPe6TM@cluster0.xpyscee.mongodb.net/my-blog"
      );
      const db = client.db();
      try {
        const result = db.collection("contact-messages").insertOne(newMessage);
        newMessage.id = (await result).insertedId;
      } catch (error) {
        client.close();
        res.status(500).json({ message: "storing message failed!" });
        return;
      }

      client.close();

      res.status(201).json({
        message: "Successfully stored message!",
        messages: newMessage,
      });
    } catch (error) {
      res.status(500).json({ message: "could't connect to mongo!" });
    }
  }
}
