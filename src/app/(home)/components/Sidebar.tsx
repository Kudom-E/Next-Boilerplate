import React from "react";
import Logo from "@/(home)/components/Logo";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { GrMultiple, GrContactInfo } from "react-icons/gr";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { BiUserPlus, BiLogIn, BiArrowBack } from "react-icons/bi";
import { usePathname } from "next/navigation";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const pathname = usePathname();

  const tabs = [
    {
      pathname: "Home",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      pathname: "Others",
      path: "/others",
      icon: <GrMultiple />,
    },
    {
      pathname: "Included",
      path: "/included",
      icon: <MdOutlineBookmarkAdded />,
    },
    {
      pathname: "Contact",
      path: "/contact",
      icon: <GrContactInfo />,
    },
    {
      pathname: "Sign up",
      path: "/signup",
      icon: <BiUserPlus />,
    },
    {
      pathname: "Log in",
      path: "/login",
      icon: <BiLogIn />,
    },
  ];
  return (
    <div
      className={`h-screen bg-[rgba(var(--secondary-color-rgb),1)] min-w-[60%] transition-all duration-300 fixed ${
        sidebarOpen ? "right-0" : "right-[-60%]"
      } top-0 bottom-0 z-[99]`}
    >
      <div className="p-4 pb-0 flex items-center justify-end">
        <button
          className="hover:text-[rgba(var(--accent-color-rgb),1)] transition-all duration-300 rotate-180"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <BiArrowBack className="text-inherit" />
        </button>
      </div>
      <div className="p-5">
        <Link
          href="/"
          className="w-[8vw] min-w-[5rem] mx-auto block"
          onClick={() => setSidebarOpen(false)}
        >
          <Logo />
        </Link>
      </div>
      <div className="pt-10">
        <ul className="flex flex-col justify-between">
          {tabs.map((tab, index) => {
            return (
              <li key={index} className="mb-4">
                <Link
                  className={`flex items-center gap-5 px-5 py-3 hover:text-[rgba(var(--accent-color-rgb))] ${
                    pathname === tab.path ? "active-link" : ""
                  }`}
                  href={tab.path}
                  onClick={() => setSidebarOpen(false)}
                >
                  {tab.icon}
                  <p>{tab.pathname}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
