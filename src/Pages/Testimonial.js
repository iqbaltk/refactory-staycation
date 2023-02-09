import React from "react";
import ic_murah from "../Assets/ic_murah.png";
import ic_murah_banget from "../Assets/ic_murah_banget.png";
import ic_gratis from "../Assets/ic_gratis.png";
import ic_asyik from "../Assets/ic_asyik.png";
import ic_terkini from "../Assets/ic_terkini.png";
import ic_gem from "../Assets/ic_gem.png";
import ic_kaget from "../Assets/ic_kaget.png";
import ic_ga_php from "../Assets/ic_ga_php.png";
import Card from "../Components/Card";

export default function Testimonial() {
  const testimonialData = [
    {
      title: "Murah",
      img: ic_murah,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      title: "Murah Banget",
      img: ic_murah_banget,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      title: "Gratis?",
      img: ic_gratis,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      title: "Asyik",
      img: ic_asyik,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      title: "Terkini",
      img: ic_terkini,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      title: "Hidden Gem",
      img: ic_gem,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      title: "Bikin Kaget",
      img: ic_kaget,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      title: "Ga PHP",
      img: ic_ga_php,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <section className="bg-[#D5ED4161] h-[1000px] w-full">
      <div className="flex flex-row sm:flex-col justify-center ">
        <h1 className="relative text-4xl font-bold justify-center tracking-wide text-[#E89040] mt-20 -ml-10 sm:mt-10 sm:ml-4 sm:text-2xl">
          Kata Mereka <br className="mb-2 sm:mb-0" />
          Ini Keunggulan Kami
        </h1>
        <p className="mt-20 ml-40 text-[#858585] sm:mt-5 sm:ml-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy <br className="sm:hidden"/>
          text ever since the 1500s,
        </p>
      </div>
      <div className="flex justify-center">
        <div className="absolute grid grid-cols-4 gap-8 mt-16 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {testimonialData.map((data, index) => {
            return (
              <Card
                key={index}
                img={data.img}
                title={data.title}
                desc={data.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
