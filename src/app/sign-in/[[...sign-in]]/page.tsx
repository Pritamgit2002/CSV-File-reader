import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { IoLogoDiscord } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import Link from "next/link";

export default function Page() {
  return (
    <div
      className="w-full h-screen flex items-center justify-between
     bg-gray-300"
    >
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%" }}
        className="w-[900px] h-screen flex flex-col items-center justify-between bg-[#605BFF] py-14 "
      >
        <div className="w-full ml-10 " >
          <Image
            src="/Images/logo.png"
            alt="logo"
            width={2000}
            height={2000}
            className="rounded-full object-contain w-16 h-16 "
          />
        </div>

        <span className="text-6xl font-bold text-gray-200">BASE</span>
        <div className="flex items-center justify-center gap-12 text-3xl ">
          <Link href="/">
            <RiGithubFill />
          </Link>
          <Link href="/">
            <FaTwitterSquare />
          </Link>
          <Link href="/">
            <FaLinkedin />
          </Link>
          <Link href="/">
            <IoLogoDiscord />
          </Link>
        </div>
      </div>
      <div className=" w-full h-full flex items-center justify-center ">
        <SignIn />
      </div>
    </div>
  );
}
