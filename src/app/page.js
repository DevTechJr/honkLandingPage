import Image from "next/image";
import img from "../images/ctaImage.png";
import "./animations.css";
import Header from "./components/Header";
import CTA from "./components/CTA";
import QRcode from "./components/QRcode";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-4 bg-honkBlue">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
      </style>
      <div className="w-full md:w-1/2 flex justify-end">
        <div className="md:w-3/5 ml-4 flex-col gap-2 justify-start">
          <Header className="mb-8 " />
          <div className="my-8" />
          <CTA className="mt-4" />
          <div className="my-8" />
          <QRcode />
          <div className="my-8" />
          <Footer />
        </div>
      </div>
      <div className="w-full md:w-1/2 animate-moveUpDown">
        <Image
          width={575}
          height={600}
          className="animate-ping-slow"
          alt="Honk CTA Image"
          src={img}
        />
      </div>
    </main>
  );
}
