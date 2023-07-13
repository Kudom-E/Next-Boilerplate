"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { HiMenuAlt3 } from "react-icons/hi";

// type Props = {};

const SidebarButton = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="md:hidden absolute right-0 pr-5 z-[999] top-0 h-[calc(2.5rem+48px)] flex items-center">
      <div>
        <button
          className="h-[3rem] aspect-square bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px] block md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <HiMenuAlt3 className="mx-auto w-5 h-5" />
        </button>
      </div>
      <section>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </section>
    </div>
  );
};

export default SidebarButton;
