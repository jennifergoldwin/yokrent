"use client";
import DetailMobil from "@/components/detail-mobil";
import Recommendation from "@/components/recommendation";
import { FaCarSide } from "react-icons/fa";
import { FiLoader, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import React from "react";
import Link from "next/link";
import ActivityList from "@/components/activity-list";

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto py-9">
      <div className="flex lg:flex-row flex-col w-full gap-8 justify-center">
        <div className="lg:w-1/2 w-full ">
          <div className="border rounded shadow-md">
            <div className="border rounded shadow-md">
              <DetailMobil hide={true} />
            </div>
            <ActivityList
              clickable={false}
              list={[]}
              show={null}
              setShow={null}
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <Recommendation />
        </div>
      </div>
    </div>
  );
}
