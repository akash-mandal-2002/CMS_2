"use client";

import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { PiBellSimpleThin } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useAuth } from "@/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const [user, setUser] = useState(null);

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
    <div className="navbar shadow-xl border-b border-gray-300 p-3 flex items-center justify-between sticky top-0 z-50 bg-white">
      <div className="md:flex space-x-2 hidden">
        <span className="text-2xl text-gray-600 mt-5">
          <IoSearchOutline />
        </span>
        <input
          type="text"
          placeholder="Type to Search"
          className="placeholder-gray-400 font-normal  w-[50vw] h-[8vh] outline-0"
        />
      </div>
      <div className="flex items-center md:space-x-6">
        {/* <label className="relative inline-flex items-center cursor-pointer">
          <input className="sr-only peer" type="checkbox" />
          <div className="w-16 h-7 rounded-full bg-gradient-to-r from-gray-400  peer-checked:from-gray-500 peer-checked:to-gray-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-0 after:left-1 after:bg-white after:rounded-full after:h-7 after:w-7 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"></div>
        </label> */}
        <div className="flex items-center mr-24 space-x-2">
          <div className="bg-[#E9E8F5] w-10 p-2 rounded-full hover:cursor-pointer hover:bg-[#cfced9]">
            <span className="text-2xl text-gray-700">
              <PiBellSimpleThin />
            </span>
          </div>
          <div className="bg-[#E9E8F5] w-10 p-2 rounded-full hover:cursor-pointer hover:bg-[#cfced9]">
            <span className="text-2xl text-gray-700">
              <AiOutlineMessage />
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {user && (
            <p className="font-semibold text-neutral-500">{user.name}</p>
          )}
          <div className="bg-[#E9E8F5] px-3 py-2 text-center rounded-full text-3xl w-14 text-slate-400 hover:cursor-pointer hover:bg-[#cfced9]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {user && (
                  <p className="font-semibold text-neutral-500">
                    {user.name.charAt(0).toUpperCase()}
                  </p>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-6 p-4">
                <DropdownMenuItem className="text-md font-semibold text-neutral-500 p-2 hover:cursor-pointer">
                  {isLoggedIn ? (
                    <span
                      className="flex items-center space-x-4 login-btn text-body me-3 pe-3 cursor-pointer"
                      onClick={logout}
                    >
                      <span>Logout</span>
                      <span className="">
                        <TbLogout />
                      </span>
                    </span>
                  ) : (
                    <Link href="/User/Login">
                      <span className="login-btn text-body me-3 pe-3">
                        Login
                      </span>
                    </Link>
                  )}
                </DropdownMenuItem>

                <Link href="/User/Signup">
                  <DropdownMenuItem className="text-md font-semibold text-neutral-500 p-2 hover:cursor-pointer">
                    Sign Up
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
