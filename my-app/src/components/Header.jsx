"use client";

import React from "react";
import { GrAppsRounded } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { BsListTask } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { CiInboxIn } from "react-icons/ci";
import { useAuth } from "@/AuthContext";
import Link from "next/link";
import Tail_Admin_logo from "../../public/img/Tail_admin_logo.png";
import "../style/header.css";
import Image from "next/image";
import { BsBarChartFill } from "react-icons/bs";
const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="bg-[#202333] h-[100vh]">
      {isLoggedIn && (
        <div className="sideNavbar  p-6">
          <div className="flex font-semibold items-center space-x-4">
              <div className="bg-blue-600 rounded-lg p-2.5">
                <span className="text-gray-300 text-md md:text-xl font-bold"><BsBarChartFill/></span>
              </div>
              <p className="text-white hidden md:flex md:text-4xl">TailAdmin</p>
          </div>
          <div className="my-12">
            <p className="md:text-xl text-sm text-gray-600 font-semibold">
              Menu
            </p>
            <div className="space-y-12 md:space-y-0">
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <GrAppsRounded />
                </span>
                <Link href="/">
                  <p className="hidden md:flex">Dashboard</p>
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <SlCalender />
                </span>
                <p className="hidden md:flex">Calender</p>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <IoMdPerson />
                </span>
                <Link href="/pages/Profile">
                  <p className="hidden md:flex">Profile</p>
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <BsListTask />
                </span>
                <Link href="/pages/Task">
                  {" "}
                  <p className="hidden md:flex">Task</p>
                </Link>
              </div>
            </div>
            <p className="text-sm md:text-xl text-gray-600 font-semibold">
              Support
            </p>
            <div className="">
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <FaRegEnvelope />
                </span>
                <p className="hidden md:flex">Messages</p>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <CiInboxIn />
                </span>
                <p className="hidden md:flex">Inbox</p>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <RiPagesLine />
                </span>
                <p className="hidden md:flex">Pages</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
