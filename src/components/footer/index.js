import twitch from "../../../public/assets/icon_twitch.png";
import mail from "../../../public/assets/icon_mail.png";
import twitter from "../../../public/assets/icon_twitter.png";
import facebook from "../../../public/assets/icon_facebook.png";
import instagram from "../../../public/assets/icon_instagram.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl flex md:flex-row flex-col justify-between px-4 py-12 gap-4 md:text-left text-center items-center md:gap-0">
        <div>
          Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div>
          <p className="italic ">Connect with us</p>
          <div className="flex gap-4">
            <a href="#">
              <Image src={facebook} alt="" />
            </a>
            <a href="#">
              <Image src={instagram} alt="" />
            </a>
            <a href="#">
              <Image src={twitter} alt="" />
            </a>
            <a href="#">
              <Image src={mail} alt="" />
            </a>
            <a href="#">
              <Image src={twitch} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
