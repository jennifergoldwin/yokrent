"use client";
import DialogKonfirmasi from "@/components/dialog/dialog-konfirmasi";

import Table from "@/components/table";
import { sewaData } from "@/utils/data";
import React from "react";
export default function Page() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="p-4 sm:ml-64">
      <h1 className="font-bold text-3xl py-5 text-center">Pesanan Penyewaan</h1>
      <Table
        tbList={sewaData}
        thList={[
          "No KTP",
          "Nama",
          "No HP",
          "Start Order",
          "End Order",
          "Alamat Email",
          "Pengiriman",
          "Alamat",
          "Kode Pos",
          "Status",
          "Penyelesaian Pesanan",
          "Action",
        ]}
        show={show}
        setShow={setShow}
        title="sewa"
        bgColor="bg-white"
      />
      <DialogKonfirmasi setShow={setShow} show={show} />
    </div>
  );
}
