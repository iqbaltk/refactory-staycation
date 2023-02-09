import React from "react";
import img1 from "../Assets/img-1.png";
import img2 from "../Assets/img-2.png";
import img3 from "../Assets/img-3.png";

export default function Description() {
  return (
    <section className=" py-10  bg-white sm:py-0">
      <div className="flex flex-row sm:flex-col justify-center">
        <div className="flex flex-col justify-center sm:order-last">
          <div className="relative w-[500px] sm:w-full ml-3 sm:-mx-14 sm:-ml-10">
            <img
              className="object-bottom-right scale-75 sm:scale-[0.6] sm:top-0 rounded-lg"
              src={img1}
              alt=""
            />
            <img
              className="absolute origin-bottom-right scale-75 rounded-lg top-0 right-11 sm:scale-[0.6] sm:-right-8 sm:top-0"
              src={img2}
              alt=""
            />
            <img
              className="absolute origin-bottom-right scale-75 rounded-lg bottom-11 right-11 sm:scale-[0.6] sm:top-28 sm:-right-8"
              src={img3}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col w-96 sm:w-full sm:pl-3 mt-10 sm:-mt-64">
          <h1 className="text-4xl font-bold text-[#E89040] block">
            Kami sudah membantu 1000++ orang staycation. Kamu mau nyoba?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#858585] block">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
    </section>
  );
}
