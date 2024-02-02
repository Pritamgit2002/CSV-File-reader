import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { IoLogoDiscord } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className=" sm:hidden h-screen w-full bg-gray-200  flex flex-wrap items-stretch justify-center ">
        <div className="w-full bg-[#605BFF] h-16 p-2 text-3xl text-gray-200 font-bold flex items-center justify-start gap-3">
          <Link href="/" >
            <Image
              src="/Images/logo.png"
              alt="logo"
              width={2000}
              height={2000}
              className="rounded-full object-contain w-10 h-10 "
            />
          </Link>
          Base
        </div>
        <div>
          <SignIn />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 text-4xl ">
          <Link href="/" className=" scale-110 duration-300 ease-out " >
            <RiGithubFill />
          </Link>
          <Link href="/" className=" scale-110 duration-300 ease-out " >
            <FaTwitterSquare />
          </Link>
          <Link href="/" className=" scale-110 duration-300 ease-out " >
            <FaLinkedin />
          </Link>
          <Link href="/" className=" scale-110 duration-300 ease-out " >
            <IoLogoDiscord />
          </Link>
        </div>
      </div>

      <div className="hidden sm:inline-block w-full ">
        <div className="w-full h-screen flex items-center justify-between ">
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%" }}
            className="w-[900px] h-screen flex flex-col items-center justify-between bg-[#605BFF] py-14 "
          >
            <div className="w-full ml-10 ">
              <Image
                src="/Images/logo.png"
                alt="logo"
                width={2000}
                height={2000}
                className="rounded-full object-contain w-16 h-16 "
              />
            </div>

            <span className=" text-5xl xl:text-6xl font-bold text-gray-200">
              BASE
            </span>
            <div className="flex flex-wrap items-center justify-center gap-12 text-3xl ">
              <Link href="/" className=" scale-110 duration-300 ease-out " >
                <RiGithubFill />
              </Link>
              <Link href="/" className=" scale-110 duration-300 ease-out " >
                <FaTwitterSquare />
              </Link>
              <Link href="/" className=" scale-110 duration-300 ease-out " >
                <FaLinkedin />
              </Link>
              <Link href="/" className=" scale-110 duration-300 ease-out " >
                <IoLogoDiscord />
              </Link>
            </div>
          </div>
          <div className=" w-full h-full flex items-center justify-center ">
            <SignIn />
          </div>
        </div>
      </div>
    </>
  );
}
