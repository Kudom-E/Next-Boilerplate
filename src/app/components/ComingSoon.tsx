"use client";

// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  theHome: string;
};
const ComingSoon = ({ theHome }: Props) => {
  const router = useRouter();

  return (
    <section className="py-4">
      <div className="container px-4 mx-auto">
        {/* <Image
          className="mx-auto"
          src="dashy-assets/images/empty.png"
          alt=""
          width={100}
          height={100}
        /> */}
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-heading mb-3 text-2xl font-semibold">
            It&rsquo;s a bit empty here
          </h2>
          <p className="mb-7 text-neutral-500">
            The component will be created. Coming Soon.
          </p>
          <button
            className="h-full px-8 py-3 ltr-bg rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-10px_rgba(var(--primary-color-rgb),1)] text-white capitalize"
            onClick={() => router.push(theHome)}
          >
            Go to {theHome === "" ? "home" : theHome}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
