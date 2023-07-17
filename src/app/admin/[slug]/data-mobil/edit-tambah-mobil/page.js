import CustomInput from "@/components/input";
import React from "react";

export default function Page() {
  return (
    <div className="p-4 sm:ml-64 h-full  flex justify-center items-center">
      <div className="py-9">
        <h1>Data Item</h1>
        <CustomInput
          name="nama-mobil"
          label="Nama / Tipe Mobil"
          placeholder="Masukkan nama item"
          type="text"
        />
        <div>
          <div>Jenis Transmisi</div>
          <select
            data-te-select-init
            required
            className="border-gray-300 rounded border py-1 px-1  italic w-full"
          >
            <option value="tuan">Manual</option>
            <option value="nyonya">Matic</option>
          </select>
        </div>
        <CustomInput
          name="tahun-mobil"
          label="Tahun"
          placeholder="Masukkan tahun mobil"
          type="text"
        />
        <CustomInput
          name="kapasitas-mobil"
          label="Kapasitas"
          placeholder="Masukkan kapasitas mobil"
          type="text"
        />
        <CustomInput
          name="harga-mobil"
          label="Harga"
          placeholder="Masukkan harga penyewaan/hari"
          type="text"
        />
        <div>
          <h3>2. Upload Photo</h3>

          <CustomInput
            name="image-mobil"
            type="file"
            placeholder="No File Choosen"
            label="Upload Photo"
          />
          <div className="text-xs">Upload max 2mb dengan file jpg, png.</div>
        </div>
        <div className="w-full flex justify-center py-9">
          <button className="text-white bg-[#5CB85F80]/[0.5] rounded-lg px-4 py-2">
            Tambah Item
          </button>
        </div>
      </div>
    </div>
  );
}
