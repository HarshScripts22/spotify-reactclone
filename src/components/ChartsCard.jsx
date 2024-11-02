import React from "react";
import { Link } from "react-router-dom";
import PlayBtn from "./playBtn";

const ChartsCard = ({ chartImg, chartDesc }) => {
  return (
    <Link
      to={"/Card-detail"}
      className="w-[215px] px-1 py-1 rounded-md bg-transparent hover:bg-neutral-700/15 space-y-3 ease-in-out duration-100 group cursor-pointer"
    >
      <div className="w-full h-auto relative">
        <img
          src={chartImg}
          alt=""
          className="w-full aspect-square object-cover object-center "
        />
        {/* Hover img  */}
        <PlayBtn />
      </div>
      <div className=".space-y-0.5">
        {/* <h5 className="text-base font-medium text-neutral-100 hover:underline">
          {chartDesc}
        </h5> */}
        <p className="text-sm font-semibold text-neutral-400">{chartDesc}</p>
      </div>
    </Link>
  );
};

export default ChartsCard;
