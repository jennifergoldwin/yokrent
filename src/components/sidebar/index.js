"use client";
import { FaCarSide, FaClipboardList } from "react-icons/fa";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import avatar from "../../../public/assets/avatar.png";
import Image from "next/image";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0  ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-md flex justify-between flex-col">
          <div>
            <div className="flex items-center justify-center py-9">
              <div className="w-[120px] h-[120px] bg-[#5CB85F33]/[0.2]">
                <Image src={avatar} alt="" />
              </div>
            </div>
            <ul className="space-y-2 font-medium">
              <li>
                <div
                  // href="#"
                  onClick={() => {
                    if (
                      pathname.includes("/admin") &&
                      pathname.includes("/data-mobil")
                    ) {
                      console.log("lag");
                    } else {
                      const newPath = pathname.split("/", -1);

                      router.push(`/admin/${newPath[2]}/data-mobil`);
                    }
                  }}
                  className={`flex items-center cursor-pointer p-2 text-gray-900 rounded-lg  hover:bg-[#5CB85F33]/[0.2] ${
                    pathname.includes("/data-mobil")
                      ? "bg-[#5CB85F33]/[0.2]"
                      : ""
                  }`}
                >
                  <FaCarSide />
                  <span className="ml-3">Data Mobil</span>
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    if (
                      pathname.includes("/admin") &&
                      pathname.includes("/data-penyewaan")
                    ) {
                      //   console.log("lag");
                    } else {
                      const newPath = pathname.split("/", -1);

                      router.push(`/admin/${newPath[2]}/data-penyewaan`);
                    }
                  }}
                  className={`flex cursor-pointer items-center p-2 text-gray-900 rounded-lg  hover:bg-[#5CB85F33]/[0.2] ${
                    pathname.includes("/data-penyewaan")
                      ? "bg-[#5CB85F33]/[0.2]"
                      : ""
                  }`}
                >
                  <FaClipboardList />
                  <span className="ml-3">Data Penyewaan</span>
                </div>
              </li>
            </ul>
          </div>
          <div
            onClick={() => {
              localStorage.setItem("isLogin", false);
              router.push("/");
            }}
            className={`flex cursor-pointer items-center p-2 text-gray-900 rounded-lg  hover:bg-[#5CB85F33]/[0.2] ${
              pathname.includes("/data-penyewaan") ? "bg-[#5CB85F33]/[0.2]" : ""
            }`}
          >
            <FiLogOut />
            <span className="ml-3">Keluar</span>
          </div>
        </div>
      </aside>

      {/* <div className="p-4 sm:ml-64" onClick={() => setShowSidebar(!showSidebar)}>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
