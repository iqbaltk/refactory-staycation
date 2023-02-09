import React from "react";
import ic_check from "../Assets/ic_check.png";
import ic_check_false from "../Assets/ic_check_false.png";

export default function Benefit() {
  return (
    <section className=" bg-white shadow-lg border-lg rounded-lg w-[1140px] -mt-28 mb-28  m-auto sm:hidden">
      <div className="flex flex-col">
        <div className="flex flex-row place-content-end space-x-16 pr-36 text-xl font-extrabold py-10">
          <h1>Sama Kami</h1>
          <h1>Sama Yang Lain</h1>
        </div>
        <div className="flex flex-col border-b-2 border-[#EFF7B1] pb-6 mb-6 m-auto w-[1000px]">
          <div className="flex flex-row  justify-between  text-[rgb(133,133,133)] text-lg font-normal ">
            <h1 className="text-xl">Gratis Biaya Konsultasi</h1>
            <div className="flex space-x-36 mr-28">
              <img src={ic_check} alt="icon" />
              <img src={ic_check_false} alt="icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b-2 border-[#EFF7B1] pb-6 mb-6 m-auto w-[1000px]">
          <div className="flex flex-row  justify-between   text-[rgb(133,133,133)] text-lg font-normal ">
            <h1 className="text-xl">Refund Kapanpun</h1>
            <div className="flex space-x-36 mr-28">
              <img src={ic_check} alt="icon" />
              <img src={ic_check_false} alt="icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b-2 border-[#EFF7B1] pb-6 mb-6 m-auto w-[1000px]">
          <div className="flex flex-row  justify-between   text-[rgb(133,133,133)] text-lg font-normal ">
            <h1 className="text-xl">Refund Kapanpun</h1>
            <div className="flex space-x-36 mr-28">
              <img src={ic_check} alt="icon" />
              <img src={ic_check_false} alt="icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b-2 border-[#EFF7B1] pb-6 mb-6 m-auto w-[1000px]">
          <div className="flex flex-row  justify-between   text-[rgb(133,133,133)] text-lg font-normal ">
            <h1 className="text-xl">Biaya Pengantaran</h1>
            <div className="flex space-x-36 mr-28">
              <img src={ic_check} alt="icon" />
              <img src={ic_check_false} alt="icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-12 m-auto w-[1000px]">
          <div className="flex flex-row  justify-between   text-[rgb(133,133,133)] text-lg font-normal ">
            <h1 className="text-xl">Gratis Local Gide</h1>
            <div className="flex space-x-36 mr-28">
              <img src={ic_check} alt="icon" />
              <img src={ic_check_false} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
