"use client";
import SideBar from "@/components/sideBar";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { SessionProvider, signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaSmileBeam } from "react-icons/fa";
import { MdOutlineCelebration } from "react-icons/md";

type Props = {};

const page = (props: Props) => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div className=" flex flex-row items-start ">
      <SideBar />

      {isSignedIn ? (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-y-6 ">
          <UserButton afterSignOutUrl="/" />
          <span className="text-4xl font-bold flex items-center justify-center gap-1 ">
            <div className=" text-yellow-400  hidden sm:inline-block">
              <FaSmileBeam />
            </div>
            Welcome, {user?.fullName}
            <div className=" text-pink-400 hidden sm:inline-block">
              <MdOutlineCelebration />
            </div>
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mx-auto mt-20  gap-10">
          <h1 className="text-5xl font-bold">Login To Access</h1>

          <Link href="/upload">
            <Button className="flex items-center justify-center gap-1">
              <FcGoogle />
              Login
              <UserButton afterSignOutUrl="/" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default page;
