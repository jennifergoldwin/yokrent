/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "../../../public/assets/avatar_user.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { RiFileListLine } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import { useRouter } from "next/navigation";
function Navbar() {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState("false");
  const router = useRouter();
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("isLogin") || "false";
      if (value !== isLogin) {
        setIsLogin(localStorage.setItem("isLogin", value));
      }
    }
  }, []);
  React.useEffect(() => {
    router.refresh();
    setIsLogin(localStorage.getItem("isLogin"));
  }, [isLogin]);
  return (
    <nav className={` w-full z-[100] bg-[#F1F3FF]`}>
      <div className="max-w-screen-2xl lg:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-[#F1F3FF] ">
        <Link href="/" className="flex items-center justify-center mr-6">
          {/* <Image src={} className="" alt="creo Logo" /> */}
          <span className="self-center text-xl font-extrabold whitespace-nowrap text-[#5CB85F]">
            YOKRENT
          </span>
        </Link>
        <button
          onClick={() => setActiveMenu(!activeMenu)}
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className={`inline-flex items-center p-2 ml-3 text-2xl text-[#5CB85F] rounded-lg lg:hidden focus:ring-2 focus:ring-[#5CB85F] ${
            activeMenu ? "" : ""
          }`}
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {activeMenu ? <IoClose /> : <IoMenu />}
        </button>
        <div
          className={`${
            activeMenu ? "block" : "hidden"
          } w-full lg:flex justify-between items-center lg:w-3/4 sm:text-base text-sm`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-normal p-2 lg:p-0 mt-4 lg:flex-row lg:space-x-12 lg:mt-0 relative">
            <li>
              <Link
                href="/#services"
                className={`block py-2 pl-3 pr-4 rounded lg:p-0 text-black`}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/#why-us"
                className={`block py-2 pl-3 pr-4 rounded lg:p-0 text-black `}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonial"
                className={`block py-2 pl-3 pr-4 rounded lg:p-0 text-black `}
              >
                Testimonial
              </Link>
            </li>
          </ul>
          {isLogin === "true" ? (
            <div className="flex gap-6 items-center justify-center  text-[#0D28A6]">
              <Link href="/history">
                <div className="rounded-full p-1.5 text-xl border border-[#0D28A666]/[0.4]">
                  <BiTime />
                </div>
              </Link>
              <Link href="/activity">
                <div className="rounded-full p-1.5 text-xl border border-[#0D28A666]/[0.4]">
                  <RiFileListLine />
                </div>
              </Link>
              <Link href="/settings">
                <div className="rounded-full p-1.5 text-xl border border-[#0D28A666]/[0.4]">
                  <FiSettings />
                </div>
              </Link>
              <div
                onClick={() => {
                  localStorage.setItem("isLogin", false);
                  router.refresh();
                }}
              >
                <Image src={avatar} alt="" />
              </div>
            </div>
          ) : (
            <Link
              href="/register"
              onClick={() => setActiveMenu(false)}
              className={`flex text-white bg-[#5CB85F] rounded-[4px] py-3 px-2 lg:mx-4 font-bold justify-center gap-2`}
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
