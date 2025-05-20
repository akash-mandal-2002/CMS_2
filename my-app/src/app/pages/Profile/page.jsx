"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/ImageUpload";
import Navbar from "@/components/Navbar";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const page = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/User/Login");
    } else {
      const decoded = jwt.decode(token);
      setUser(decoded);
    }
  }, []);

  return (
    <div className="">
      <Navbar/>
      <div className="my-12 space-y-12 w-[90%] mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-neutral-700">Profile</h1>
          <Link href="/">
            <p className="text-lg font-semibold text-gray-400">Dashboard </p>
          </Link>
        </div>
        <div className="bg-white shadow-2xl h-[55rem] rounded-xl">
          <img
            src="https://v1-demo.tailadmin.com/src/images/cover/cover-01.png"
            alt="profile_pic"
            className="rounded-xl"
          />
          <div className="flex items-center justify-center flex-col space-y-3 relative">
            <ImageUpload />
            <div className="mt-32">
              {user && (
                <p className="text-2xl text-center font-semibold  text-neutral-700">
                  {user.name}
                </p>
              )}
              <p className=" text-gray-600 font-semibold">
                Front end Developer
              </p>
            </div>
            <div className="flex items-center p-2 w-[30%] border border-gray-300 justify-around rounded-md">
              <div className="flex items-center space-x-1 border-r p-1">
                <p className="font-semibold text-neutral-800">259</p>
                <p className="font-semibold text-gray-400">Posts</p>
              </div>
              <div className="flex items-center space-x-1 border-r p-1">
                <p className="font-semibold text-neutral-800">129K</p>
                <p className="font-semibold text-gray-400">Followers</p>
              </div>
              <div className="flex items-center space-x-1 border-r p-1">
                <p className="font-semibold text-neutral-800">2K</p>
                <p className="font-semibold text-gray-400">Following</p>
              </div>
            </div>
            <div className=" space-y-6">
              <h1 className="text-center mt-12 text-xl font-semibold text-neutral-700">About Me</h1>
              <p className="text-center text-md font-normal text-neutral-700 px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.</p>
            </div>
            <div className="my-6 space-y-8">
              <p className="text-xl text-gray-600 text-center">Follow me on</p>
              <div className="flex items-center space-x-12 text-2xl text-gray-600">
                <span><FaFacebook/></span>
                <span><FaTwitter/></span>
                <span><FaInstagram/></span>
                <span><FaGithub/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
