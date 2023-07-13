"use client";

import React, { useState } from "react";
import { GiGraduateCap, GiDialPadlock } from "react-icons/gi";
import { GrMail } from "react-icons/gr";
import { HiEye, HiEyeOff } from "react-icons/hi";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const [newUserInfo, setNewUserInfo] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });
  const [firstPassword, setFirstPassword] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState("password");

  const [passwordConfirmed, setPasswordConfirmed] = useState(true);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (confirmPassword) {
      console.log(newUserInfo);
    } else {
      setPasswordConfirmed(false);
    }
  };

  const settingPassword = (position: string, password: string) => {
    if (position === "first") {
      setFirstPassword(password);

      if (password !== confirmPassword) {
        // console.log(`${password} is not ${confirmPassword}`);
        setPasswordConfirmed(false);
      } else {
        setNewUserInfo((newUserInfo) => ({
          ...newUserInfo,
          password: firstPassword,
        }));
        setPasswordConfirmed(true);
      }
    } else if (position === "last") {
      setConfrimPassword(password);

      if (password !== firstPassword) {
        // console.log(`${firstPassword} is not ${password}`);
        setPasswordConfirmed(false);
      } else {
        setNewUserInfo((newUserInfo) => ({
          ...newUserInfo,
          password: firstPassword,
        }));
        setPasswordConfirmed(true);
      }
    }
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="my-2">
        <label className="opacity-50" htmlFor="name">
          Name
        </label>
        <div className="mt-1 p-2 flex items-center shadow-[0_0px_10px_0px_rgba(var(--text-color-rgb),.2)] w-full rounded-[6px] bg-white text-[rgba(8,13,37,1)] caret-[rgba(8,13,37,1)]">
          <GiGraduateCap className="w-10 h-10 px-2 opacity-50 text-inherit" />
          <input
            type="text"
            required
            id="name"
            placeholder="Name"
            className="w-full caret-inherit px-1 py-2 outline-transparent bg-transparent"
            value={newUserInfo.name}
            onChange={(event) =>
              setNewUserInfo((newUserInfo) => ({
                ...newUserInfo,
                name: event.target.value,
              }))
            }
          ></input>
        </div>
      </div>
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
            value={newUserInfo.email}
            onChange={(event) =>
              setNewUserInfo((newUserInfo) => ({
                ...newUserInfo,
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
            value={firstPassword}
            className="w-full caret-inherit px-1 py-2 outline-transparent bg-transparent"
            onChange={(event) => settingPassword("first", event.target.value)}
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
        {!passwordConfirmed && (
          <span className="text-red-500 py-3 text-xs">
            {`Passwords don't match`}
          </span>
        )}
      </div>
      <div className="my-3">
        <label className="opacity-50" htmlFor="confirm">
          Confirm Password
        </label>
        <div className="mt-1 p-2 flex items-center shadow-[0_0px_10px_0px_rgba(var(--text-color-rgb),.2)] w-full rounded-[6px] bg-white text-[rgba(8,13,37,1)] caret-[rgba(8,13,37,1)]">
          <GiDialPadlock className="w-10 h-10 px-2 opacity-50 text-inherit" />
          <input
            required
            id="confirm"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => settingPassword("last", event.target.value)}
            className="w-full caret-inherit px-1 py-2 outline-transparent bg-transparent"
          ></input>
        </div>
        {!passwordConfirmed && (
          <span className="text-red-500 py-3 text-xs">
            {`Passwords don't match`}
          </span>
        )}
      </div>
      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="h-full px-8 py-4 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] hover:translate-y-[-2px] hover:shadow-[0_20px_40px_-10px_rgba(var(--primary-color-rgb),1)] text-white"
        >
          Create account
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
