import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import addTask from "../../../models/addTask";

export async function POST(req) {
  try {
    await dbConnect();  
    const { title, description } = await req.json();

    const createdTask = await addTask.create({ title, description });

    return NextResponse.json(
      { success: true, task: createdTask },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
