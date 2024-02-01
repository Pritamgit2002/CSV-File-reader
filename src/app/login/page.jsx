"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

const login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not Signed In</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

};

export default login;
