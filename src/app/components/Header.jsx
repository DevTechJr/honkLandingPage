import React from "react";
import img from "../../images/honkLogo.png";
import Image from "next/image";
import {FiArrowUpRight} from "react-icons/fi"


const Header = () => {
  return (
    <div className="flex flex-row items-center justify-start">
      <div>
        <Image src={img} width={65} />
      </div>
      <a
        href="https://honk.me/sunset"
        target="_blank"
        className="ml-4 rounded-md cursor-pointer font-medium text-sm flex align-center justify-center text-white bg-banner hover:-translate-y-1 hover:bg-sky-400 transition linear duration-300 px-4 py-1"
      >
        Important Announcement{" "}
        <span>
          <FiArrowUpRight className="text-white ml-1 font-bold text-lg" />
        </span>
      </a>
    </div>
  );
};

export default Header;
