import React from "react";

import yogyakarta from "../Assets/yogya.jpg";
import malang from "../Assets/malang.jpg";
import bali from "../Assets/bali.jpg";
import labuan from "../Assets/bajo.jpg";
import bandung from "../Assets/bandung.jpg";
import raja_ampat from "../Assets/ampat.jpg";
import CardRekomendasi from "../Components/CardRekomendasi";

export default function Rekomendasi() {
  const rekomendasiData = [
    {
      title: "Yogyakarta",
      img: yogyakarta,
      desc: "300 Orang",
    },
    {
      title: "Malang",
      img: malang,
      desc: "200 Orang",
    },
    {
      title: "Bali",
      img: bali,
      desc: "200 Orang",
    },
    {
      title: "Labuan Bajo",
      img: labuan,
      desc: "300 Orang",
    },
    {
      title: "Bandung",
      img: bandung,
      desc: "200 Orang",
    },
    {
      title: "Raja Ampat",
      img: raja_ampat,
      desc: "200 Orang",
    },
  ];
  return (
    <section className="h-[1200px] w-full sm:h-full sm:mb-10">
      <div className="flex flex-row sm:flex-col justify-center">
        <h1 className="relative text-4xl font-bold justify-center tracking-wide text-[#E89040] mt-20 -ml-10 mb-20 sm:mt-10 sm:ml-4 sm:text-2xl">
          Kota paling populer <br className="mb-2 sm:mb-0" />
          Kota paling dicari
        </h1>
        <p className="mt-20 ml-40 text-[#858585] sm:-mt-14 sm:ml-4 sm:mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="sm:hidden"/>
          Lorem Ipsum has been the industry's standard dummy <br className="sm:hidden"/>
          text ever since the 1500s,
        </p>
      </div>
      <div className="flex justify-center">
        <div className="absolute grid grid-cols-3 gap-8 sm:grid-cols-1 sm:relative">
          {rekomendasiData.map((data, index) => {
            return (
              <CardRekomendasi
                key={index}
                title={data.title}
                img={data.img}
                desc={data.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
