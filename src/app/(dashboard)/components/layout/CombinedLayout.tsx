"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const CombinedLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="h-full overflow-y-scroll flex-grow relative">
        <Header />
        <section className="w-full px-5 md:px-10">
          {/* background */}
          <div className="h-[25rem] dashboard-background absolute z-[-1] left-0 right-0 top-0"></div>
          {/* Foreground */}
          {children}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default CombinedLayout;
