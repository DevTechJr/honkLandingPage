import React from "react";
import Image from "next/image";
import img from "../../images/code.png";
import { TbArrowBigLeftFilled } from "react-icons/tb";

const QRcode = () => {
  return (
    <div className="bg-honkBlue flex flex-row justify-start align-center">
      <div
        className="tooltip  tooltip-white tooltip-warning"
        data-tip="Point your iPhone at the QR Code to scan it."
      >
        <Image src={img} width={120} />
      </div>

      <div className="flex flex-col ml-8">
        <div className="arrow-container">
          <TbArrowBigLeftFilled className="text-honkYellow text-4xl animated-arrow" />
        </div>
        <div className="text-xl header text-white">
          Scan to <br /> download <br /> on iOS
        </div>
      </div>
    </div>
  );
};

export default QRcode;
