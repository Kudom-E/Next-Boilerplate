"use client";

import React from "react";
import Logo from "./Logo";
import SidebarButton from "./SidebarButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

// type Props = {};

export const routes = [
  { name: "Home", route: "/" },
  { name: "Others", route: "/others" },
  { name: "Included", route: "/included" },
  { name: "Contact", route: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="px-[5%] lg:px-[15%] absolute left-0 right-0 top-0 backdrop-blur">
      <div className="p-5 flex justify-between items-center relative">
        <div className="h-[3rem] w-[6rem]">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center">
            {routes.map((route, index) => {
              return (
                <li key={index} className="p-3 hover:translate-y-[-2px]">
                  <Link
                    href={route.route}
                    className={
                      pathname === route.route
                        ? "text-[rgba(var(--primary-color-rgb),1)]"
                        : "hover:text-[rgba(var(--primary-color-rgb),1)]"
                    }
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="justify-center items-center gap-4 h-[3rem] hidden md:flex">
          <button className="h-full px-8 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-white">
            <Link href="/login">Login</Link>
          </button>
          <button className="h-full px-8 bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--secondary-color-rgb),1)]">
            <Link href="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
