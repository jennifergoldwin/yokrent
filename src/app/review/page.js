import Recommendation from "@/components/recommendation";
import accord from "../../../public/assets/mobil/accord.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto py-9">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-full lg:w-3/5">
          <div className="grid grid-cols-2">
            <Image src={accord} alt="" />
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-bold">Nama/Tipe Mobil</div>
              <div className="flex text-xl gap-2">
                {[...Array(5)].map((item, idx) => (
                  <div key={idx} className="text-[#FFEC41]">
                    <FaStar />
                  </div>
                ))}
              </div>
              <div className="font-bold ">Sempurna!</div>
            </div>
          </div>
          <textarea
            rows={6}
            className="border w-full px-4 py-4"
            placeholder="Beritahu kami (opsional)"
          />
          <div className="gap-3 flex">
            <input type="checkbox" />
            <label>Tampilkan username pada penilaian</label>
          </div>
          <Link href="/history">
            <button
              type="submit"
              className="bg-[#5CB85F] rounded w-full py-2 px-4 text-white my-4"
            >
              Kirim Ulasan
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-2/5">
          <Recommendation />
        </div>
      </div>
    </div>
  );
}
