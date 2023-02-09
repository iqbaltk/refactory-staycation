import React from "react";
import background from "../Assets/bg_hero.jpg";

export default function Hero() {
  return (
    <section className=" h-[750px]">
      <div className="flex justify-center text-center ">
        <img
          className="absolute w-full h-[700px] object-cover brightness-50 sm:h-[450px]"
          src={background}
          alt="hero"
        ></img>
        <div className="relative mt-60">
          <h1 className="text-4xl font-bold text-white font-sans mb-4 sm:text-3xl sm:font-extrabold sm:px-1 sm:-mt-36">
            Mau Staycation Murah Tanpa Ribet ?
          </h1>
          <p className="text-xl font-normal text-white font-sans mb-10 sm:text-xl sm:px-2">
            Kami bantu kamu mendapatakan tempat staycation paling pas sama
            impian kamu
          </p>
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none sm:hidden">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 pr-40 text-sm text-gray-900 border border-gray-300 rounded-lg sm:px-5 sm:text-center sm:pb-16 sm:m-4 sm:w-[340px] sm:text-lg"
                placeholder="Ketik 'Yogyakarta' "
                required
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1.5 rounded-lg px-5 py-2 font-bold bg-[#D5ED41]  sm:w-[330px]  sm:top-16 sm:left-5 "
              >
                Cari Tempat
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
