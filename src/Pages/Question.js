import React, { useState } from "react";
import Accordion from "../Components/Accordion";

export default function Question() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const questionData = [
    {
      title: "Apakah ini ada legalitasnya?",
      desc: "1Magna Lorem in excepteur id. Consectetur voluptate consectetur tempor dolor quis duis dolor voluptate officia minim deserunt aute. Ex aliqua sunt sunt consequat id commodo velit minim aliqua anim incididunt nisi.",
    },
    {
      title: "Apakah ada kantor fisiknya?",
      desc: "2Magna Lorem in excepteur id. Consectetur voluptate consectetur tempor dolor quis duis dolor voluptate officia minim deserunt aute. Ex aliqua sunt sunt consequat id commodo velit minim aliqua anim incididunt nisi.",
    },
    {
      title: "Berapa peserta yang merasa kecewa??",
      desc: "3Magna Lorem in excepteur id. Consectetur voluptate consectetur tempor dolor quis duis dolor voluptate officia minim deserunt aute. Ex aliqua sunt sunt consequat id commodo velit minim aliqua anim incididunt nisi.",
    },
    {
      title: "Apakah dunia ini fana??",
      desc: "4Magna Lorem in excepteur id. Consectetur voluptate consectetur tempor dolor quis duis dolor voluptate officia minim deserunt aute. Ex aliqua sunt sunt consequat id commodo velit minim aliqua anim incididunt nisi.",
    },
  ];

  return (
    <section className="h-[800px] w-[1140px] m-auto sm:h-full sm:mb-10">
      <div className="flex flex-row sm:flex-col">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold  text-[#E89040] mb-20 sm:ml-4 sm:text-2xl sm:mb-10">
            Yang sering Netizen <br /> tanyai...
          </h1>
          {questionData.map((data, index) => {
            return (
              <Accordion
                key={index}
                open={index === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
        <div className="flex flex-col">
          <div
            className="relative w-[550px] h-[500px] rounded-3xl ml-5 sm:w-[330px] sm:h-[420px]"
            style={{
              background:
                "linear-gradient(32.2deg, rgba(189, 22, 22, 0.2) 7.51%, rgba(213, 237, 65, 0.2) 95.07%), #E89040",
            }}
          >
            <div className="p-20 sm:p-5">
              <h1 className="text-white text-3xl font-black mb-8 sm:text-2xl sm:mb-4">
                Gratis tiket liburan untuk 100 orang nih, kamu mau?
              </h1>
              <form action="/#" >
                <div className="mb-3">
                  <label className="text-white font-light text-sm">
                    Nama Asli sesuai KTP
                  </label>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-md"
                    placeholder="Misal ''Iqbal Tri Karyandi'' "
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="text-white font-light text-sm">
                    No. Hp kamu
                  </label>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-md"
                    placeholder="Misal ''081234567890'' "
                    required
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md py-4 font-black text-[#6B781D] bg-[#D5ED41]"
                  >SAYA MAU TIKET GRATIS
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
