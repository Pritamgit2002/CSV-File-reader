"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {};

const Authprovider = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Authprovider;
