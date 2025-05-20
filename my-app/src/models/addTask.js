import mongoose from "mongoose";

const addTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AddTask = mongoose.models.AddTask || mongoose.model("AddTask", addTaskSchema);

export default AddTask;
