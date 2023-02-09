import React from "react";

export default function Nav() {
  return (
    <nav className="fixed flex justify-between z-10 bg-white w-full py-3 sm:py-4">
      <div className="pl-32 sm:pl-5">
        <h1 className="text-xl pt-1 font-bold sm:text-base sm:pt-2">
          STAYCATIONMURAH
        </h1>
      </div>
      {/* icon burger */}
      <div className="hidden flex-nowrap flex-row space-x-10 pr-8 sm:flex">
        <button className="hover:bg-[#D5ED41] p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-nowrap flex-row space-x-10 pr-32 sm:hidden">
        <button className="hover:text-[#D5ED41]">Tentang Kami</button>
        <button className="hover:text-[#D5ED41]">Benefit</button>
        <button className="hover:text-[#D5ED41]">Testimonial</button>
        <button className="rounded px-5 py-2 bg-[#D5ED41] font-bold">Daftar</button>
      </div>
    </nav>
  );
}
