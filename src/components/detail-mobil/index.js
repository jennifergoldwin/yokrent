import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import car from "../../../public/assets/mobil/mobilio.png";
const DetailMobil = ({ hide }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Image src={car} alt="" className=" w-full" />
      <div className="flex flex-col justify-center">
        <div className="font-bold text-xl">Nama mobil</div>
        <div className="font-semibold">Tipe mobil</div>
        <div className="text-black/[0.5]">Rp 430.000</div>
        {!hide && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-black/[0.5]">
              Order at :<br /> 8 Juny 2023, 07:00
            </div>
            <BiChevronRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailMobil;
