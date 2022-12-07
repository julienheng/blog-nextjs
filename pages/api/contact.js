import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // validation
    if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect("mongodb+srv://juliennextjs:Julien8chan@nextjs.2vrp6o2.mongodb.net/blog-nextjs?retryWrites=true&w=majority");
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Successfully stored message!", message: newMessage });
  }
}
