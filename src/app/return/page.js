"use client";
import DetailMobil from "@/components/detail-mobil";
import Rincian from "@/components/rincian";
import mc from "../../../public/assets/mc.png";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import CustomInput from "@/components/input";
import React from "react";
import Link from "next/link";
export default function Page() {
  const [showDetailPayment, setShowDetailPayment] = React.useState(false);
  return (
    <div className="max-w-screen-xl mx-auto py-9">
      <div className="flex lg:flex-row flex-col-reverse gap-8">
        <div className="lg:w-1/2 w-full rounded-lg shadow-md border grid justify-items-center">
          <DetailMobil hide={true} />
          <div className="p-8 flex flex-col gap-4 w-full">
            <h3 className="font-semibold">Overview</h3>
            <div className="flex gap-4">
              <div className="border border-black/[0.1] rounded-lg px-4 py-3 w-full">
                <div className="text-lg font-bold">Start</div>
                <div className="text-[#90A3BF]">8 June 2023</div>
              </div>
              <div className="border border-black/[0.1] rounded-lg px-4 py-3 w-full">
                <div className="text-lg font-bold">End</div>
                <div className="text-[#90A3BF]">9 June 2023</div>
              </div>
            </div>
            {/* payment */}
            <div
              className="flex items-center gap-4 w-full"
              onClick={() => setShowDetailPayment(!showDetailPayment)}
            >
              <Image src={mc} alt="" />
              <div className="w-full">
                <div className="text-lg">Mastercard</div>
                <p className="text-[#90A3BF]">**** ***** 1234 5678</p>
              </div>
              <div className="text-lg">
                {showDetailPayment ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>
            {showDetailPayment && (
              <div>
                <p>Cara pembayaran yang diinginkan</p>
                <CustomInput
                  name="card-name"
                  type="text"
                  placeholder="Masukkan nama sesuai kartu"
                  label={
                    <span>
                      Nama Pemilik Kartu{" "}
                      <strong className="!text-red-600">*</strong>
                    </span>
                  }
                />
                <CustomInput
                  name="card-number"
                  type="text"
                  placeholder="Masukkan nomor kartu"
                  label={
                    <span>
                      Nomor Kartu <strong className="!text-red-600">*</strong>
                    </span>
                  }
                />
                <CustomInput
                  name="card-expire"
                  type="date"
                  placeholder=""
                  label={
                    <span>
                      Tanggal Kadaluarsa{" "}
                      <strong className="!text-red-600">*</strong>
                    </span>
                  }
                />
                <CustomInput
                  name="card-cvv"
                  type="text"
                  placeholder=""
                  label={
                    <span>
                      CVV <strong className="!text-red-600">*</strong>
                    </span>
                  }
                />
              </div>
            )}
            <div className="w-full">
              <Link href="/review">
                <button
                  type="submit"
                  className="bg-[#5CB85F] rounded py-3 px-8 text-white mb-4 w-full"
                >
                  Return car and pay
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <Rincian />
        </div>
      </div>
    </div>
  );
}
