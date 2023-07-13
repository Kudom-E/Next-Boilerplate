"use client";

import React, { useState } from "react";
import { GiDialPadlock } from "react-icons/gi";
import { GrMail } from "react-icons/gr";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [oldUser, setOldUser] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState("password");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    console.log(oldUser);
    router.push("/dashboard");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="my-3">
        <label className="opacity-50" htmlFor="email">
          Email
        </label>
        <div className="mt-1 p-2 flex items-center shadow-[0_0px_10px_0px_rgba(var(--text-color-rgb),.2)] w-full rounded-[6px] bg-white text-[rgba(8,13,37,1)] caret-[rgba(8,13,37,1)]">
          <GrMail className="w-10 h-10 px-3 opacity-50 text-inherit" />
          <input
            type="email"
            id="email"
            required
            placeholder="Email"
            value={oldUser.email}
            onChange={(event) =>
              setOldUser((oldUser) => ({
                ...oldUser,
                email: event.target.value,
              }))
            }
            className="w-full caret-inherit px-1 py-2 outline-transparent bg-transparent"
          ></input>
        </div>
      </div>
      <div className="my-3">
        <label className="opacity-50" htmlFor="password">
          Password
        </label>
        <div className="mt-1 p-2 flex items-center shadow-[0_0px_10px_0px_rgba(var(--text-color-rgb),.2)] w-full rounded-[6px] bg-white text-[rgba(8,13,37,1)] caret-[rgba(8,13,37,1)]">
          <GiDialPadlock className="w-10 h-10 px-2 opacity-50 text-inherit" />
          <input
            required
            id="password"
            type={passwordVisible}
            placeholder="Password"
            value={oldUser.password}
            className="w-full caret-inherit px-1 py-2 outline-transparent bg-transparent"
            onChange={(event) =>
              setOldUser({ ...oldUser, password: event.target.value })
            }
          ></input>
          {passwordVisible === "password" ? (
            <HiEye
              className="w-10 h-10 px-2 opacity-50 text-inherit cursor-pointer"
              onClick={() => setPasswordVisible("text")}
            />
          ) : (
            <HiEyeOff
              className="w-10 h-10 px-2 opacity-50 text-inherit cursor-pointer"
              onClick={() => setPasswordVisible("password")}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="h-full px-8 py-4 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_40px_-10px_rgba(var(--primary-color-rgb),1)] text-white"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
