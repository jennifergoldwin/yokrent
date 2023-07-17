"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { BsFillStarFill } from "react-icons/bs";
import avatar1 from "../../../public/assets/avatar1.png";
import Image from "next/image";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
// import avatar2 from '../../../public/assets/avatar2.png';
const Testimonial = () => {
  const [swiper, setSwiper] = React.useState(useSwiper());
  return (
    <div className="block pb-8" id="testimonial">
      <div className="italic text-center max-w-screen-xl  mx-auto w-full py-8">
        <span className="text-2xl">Testimonial</span>{" "}
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {[...Array(5)].map((a, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F1F3FF] rounded flex justify-center items-center p-4 gap-4">
                <Image src={avatar1} alt="" />
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    {[...Array(5)].map((a, idx) => (
                      <span key={idx} className="text-[#F9CC00]">
                        <BsFillStarFill />
                      </span>
                    ))}
                  </div>
                  <p className="text-sm">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="text-sm">John Dee 32, Bromo</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex w-full justify-center py-4 gap-4">
          <div
            className={`${
              swiper != null && swiper.activeIndex != 0
                ? "bg-[#5CB85F] text-white"
                : "bg-white text-black border border-gray-300"
            } rounded-full p-2  `}
            onClick={() => swiper.slidePrev()}
          >
            <MdOutlineArrowBackIos />
          </div>
          <div
            className={`${
              swiper != null && swiper.activeIndex != 5
                ? "bg-[#5CB85F] text-white"
                : "bg-white text-black border border-gray-300"
            } rounded-full p-2 `}
            onClick={() => swiper.slideNext()}
          >
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
