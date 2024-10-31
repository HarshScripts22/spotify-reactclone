import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibond">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          {" "}
          <p className="bg-white text-black text-[15px] font-semibold px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black px-4 py-2 flex items-center rounded-2xl text-[15px] font-bold  cursor-pointer  ">
            <img className="w-6 h-6 mr-2" src={assets.download_icon} alt="" />
            Install App
          </p>
          <p className="bg-green-500 text-black w-7 h-7 p-5 rounded-full flex items-center justify-center font-bold">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-[#3F3F3F] px-4 py-1 rounded-2xl cursor-pointer">
          {" "}
          Music
        </p>
        <p className="bg-[#3F3F3F] px-4 py-1 rounded-2xl cursor-pointer">
          {" "}
          Podcast
        </p>
      </div>
    </>
  );
};

export default Navbar;
