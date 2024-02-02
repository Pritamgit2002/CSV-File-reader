import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  {
    navs: "Dashboard",
    href: "../pages//Dashboard.tsx",
    icon: "",
  },
  {
    navs: "Upload",
    href: "/upload",
    icon: "",
  },
  {
    navs: "Invoice",
    href: "/invoice",
    icon: "",
  },
  {
    navs: "Schedule",
    href: "/schedule",
    icon: "",
  },
  {
    navs: "Calendar",
    href: "/calendar",
    icon: "",
  },
  {
    navs: "Notification",
    href: "/notification",
    icon: "",
  },
  {
    navs: "Settings",
    href: "/settings",
    icon: "",
  },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  const activePath = usePathname();
  return (
    <>
      <div className="relative">
        {/* Mobile Sidebar */}
        <div className="block lg:hidden">
          {/* Toggle button */}
          <button
            className="absolute top-0 left-0 mt-4 ml-4 block"
            onClick={toggleSidebar}
          >
            {/* Your toggle button icon */}
            {/* For example, you can use the hamburger icon */}
            <svg
              className="h-6 w-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 w-80 h-screen bg-white z-50 overflow-y-auto transition-all duration-300  ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close button for the mobile sidebar */}
            <button
              className="absolute top-0 right-0 mt-4 mr-4 block"
              onClick={closeSidebar}
            >
              {/* Close button icon */}
              <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Your mobile sidebar content */}
            <div className=" flex flex-col items-center justify-center gap-y-6 h-screen bg-white border-r-4  border-gray-300/50 ">
              <div className="flex items-center justify-center gap-3 w-60 pt-8  ">
                <Image
                  src="/Images/Subtract.png"
                  alt="logo"
                  width={2500}
                  height={2500}
                  className="rounded-full object-contain w-12 h-12"
                />
                <span className=" text-2xl font-semibold ">Base</span>
              </div>
              <div className="h-full w-full flex flex-col gap-y-6 items-start justify-start   ">
                {navLinks.map((index) => (
                  <div
                    className={`w-full 
            ${
              index.href == activePath
                ? "bg-gradient-to-r from-violet-200 from-10% text-indigo-500"
                : "text-gray-400 hover:text-gray-500 hover:bg-gradient-to-r from-violet-100/35 from-10% "
            } `}
                  >
                    <Link
                      className="flex items-center justify-start gap-2 cursor-pointer py-3  group "
                      href={index.href}
                    >
                      <div className=" w-12">
                        <span className="text-base font-semibold   pl-6">
                          {index.navs}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Larger Devices */}
      <div className="hidden lg:block">
        <div className=" flex flex-col items-center justify-center gap-y-6 h-screen bg-white border-r-4 border-gray-300/50 ">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 w-60 pt-8  "
          >
            <Image
              src="/Images/Subtract.png"
              alt="logo"
              width={2500}
              height={2500}
              className="rounded-full object-contain w-12 h-12"
            />
            <span className=" text-2xl font-semibold ">Base</span>
          </Link>
          <div className="h-full w-full flex flex-col gap-y-6 items-start justify-start   ">
            {navLinks.map((index) => (
              <div
                className={`w-full 
            ${
              index.href == activePath
                ? "bg-gradient-to-r from-violet-200 from-10% text-indigo-500"
                : "text-gray-400 hover:text-gray-500 hover:bg-gradient-to-r from-violet-100/35 from-10% "
            } `}
              >
                <Link
                  className="flex items-center justify-start gap-2 cursor-pointer py-3  group "
                  href={index.href}
                >
                  <div className=" w-12">
                    <span className="text-base font-semibold   pl-6">
                      {index.navs}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
