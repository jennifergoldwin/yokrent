import Image from "next/image";
import service from "../../public/assets/img_service.png";
import checklist from "../../public/assets/checklist.png";
import Intro from "@/components/intro";
import complete from "../../public/assets/icon_complete.png";
import price from "../../public/assets/icon_price.png";
import hrs from "../../public/assets/icon_24hrs.png";
import professional from "../../public/assets/icon_professional.png";
import Testimonial from "@/components/testimonial";
const data = [
  {
    icon: complete,
    title: "Mobile Lengkap",
    desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: price,
    title: "Harga Murah",
    desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: hrs,
    title: "Layanan 24 Jam",
    desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: professional,
    title: "Profesional",
    desc: "Profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];
export default function Home() {
  return (
    <>
      <Intro isHidden={false} />
      <div
        className="max-w-screen-xl mx-auto flex lg:flex-row flex-col px-4 py-8"
        id="services"
      >
        <div className="w-full lg:w-3/5 flex justify-center">
          <Image src={service} alt="" className="max-w-full" />
        </div>
        <div className="flex flex-col justify-center p-4 w-full lg:w-2/5">
          <div className="text-3xl italic">
            Best Car Rental for any kind of trip in Surabaya!
          </div>
          <div className="text-lg">
            Sewa mobil di Surabaya bersama YOKRENT jaminan harga lebih murah
            dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan
            terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </div>
          <div className="flex items-center gap-4 italic">
            <Image src={checklist} alt="" />
            <span>Sewa Mobil Dengan Supir 12 Jam</span>
          </div>
          <div className="flex items-center gap-4 italic">
            <Image src={checklist} alt="" />
            <span>Sewa Mobil Lepas Kunci 24 Jam</span>
          </div>
          <div className="flex items-center gap-4 italic">
            <Image src={checklist} alt="" />
            <span>Sewa Mobil Jangka Panjang Bulanan</span>
          </div>
          <div className="flex items-center gap-4 italic">
            <Image src={checklist} alt="" />
            <span>Gratis Antar - Jemput Mobil</span>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto w-full py-8 px-8" id="why-us">
        <div className="italic">
          <span className="text-2xl">Why Us</span>{" "}
          <p>Mengapa harus pilih YOKRENT</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-8">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="border rounded border-gray-400 p-4 italic"
            >
              <Image src={item.icon} alt="" />
              <div className="text-xl py-3">{item.title}</div>
              <p className="text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Testimonial />
    </>
  );
}
