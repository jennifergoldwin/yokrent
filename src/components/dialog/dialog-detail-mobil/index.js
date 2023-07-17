import Image from "next/image";
import avanza from "../../../../public/assets/mobil/avanza.png";
import React from "react";
const DialogDetail = ({ show, setShow }) => {
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 ${
        !show ? "hidden" : ""
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center`}
    >
      <div className="relative w-full max-w-fit max-h-full">
        <div className="relative bg-white rounded-lg shadow text-black">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold ">Detail Item</h3>
            <button
              onClick={() => setShow(!show)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="w-[369px] h-auto">
              <Image src={avanza} alt="" />
            </div>
            <div>
              <div className="font-bold">Nama / Tipe Mobil</div>
              <div>Lorem ipsum dolor sit amet</div>
            </div>
            <div>
              <div className="font-bold">Kapasitas</div>
              <div>Lorem ipsum dolor sit amet</div>
            </div>
            <div>
              <div className="font-bold">Jenis Transmisi</div>
              <div>Lorem ipsum dolor sit amet</div>
            </div>
            <div>
              <div className="font-bold">Tahun</div>
              <div>2020</div>
            </div>
            <div>
              <div className="font-bold">Harga/hari</div>
              <div>Lorem ipsum dolor sit amet</div>
            </div>
            <div>
              <div className="font-bold">Status</div>
              <div>
                <select
                  data-te-select-init
                  required
                  className="border-gray-300 rounded border py-1 px-1"
                >
                  <option value="tuan">Tersedia</option>
                  <option value="nyonya">Disewa</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center p-6 space-x-2 border-t w-full justify-center">
            <button className="border border-[#F64242] text-[#F64242] rounded-md px-2 py-1">
              Hapus
            </button>
            <button className="text-white bg-[#5CB85F] rounded-md px-2 py-1">
              Tutup
            </button>

            <button className="text-[#5CB85F] border border-[#5CB85F] rounded-md px-2 py-1">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogDetail;
