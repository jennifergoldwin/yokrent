"use client";
import React from "react";
import { FaCarSide } from "react-icons/fa";
import { FiLoader, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
const ActivityList = ({ clickable, list, show, setShow }) => {
  const [showMore, setShowMore] = React.useState(false);
  const [idxFinish, setIdxFinish] = React.useState(0);
  const handleClick = (idx) => {
    console.log(idxFinish[idx].status);
    setIdxFinish(
      idxFinish.map((link) => {
        link.idx === parseInt(idx)
          ? { ...link, status: true }
          : { ...link, status: false };
      })
    );
  };
  return (
    <div className="grid justify-items-center py-6">
      <div className="border rounded-lg shadow-md p-4 w-3/4 ">
        <div
          onClick={() => setShowMore(!showMore)}
          className="flex items-center justify-between gap-6 py-3 "
        >
          <div className="flex items-center gap-6">
            <div className="text-[#7BC47D] text-3xl">
              <FaCarSide />
            </div>
            <div>
              <div className="font-bold text-xl">Order ID #0012345</div>
              <div>On Delivery</div>
            </div>
          </div>
          <div className="text-2xl">
            {showMore ? <FiChevronDown /> : <FiChevronUp />}
          </div>
        </div>
        {!clickable ? (
          <div className={` gap-4 ${showMore ? "grid" : "hidden"}`}>
            <div className="flex items-center gap-6">
              <div className="text-[#7BC47D] text-2xl">
                <BsCheckCircleFill />
              </div>
              <div>
                <div className="font-bold text-xl">
                  Your order has been received
                </div>
                <div>07.00 AM, 08 Juny 2023</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-[#7BC47D] text-2xl">
                <BsCheckCircleFill />
              </div>
              <div>
                <div className="font-bold text-xl">
                  Yokrent prepare your order
                </div>
                <div>07.00 AM, 08 Juny 2023</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-[#7BC47D] text-2xl">
                <FiLoader />
              </div>
              <div>
                <div className="font-bold text-xl">Your Order On Delivery</div>
                <div>07.00 AM, 08 Juny 2023</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-[#7BC47D] text-2xl">
                <RiCheckboxBlankCircleLine />
              </div>
              <div>
                <div className="font-bold text-xl">Order Delivered</div>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <div className={` gap-4 ${showMore ? "grid" : "hidden"}`}>
            {list.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <div
                  className="text-[#7BC47D] text-2xl"
                  onClick={() => setIdxFinish(idx + 1)}
                >
                  {idxFinish > idx ? (
                    <BsCheckCircleFill />
                  ) : (
                    <RiCheckboxBlankCircleLine />
                  )}
                </div>
                <div>
                  <div className="font-bold text-xl">{item}</div>
                  <div>07.00 AM, 08 Juny 2023</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => (clickable ? setShow(!show) : "")}
        type="submit"
        className="bg-[#5CB85F] rounded py-3 px-8 text-white my-4"
      >
        Selesaikan pesanan
      </button>
    </div>
  );
};

export default ActivityList;
