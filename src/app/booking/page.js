"use client";
import React from "react";
import DetailMobil from "@/components/detail-mobil";
import CustomInput from "@/components/input";
import Rincian from "@/components/rincian";
import Link from "next/link";

export default function Page() {
  const [shippingValue, setShippingValue] = React.useState(0);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex md:flex-row flex-col-reverse justify-center py-9 gap-8">
        <div className="w-full lg:w-3/5 ">
          <div className="rounded-lg shadow-md border  ">
            <DetailMobil hide={true} />
            {/* detail pesanan */}
            <div className="border rounded border-[#E7E7E7] flex flex-col gap-4 p-8 m-4">
              <h1 className="font-bold text-xl">Detail pesanan</h1>
              <p>Seperti tertera pada SIM</p>

              <CustomInput
                type="email"
                name="email"
                placeholder=""
                label="Email"
              />

              <div>
                <div>Titel</div>
                <select
                  data-te-select-init
                  required
                  className="border-gray-300 rounded border py-1 px-1  italic w-full"
                >
                  <option value="tuan">Tuan</option>
                  <option value="nyonya">Nyonya</option>
                </select>
                <p>
                  Pemberitahuan Privasi kami menjelaskan bagaimana kami
                  menggunakan dan melindungi informasi personal Anda
                </p>
              </div>
              <CustomInput
                type="text"
                name="nama"
                placeholder=""
                label="Nama Lengkap"
              />
              <CustomInput
                type="text"
                name="telp"
                placeholder=""
                label="Nomor HP"
              />
            </div>
            {/* pilih pengiriman */}
            <div className="border rounded border-[#E7E7E7] flex flex-col gap-4 p-8 m-4">
              <h1 className="font-bold text-xl">Pilihan pengiriman</h1>
              <div className="flex gap-4 w-full">
                <div className="flex justify-center gap-2">
                  <input
                    id="shipping-1"
                    type="radio"
                    value="0"
                    name="shipping"
                    onChange={() => setShippingValue(0)}
                  />
                  <label htmlFor="shipping-1">Ambil di kantor</label>
                </div>
                <div className="flex justify-center gap-2">
                  <input
                    id="shipping-2"
                    type="radio"
                    value="1"
                    name="shipping"
                    onChange={() => setShippingValue(1)}
                  />
                  <label htmlFor="shipping-2">Antar ke tempat anda</label>
                </div>
              </div>
            </div>
            {/* alamat pengiriman */}
            {shippingValue === 1 && (
              <div className="border rounded border-[#E7E7E7] flex flex-col gap-4 p-8 m-4">
                <h1 className="font-bold text-xl">Alamat pengantaran</h1>
                <CustomInput
                  placeholder="Isi dengan alamat lengkap"
                  label="Alamat"
                  name="alamat"
                  type="text"
                />

                <CustomInput
                  placeholder=""
                  label="Kode pos"
                  name="kode"
                  type="text"
                />
                <div className="flex gap-2">
                  <input
                    id="validate-address"
                    type="radio"
                    name="validate-address"
                    onChange={() => console.log("ha")}
                  />
                  <label htmlFor="validate-address">
                    Alamat sesuai dengan data pengguna
                  </label>
                </div>
              </div>
            )}
            {/* jaminan */}
            <div className="border rounded border-[#E7E7E7] flex flex-col gap-4 p-8 m-4">
              <h1 className="font-bold text-xl">Pilihan Jaminan</h1>
              <div className="flex gap-4">
                <div className="flex justify-center gap-2">
                  <input id="ktp" type="radio" value="ktp" name="jaminan" />
                  <label htmlFor="ktp">KTP</label>
                </div>
                <div className="flex justify-center gap-2">
                  <input
                    id="paspor"
                    type="radio"
                    value="paspor"
                    name="jaminan"
                  />
                  <label htmlFor="paspor">Paspor</label>
                </div>
              </div>
              <CustomInput
                type="text"
                name="ktp-paspor"
                placeholder=""
                label="No KTP/Paspor"
              />
            </div>
          </div>
          <div className="w-full grid justify-center">
            <Link href="/activity">
              <button
                type="submit"
                className="bg-[#5CB85F] rounded py-3 px-8 text-white my-4"
              >
                Pesan sekarang
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <Rincian />
        </div>
      </div>
    </div>
  );
}
