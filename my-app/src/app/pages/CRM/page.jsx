"use client";

import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { SlGraph } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const page = () => {
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

  const [percent] = useState(60);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className=" ">
      <div className="py-8">
        <div className="flex items-center justify-between">
          <p className="text-xl text-left font-medium text-neutral-700 px-4">
            This Week Overview
          </p>
          <div className="flex items-center space-x-4">
             <p className="font-semibold text-neutral-700">Short By</p>
             <p className="text-gray-400">Current Week</p>
          </div>
        </div>
        <div className="my-12 flex items-center justify-around">
          <div className="bg-white shadow-2xl rounded-lg border border-gray-200 w-[30%] p-2">
            <h2 className="text-3xl font-semibold text-neutral-700 pb-6">
              197
            </h2>
            <p className="text-gray-500">Client Added</p>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2 my-3">
                <div className="bg-green-500 text-white p-1 text-sm rounded-sm font-semibold w-[40%] flex items-center">
                  <span>
                    <SlGraph />
                  </span>
                  <p className="">+25%</p>
                </div>
                <p className="text-gray-400 text-xs font-bold">
                  Since last week
                </p>
              </div>
              <div>
                <svg
                  className="h-[70px] w-[70px] -rotate-90 transform"
                  viewBox="0 0 70 70"
                >
                  <circle
                    className="text-blue-100"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="35"
                    cy="35"
                  />
                  <circle
                    className="text-blue-400"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="35"
                    cy="35"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-lg border border-gray-200 w-[30%] p-2">
            <h2 className="text-3xl font-semibold text-neutral-700 pb-6">
              745
            </h2>
            <p className="text-gray-500">Contract Signed</p>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2 my-3">
                <div className="bg-red-500 text-white p-1 text-sm rounded-sm font-semibold w-[40%] flex items-center">
                  <span>
                    <SlGraph />
                  </span>
                  <p className="">+25%</p>
                </div>
                <p className="text-gray-400 text-xs font-bold">
                  Since last week
                </p>
              </div>
              <div>
                <svg
                  className="h-[70px] w-[70px] -rotate-90 transform"
                  viewBox="0 0 70 70"
                >
                  <circle
                    className="text-blue-100"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="35"
                    cy="35"
                  />
                  <circle
                    className="text-blue-400"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="35"
                    cy="35"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-lg border border-gray-200 w-[30%] p-2">
            <h2 className="text-3xl font-semibold text-neutral-700 pb-6">
              512
            </h2>
            <p className="text-gray-500">Invoice Sent</p>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2 my-3">
                <div className="bg-green-500 text-white p-1 text-sm rounded-sm font-semibold w-[40%] flex items-center">
                  <span>
                    <SlGraph />
                  </span>
                  <p className="">+25%</p>
                </div>
                <p className="text-gray-400 text-xs font-bold">
                  Since last week
                </p>
              </div>
              <div>
                <svg
                  className="h-[70px] w-[70px] -rotate-90 transform"
                  viewBox="0 0 70 70"
                >
                  <circle
                    className="text-blue-100"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="35"
                    cy="35"
                  />
                  <circle
                    className="text-blue-400"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="35"
                    cy="35"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-[95%] mx-auto shadow-2xl rounded-xl">
          <div className="flex items-center justify-between p-3">
            <h1 className="text-2xl font-semibold text-gray-700">
              Lead Report
            </h1>
            <span className="text-4xl text-gray-500">
              <HiOutlineDotsHorizontal />
            </span>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-400 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://v1-demo.tailadmin.com/src/images/user/user-17.png"
                        alt="user_profile"
                        className="w-12"
                      />
                      <p>Charlie Donin</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    john@example.com
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    25 Dec 2024 - 28 Dec 2024
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    3 Days
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    <span className="inline-block px-2 py-1 text-xs text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-2xl">
                    <button className="text-gray-500 hover:underline">
                      <span>
                        <RiDeleteBinLine />
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://v1-demo.tailadmin.com/src/images/user/user-18.png"
                        alt="user_profile"
                        className="w-12"
                      />
                      <p>Makenna Carder</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    ltorres@aol.com
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    25 Dec 2024 - 28 Dec 2024
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    3 Days
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    <span className="inline-block px-2 py-1 text-xs text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100">
                      Closed
                    </span>
                  </td>
                  <td className="px-6 py-4 text-2xl">
                    <button className="text-gray-500 hover:underline">
                      <span>
                        <RiDeleteBinLine />
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://v1-demo.tailadmin.com/src/images/user/user-19.png"
                        alt="user_profile"
                        className="w-12"
                      />
                      <p>Talan Dokidis</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    rtaylor@aol.com
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    25 Dec 2024 - 28 Dec 2024
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    3 Days
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    <span className="inline-block px-2 py-1 text-xs text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-2xl">
                    <button className="text-gray-500 hover:underline">
                      <span>
                        <RiDeleteBinLine />
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://v1-demo.tailadmin.com/src/images/user/user-20.png"
                        alt="user_profile"
                        className="w-12"
                      />
                      <p>Cheyenne Levin</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    ebrown@aol.com
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    25 Dec 2024 - 28 Dec 2024
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    3 Days
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    <span className="inline-block px-2 py-1 text-xs text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-2xl">
                    <button className="text-gray-500 hover:underline">
                      <span>
                        <RiDeleteBinLine />
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://v1-demo.tailadmin.com/src/images/user/user-21.png"
                        alt="user_profile"
                        className="w-12"
                      />
                      <p>James Aminoff</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    slee@aol.com
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    25 Dec 2024 - 28 Dec 2024
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    3 Days
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold text-gray-600">
                    <span className="inline-block px-2 py-1 text-xs text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100">
                      Closed
                    </span>
                  </td>
                  <td className="px-6 py-4 text-2xl">
                    <button className="text-gray-500 hover:underline">
                      <span>
                        <RiDeleteBinLine />
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
