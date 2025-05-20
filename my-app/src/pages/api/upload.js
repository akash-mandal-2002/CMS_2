import { createRouter } from "next-connect";
import multer from "multer";
import cloudinary from "../../lib/cloudnary";
import dbConnect from "@/lib/mongodb";
import Image from "../../models/image"; 

const upload = multer({ storage: multer.memoryStorage() });

const apiRoute = createRouter({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("image"));

apiRoute.post(async (req, res) => {
  await dbConnect();

  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "uploads" },
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );
      stream.end(req.file.buffer);
    });
  };

  const result = await streamUpload(req);

  const newImage = await Image.create({
    imageUrl: result.secure_url,
  });

  res.status(200).json({ imageUrl: result.secure_url });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  return apiRoute.run(req, res);
}
