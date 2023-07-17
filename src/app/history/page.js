"use client";

import DetailMobil from "@/components/detail-mobil";
import mc from "../../../public/assets/mc.png";
import Image from "next/image";
import React from "react";
export default function Page() {
  const [showMore, setShowMore] = React.useState([
    { idx: 0, status: false },
    { idx: 1, status: false },
    { idx: 2, status: false },
  ]);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const handleClick = (idx) => {
    setActiveIdx(idx);
    setShowMore(
      showMore.map((link) =>
        link.idx === parseInt(idx)
          ? { ...link, status: !showMore[idx].status }
          : { ...link, status: false }
      )
    );
  };
  return (
    <div className="max-w-screen-xl mx-auto py-9">
      <h3 className="font-bold text-2xl text-center pb-8">History</h3>
      <div className="flex lg:flex-row flex-col w-full gap-8">
        <div className="w-full lg:w-1/2">
          {[...Array(3)].map((item, idx) => (
            <div key={idx} className="border rounded shadow-md p-4">
              <div
                className="border rounded shadow-sm p-4"
                onClick={() => handleClick(idx)}
              >
                <DetailMobil hide={false} />
              </div>
            </div>
          ))}
        </div>
        <div
          className={`w-full lg:w-1/2 border border-[#E7E7E7] rounded shadow-md p-6 ${
            showMore[activeIdx].status ? "visible" : "invisible"
          }`}
        >
          <div className="flex items-center gap-4 w-full">
            <Image src={mc} alt="" />
            <div className="w-full">
              <div className="text-lg">Mastercard</div>
              <p className="text-[#90A3BF]">**** ***** 1234 5678</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="border border-black/[0.1] rounded-lg px-4 py-3 w-full text-center">
              <div className="text-lg font-bold">Start</div>
              <div className="text-[#90A3BF]">8 June 2023</div>
            </div>
            <div className="border border-black/[0.1] rounded-lg px-4 py-3 w-full text-center">
              <div className="text-lg font-bold">End</div>
              <div className="text-[#90A3BF]">9 June 2023</div>
            </div>
          </div>
          <div className="rounded shadow-md p-4 my-6">
            <div className="flex justify-between gap-4">
              <div className="text-black/[0.5] font-bold">Alamat Email</div>
              <div className="font-semibold">Rp 430.000</div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div className="text-black/[0.5] font-bold">Title</div>
              <div className="font-semibold">Ibu</div>
            </div>
          </div>
          <div className="rounded shadow-md p-4 my-6">
            <div className="flex justify-between gap-4">
              <div className="text-black/[0.5] font-bold">Pengiriman</div>
              <div className="font-semibold">Antar ke alamat</div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div className="text-black/[0.5] font-bold">Alamat</div>
              <div className="font-semibold">lorem ipsum dolor sit amet</div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div className="text-black/[0.5] font-bold">Kode pos</div>
              <div className="font-semibold">12345</div>
            </div>
          </div>
          <div className="rounded shadow-md p-4 my-6">
            <div className="flex justify-between gap-4">
              <div className="text-black/[0.5] font-bold">Jaminan</div>
              <div className="font-semibold">KTP</div>
            </div>
            <div className="flex justify-between gap-4 ">
              <div className="text-black/[0.5] font-bold">No KTP</div>
              <div className="font-semibold">123456789</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
