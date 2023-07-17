"use client";
import Intro from "@/components/intro";
import accord from "../../../public/assets/mobil/accord.png";
import agya from "../../../public/assets/mobil/agya.png";
import alphard from "../../../public/assets/mobil/alphard.png";
import avanza from "../../../public/assets/mobil/avanza.png";
import calya from "../../../public/assets/mobil/calya.png";
import camry from "../../../public/assets/mobil/camry.png";
import civic from "../../../public/assets/mobil/civic.png";
import corolla from "../../../public/assets/mobil/corolla.png";
import ertiga from "../../../public/assets/mobil/ertiga.png";
import hiace from "../../../public/assets/mobil/hiace.png";
import innova from "../../../public/assets/mobil/innova.png";
import jazz from "../../../public/assets/mobil/jazz.png";
import mobilio from "../../../public/assets/mobil/mobilio.png";
import vios from "../../../public/assets/mobil/vios.png";
import Image from "next/image";
import React from "react";

import { FiUsers, FiSettings, FiCalendar } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Link from "next/link";
const dataMobil = [
  {
    url: accord,
    name: "Accord",
    type: "Honda",
    penumpang: 4,
  },
  {
    url: agya,
    name: "Agya",
    type: "Toyota",
    penumpang: 4,
  },
  {
    url: alphard,
    name: "Alphard",
    type: "Toyota",
    penumpang: 6,
  },
  {
    url: avanza,
    name: "Avanza",
    type: "Honda",
    penumpang: 6,
  },
  {
    url: calya,
    name: "Calya",
    type: "Toyota",
    penumpang: 4,
  },
  {
    url: camry,
    name: "Camry",
    type: "Suzuki",
    penumpang: 4,
  },
  {
    url: civic,
    name: "Civic",
    type: "Suzuki",
    penumpang: 4,
  },
  {
    url: corolla,
    name: "Corolla",
    type: "Suzuki",
    penumpang: 4,
  },
  {
    url: ertiga,
    name: "Ertiga",
    type: "Toyota",
    penumpang: 4,
  },
  {
    url: hiace,
    name: "Hiace",
    type: "Toyota",
    penumpang: 4,
  },
  {
    url: innova,
    name: "Innova",
    type: "Honda",
    penumpang: 4,
  },
  {
    url: jazz,
    name: "Jazz",
    type: "Toyota",
    penumpang: 4,
  },
  {
    url: mobilio,
    name: "Mobilio",
    type: "Toyota",
    penumpang: 4,
  },
  {
    url: vios,
    name: "Vios",
    type: "Suzuki",
    penumpang: 4,
  },
];
export default function Page() {
  const [showList, setShowList] = React.useState(false);
  const form = useForm({
    mode: "all",
    defaultValues: {
      type: "Semua",
      tanggal: "",
      waktu: "",
      penumpang: 0,
    },
  });
  const handleForm = () => {
    if (
      form.watch("tanggal") != " " &&
      form.watch("waktu") != " " &&
      form.watch("type") != " "
    ) {
      setShowList(true);
    }
  };
  return (
    <>
      <div className="relative">
        <Intro isHidden={true} />
        <div className="flex lg:absolute  lg:-bottom-8 w-full justify-center">
          <form
            onSubmit={form.handleSubmit(handleForm)}
            className="bg-white lg:flex-row flex-col shadow-md max-w-screen-xl mx-auto w-full lg:m-0 m-5 p-5 gap-3 flex rounded shadow-slate-300"
          >
            <div className="w-full">
              <div>Tipe Mobil</div>
              <select
                data-te-select-init
                required
                onChange={(e) => form.setValue("type", e.target.value)}
                className="border-gray-300 rounded border py-1 px-1  italic w-full"
              >
                <option value="Semua">Semua</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
              </select>
            </div>
            <div className="w-full">
              <div>Tanggal</div>
              <input
                required
                onChange={(e) => form.setValue("tanggal", e.target.value)}
                name="tanggal"
                className="border-gray-300 rounded border py-1 px-4 italic w-full"
                type="date"
                placeholder="Pilih Tanggal"
              />
            </div>
            <div className="w-full">
              <div>Waktu Jemput/Ambil</div>
              <input
                required
                onChange={(e) => form.setValue("waktu", e.target.value)}
                className="border-gray-300 rounded border py-1 px-4 italic w-full"
                type="time"
                name="waktu"
                placeholder="Pilih Waktu"
              />
            </div>
            <div className="w-full">
              <div>Jumlah Penumpang (optional)</div>
              <input
                onChange={(e) =>
                  form.setValue("penumpang", parseInt(e.target.value))
                }
                className="border-gray-300 rounded border py-1 px-4 italic w-full"
                type="number"
                name="penumpang"
                placeholder="Jumlah Penumpang"
              />
            </div>
            <button
              type="submit"
              className="bg-[#5CB85F] rounded italic py-2 px-4 text-white my-4 w-full"
            >
              Cari Mobil
            </button>
          </form>
        </div>
      </div>

      {showList && (
        <div className="max-w-screen-xl grid lg:grid-cols-3 grid-cols-1 gap-8 mx-auto py-16 lg:px-0 px-5">
          {dataMobil
            .filter((item) => {
              if (
                item.type === form.watch("type") &&
                form.watch("type") !== "Semua" &&
                item.penumpang >= form.watch("penumpang")
              ) {
                return item;
              } else if (
                form.watch("type") === "Semua" &&
                item.penumpang >= form.watch("penumpang")
              ) {
                return item;
              }
            })
            .map((a, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded p-4 shadow-md shadow-slate-300"
              >
                <div className="flex justify-center">
                  <Image className="h-[15rem] w-auto" src={a.url} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{a.name}</p>
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
                    Pilih Mobil
                  </div>
                </Link>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
