import React from "react";

const Card = ({img, title, desc}) => {
  return (
    <div className="flex flex-col w-64 h-64 bg-white space-y-4 pl-7 pr-7 pt-7 rounded-xl sm:w-40 sm:h-40 sm:justify-center sm:items-center sm:p-0">
      <img className="w-16 h-16" src={img} alt="icon" />
      <h1 className="text-xl font-bold text-[#5A5555]">{title}</h1>
      <p className="block w-full sm:hidden">
        {desc}
      </p>
    </div>
  );
}
export default Card