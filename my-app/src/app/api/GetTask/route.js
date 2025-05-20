import { NextResponse } from "next/server";
import mongoose from "mongoose";
import AddTask from "@/models/addTask";

const MONGODB_URI = process.env.MONGODB_URI;

export async function GET() {
  try {
    if (!MONGODB_URI) throw new Error("MongoDB URI not found");

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    const tasks = await AddTask.find();
    return NextResponse.json({ success: true, tasks }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
