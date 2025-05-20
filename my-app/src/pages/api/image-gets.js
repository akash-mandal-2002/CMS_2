import dbConnect from "@/lib/mongodb";

export default async function handler(req, res) {
  const db = (await dbConnect()).connection.db;

  const images = await db
    .collection("images")
    .find({})
    .sort({ _id: -1 })
    .limit(1)
    .toArray();

  res.status(200).json(images);
}

