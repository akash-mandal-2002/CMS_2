import dbConnect from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await dbConnect();
  const db = client.connection.db;

  const images = await db.collection("images")
    .find()
    .sort({ _id: -1 }) // newest first
    .limit(1) // only latest image
    .toArray();

  res.status(200).json(images);
}
