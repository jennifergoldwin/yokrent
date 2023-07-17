"use client";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import DialogStatus from "../dialog/dialog-status-mobil";
const Table = ({ thList, tbList, bgColor, title, show, setShow }) => {
  const path = usePathname();
  const router = useRouter();
  const [showStatus, setShowStatus] = React.useState(false);
  const [titleDialog, setTitleDialog] = React.useState("");
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          className={`w-full text-sm text-left text-gray-500 dark:text-gray-400 ${bgColor} rounded-lg`}
        >
          <thead className="text-xs text-black">
            <tr>
              {thList.map((item, idx) => (
                <th key={idx} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {title === "mobil" &&
              tbList.map((tbItem, idx) => (
                <tr key={idx}>
                  <th
                    key={idx}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {tbItem.name}
                  </th>
                  <td className="px-py-4">{tbItem.harga}</td>
                  <td className="px-py-4">{tbItem.kapasitas}</td>
                  <td className="px-py-4">{tbItem.jenis}</td>
                  <td className="px-py-4">{tbItem.tahun}</td>
                  <td className="px-py-4  text-center">
                    <div className="bg-[#43AA8B80]/[0.5] rounded-xl text-white py-1">
                      {tbItem.status}
                    </div>
                  </td>
                  <td className="px-py-4  h-full">
                    <div className="flex justify-center">
                      <button
                        onClick={() => setShow(!show)}
                        className="border-[#1C5D99] text-[#1C5D99] font-bold border text-center px-3  py-2 rounded-md"
                      >
                        Detail
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            {title === "sewa" &&
              tbList.map((tbItem, idx) => (
                <tr key={idx}>
                  <td
                    key={idx}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {tbItem.ktp}
                  </td>
                  <td className="px-6 py-4">{tbItem.nama}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{tbItem.hp}</td>
                  <td className="px-6 py-4">{tbItem.startOrder}</td>
                  <td className="px-6 py-4">{tbItem.endOrder}</td>
                  <td className="px-6 py-4">{tbItem.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {tbItem.pengiriman.title}
                  </td>
                  <td className="px-6 py-4">{tbItem.alamat}</td>
                  <td className="px-6 py-4">{tbItem.pos}</td>
                  <td className="px-6 py-4  text-center">
                    {tbItem.status.id === 1 ? (
                      <div className="flex justify-center gap-2">
                        <button className="text-[#43AA8B] bg-[#DDF0E9] rounded-xl px-2 py-1">
                          Konfirmasi
                        </button>
                        <button className="bg-[#FACECD] text-[#D62828] rounded-xl px-2 py-1">
                          Batalkan
                        </button>
                      </div>
                    ) : (
                      <div
                        className={`${
                          tbItem.status.id === 0
                            ? "text-[#43AA8B] bg-[#DDF0E9]"
                            : "bg-[#FACECD] text-[#D62828]"
                        } rounded-xl  py-1`}
                      >
                        {tbItem.status.title}
                      </div>
                    )}
                  </td>
                  <td className="px-py-4  text-center">
                    <div className="bg-[#43AA8B80]/[0.5] rounded-xl text-white py-1">
                      {tbItem.penyelesaian}
                    </div>
                  </td>
                  <td className="px-py-4  h-full">
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          if (tbItem.status.id === 1) {
                            setShow(!show);
                          } else if (tbItem.status.id === 0) {
                            setTitleDialog(tbItem.pengiriman.title);
                            console.log(tbItem.pengiriman.title);
                            setShowStatus(!showStatus);
                          }
                        }}
                        className="border-[#1C5D99] text-[#1C5D99] font-bold border text-center px-3  py-2 rounded-md"
                      >
                        Detail
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* <hr className="py-4" /> */}
        <div className="flex items-center justify-between px-6 w-full py-9">
          <button className="flex items-center gap-2 border-[#D0D5DD] border rounded-lg shadow-md px-4 py-2">
            <FiArrowLeft />
            <span> Previous</span>
          </button>
          <div className="flex gap-3 text-[#7F56D9] ">
            {[...Array(3)].map((item, idx) => (
              <button className="bg-[#F9F5FF] py-2 px-4 rounded-lg" key={idx}>
                {idx + 1}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 border-[#D0D5DD] border rounded-lg shadow-md px-4 py-2">
            <FiArrowRight />
            <span> Next</span>
          </button>
        </div>
        {title === "mobil" && (
          <div className="w-full flex justify-center pb-9">
            <button
              className="text-white bg-[#5CB85F80]/[0.5] rounded-lg px-4 py-2"
              onClick={() => router.push(`${path}/edit-tambah-mobil`)}
            >
              Tambah Item
            </button>
          </div>
        )}
      </div>
      <DialogStatus
        setShow={setShowStatus}
        show={showStatus}
        title={titleDialog}
      />
    </>
  );
};

export default Table;
