import React from "react";

const CardRekomendasi = ({img, title, desc}) => {
  return (
    <div className="flex flex-col w-80 h-96 space-y-4 rounded-xl justify-center items-center">
      <img
        className="h-full brightness-75 hover:brightness-100 rounded-xl"
        src={img}
        alt="icon"
      />
      <h1 className="absolute text-xl font-bold text-white pt-52">
        {title}
      </h1>
      <h2 className="absolute text-base font-light text-white pt-72">
        {desc}
      </h2>
    </div>
  );
};

export default CardRekomendasi;
