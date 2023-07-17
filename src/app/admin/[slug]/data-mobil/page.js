"use client";
import DialogDetail from "@/components/dialog/dialog-detail-mobil";
import Table from "@/components/table";
import { mobilData } from "@/utils/data";
import React from "react";
export default function Page() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="p-4 sm:ml-64">
      <h1 className="font-bold text-3xl py-5 text-center">Data Mobil</h1>
      <Table
        tbList={mobilData}
        thList={[
          "Nama/Tipe Mobil",
          "Harga/hari",
          "Kapasitas",
          "Jenis Transmisi",
          "Tahun",
          "Status",
          "Action",
        ]}
        title="mobil"
        show={show}
        setShow={setShow}
        bgColor="bg-[#5CB85F33]/[0.2]"
      />
      <DialogDetail setShow={setShow} show={show} />
    </div>
  );
}
