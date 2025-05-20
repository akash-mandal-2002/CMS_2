import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import addTask from "@/models/addTask";

export async function DELETE(request, { params }) {
  try {
    await dbConnect();

    const { id } = params;

    const deletedTask = await addTask.findByIdAndDelete(id);

    if (!deletedTask) {
      return NextResponse.json(
        { success: false, message: "Task not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Task deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
