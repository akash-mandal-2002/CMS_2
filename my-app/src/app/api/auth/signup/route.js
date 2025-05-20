import User from "@/models/user";
import dbConnect from "../../../../lib/mongodb";
import bcrypt from "bcrypt";
// import { sendWelcomeEmail } from "@/lib/mailer";

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return new Response(JSON.stringify({ message: "Missing fields" }), {
      status: 400,
    });
  }

  try {
    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    // await sendWelcomeEmail(email , name)

    return new Response(JSON.stringify({ message: "User created" }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
