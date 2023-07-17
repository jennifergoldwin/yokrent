import Image from "next/image";
import Link from "next/link";
import React from "react";
import accord from "../../../public/assets/mobil/accord.png";
import { FiUsers, FiSettings, FiCalendar } from "react-icons/fi";
const Recommendation = () => {
  return (
    <div className="border rounded shadow-md p-4">
      <h3 className="font-bold text-3xl text-center">Yokrent</h3>
      {[...Array(2)].map((item, idx) => (
        <div key={idx} className=" p-4">
          <div className="flex justify-center">
            <Image className="h-[15rem] w-auto" src={accord} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Accord</p>
            <p className="italic">Rp 430.000 / hari</p>

            <span className="flex gap-2 items-center italic">
              <FiUsers /> 4 Orang
            </span>
            <span className="flex gap-2 items-center italic">
              <FiSettings /> Manual
            </span>
            <span className="flex gap-2 items-center italic">
              <FiCalendar /> Tahun 2020
            </span>
          </div>
          <Link href="/booking">
            <div className="bg-[#5CB85F] rounded italic py-2 px-4 text-white my-4  text-center">
              Rent now
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Recommendation;
