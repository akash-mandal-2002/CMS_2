"use client"


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
const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="bg-[#202333] h-[100vh]">
      {isLoggedIn && (
        <div className="sideNavbar  p-6">
          <div className="flex text-4xl font-semibold">
            {/* <Link href="/pages/Main"> */}
            <img
              src="https://v1-demo.tailadmin.com/src/images/logo/logo.svg"
              alt=""
            />
            {/* </Link> */}
          </div>
          <div className="my-12">
            <p className="text-xl text-gray-600 font-semibold">Menu</p>
            <div className="">
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <GrAppsRounded />
                </span>
                <Link href="/"><p>Dashboard</p></Link>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <SlCalender />
                </span>
                <p>Calender</p>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <IoMdPerson />
                </span>
                <Link href="/pages/Profile"><p>Profile</p></Link>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <BsListTask />
                </span>
               <Link href="/pages/Task"> <p>Task</p></Link>
              </div>
            </div>
            <p className="text-xl text-gray-600 font-semibold">Support</p>
            <div className="">
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <FaRegEnvelope />
                </span>
                <p>Messages</p>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <CiInboxIn />
                </span>
                <p>Inbox</p>
              </div>
              <div className="flex items-center space-x-8 text-xl text-gray-400 my-6 hover:bg-[#333A48] hover:cursor-pointer p-2 rounded-md">
                <span className="">
                  <RiPagesLine />
                </span>
                <p>Pages</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
