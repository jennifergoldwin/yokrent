"use client";
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { useRouter, usePathname } from "next/navigation";
import SideBar from "../sidebar";

export default function Layout({ children }) {
  // const router = useRouter();
  const pathname = usePathname();
  React.useEffect(() => {
    console.log();
  });
  return (
    <>
      <React.Suspense fallback={null}>
        {pathname.includes("/admin") ? <SideBar /> : <Navbar />}
      </React.Suspense>
      {children}
      {!pathname.includes("/admin") && <Footer />}
    </>
  );
}
