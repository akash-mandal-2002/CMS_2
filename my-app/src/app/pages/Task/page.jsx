"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import { IoAddOutline } from "react-icons/io5";
import "../../../style/task.css";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";
const page = () => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState([]);
  const taskSubmit = async (e) => {
    const taskData = { title, description };
    e.preventDefault();
    const res = await fetch("/api/Task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    const data = await res.json();
    if (data.success) {
      toast.success("Task addded");
      setTitle("");
      setDescription("");
      setOpenModal(true);
       setAllTask((prevTasks) => [...prevTasks, data.task]);
    } else {
      toast.error("Please fill form");
    }
  };

  useEffect(() => {
    const allTasks = async () => {
      const res = await fetch("/api/GetTask");
      const data = await res.json();
      setAllTask(data.tasks);
    };
    allTasks();
  }, []);

const deleteTask = async (id) => {
  try {
    const res = await fetch(`/api/deleTask/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Task Deleted")
      setAllTask((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } else {
      toast.error(data.message || "Failed to delete");
    }
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};


  return (
    <div className="">
      <Navbar />
      <div className="flex justify-between px-12 mt-20">
        <p className="text-2xl font-semibold text-neutral-700">Task List</p>
        <p className="text-xl font-medium text-gray-500">Dashboard / List</p>
      </div>
      <div className="bg-white p-4 flex justify-between my-8 m-8">
        <h1 className="text-3xl font-semibold text-neutral-700">Tasks</h1>
        <Button
          onClick={() => setOpenModal(true)}
          className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md space-x-4 hover:cursor-pointer p-3 px-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          <span className="text-2xl">
            <IoAddOutline />
          </span>
          Add Task
        </Button>
      </div>
      <div className="">
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          className="rounded-lg"
        >
          <ModalHeader className="bg-blue-50"></ModalHeader>
          <ModalBody className="bg-blue-50">
            <form action="#" onSubmit={taskSubmit}>
              <div className="flex flex-col text-xl space-y-2 mb-12">
                <label htmlFor="task_title text-md font-medium">
                  Task title
                </label>
                <input
                  type="text"
                  placeholder="Enter your title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-white p-3 w-[30vw] outline-0 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col text-xl space-y-2 my-12">
                <label htmlFor="task_title text-md font-medium">
                  Task Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="bg-white p-3 w-[30vw] outline-0 border border-gray-300 rounded-lg"
                  placeholder="Enter task description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                />
              </div>
              <div className="flex items-center justify-center space-x-4 w-[30vw] bg-blue-500 text-xl  text-white font-medium p-2.5 px-4 hover:cursor-pointer rounded-md hover:bg-blue-600 mt-8">
                <span className="text-2xl">
                  <IoAddOutline />
                </span>
                <button type="submit" className="hover:cursor-pointer">
                  Add Task
                </button>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold text-neutral-700 px-12 py-6">
          To do's
        </h1>
        {allTask.map((task, index) => (
          <div
            className="bg-white shadow-xl mx-auto my-12 px-8 py-4 rounded-lg  space-y-6 w-[80%]"
            key={index}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-neutral-700">
                {task.title}
              </h1>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span className="text-5xl text-gray-500 hover:cursor-pointer">
                    <HiOutlineDotsHorizontal />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-6 p-4">
                  <DropdownMenuItem className=" flex items-center space-x-6 font-semibold  p-2 hover:cursor-pointer">
                    <p className="text-neutral-700 text-xl">Edit</p>
                    <span className="text-neutral-500 text-4xl">
                      <FaRegEdit />
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-6 font-semibold  p-2 hover:cursor-pointer" onClick={() => deleteTask(task._id)}>
                    <p className="text-neutral-700 text-xl">Delete</p>
                    <span className="text-neutral-500 text-4xl">
                      <FaRegTrashCan />
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-xl text-neutral-600 text-left font-semibold mt-10">
              {task.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
