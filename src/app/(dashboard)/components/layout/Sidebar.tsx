"use client";

import React, { useState } from "react";
import Logo from "@/(home)/components/Logo";
import Link from "next/link";
import { RiComputerLine, RiTableLine, RiUserLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

// type Props = {};

const Sidebar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    {
      pathname: "Dashboard",
      path: "/dashboard",
      icon: <RiComputerLine />,
    },
    {
      pathname: "Tables",
      path: "/tables",
      icon: <RiTableLine />,
    },
    {
      pathname: "Profile",
      path: "/profile",
      icon: <RiUserLine />,
    },
  ];

  return (
    <div
      className={`h-screen transition-all duration-150 flex flex-col bg-[rgba(var(--secondary-color-rgb),1)] ${
        sidebarOpen
          ? "min-w-[60%] md:min-w-[20%] md:w-[20%] left-0"
          : "w-0 md:w-[3rem]"
      } absolute left-0 z-[99] md:relative`}
    >
      <div
        className="p-4 pb-0 flex items-center justify-end"
        // className={`p-4 pb-0 flex items-center justify-end ${
        //   sidebarOpen ? "" : "relative left-[-12rem] md:left-0"
        // }`}
      >
        <button
          className={`text-[rgba(var(--text-color-rgb),1)] md:hover:text-[rgba(var(--accent-color-rgb),1)] transition-all duration-300 ${
            sidebarOpen ? "" : "rotate-180 translate-x-[1rem] md:translate-x-0"
          }`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <BiArrowBack className="text-inherit" />
        </button>
      </div>
      <div
        className={`relative transition-all duration-150 flex-grow flex flex-col ${
          sidebarOpen ? "left-0" : "left-[-12rem]"
        }`}
      >
        <div className="p-5 pt-0 relative">
          <Link href="/" className="w-[8vw] min-w-[5rem] mx-auto block">
            <Logo />
          </Link>
        </div>
        <div className="relative flex-grow">
          <ul className="flex flex-col justify-between h-full">
            <div>
              {tabs.map((tab, index) => {
                return (
                  <li key={index} className="mb-4">
                    <Link
                      className={`flex items-center gap-5 px-5 py-3 hover:text-[rgba(var(--accent-color-rgb))] ${
                        pathname === tab.path ? "active-link" : ""
                      }`}
                      href={tab.path}
                    >
                      {tab.icon}
                      <p>{tab.pathname}</p>
                    </Link>
                  </li>
                );
              })}
            </div>
            <li className="mb-4 relative">
              <Link
                className={`flex items-center gap-5 px-5 py-3 hover:text-red-500 ${
                  pathname === "/login" ? "active-link" : ""
                }`}
                href="/login"
              >
                <IoExitOutline />
                <p>Log Out</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
