"use client";
import SideBar from "@/components/sideBar";
import { Button } from "@/components/ui/button";
import { SessionProvider, signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import GoogleButton from "react-google-button";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" flex flex-row items-start ">
      <SideBar />
      <div className="flex flex-col items-center justify-center mx-auto my-auto gap-10">
        <h1 className="text-5xl font-bold">ERROR 404</h1>
        <p className="font-bold opacity-70 text-xl">PAGE NOT FOUND</p>
        <Link href="/upload">
          <Button>Go to Upload</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
