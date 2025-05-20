"use client";

import React from "react";
import Dashboard from "./pages/Dashboard/page";
import { useAuth } from "@/AuthContext";
import LoginForm from "./User/Login/page";
export default function Home() {
  const { loading, isLoggedIn } = useAuth();
  if (loading) {
    return (
      <div className="flex flex-row gap-2 mx-auto">
        <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 w-36 h-5 rounded-full"></div>
        </div>
      </div>
    );
  }
  return <>{isLoggedIn ? <Dashboard /> : <LoginForm />}</>;
}
