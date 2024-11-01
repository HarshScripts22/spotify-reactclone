import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Slidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[22%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-2 pl-8 cursor-pointer">
          <img className="w-[90px]" src={assets.spotify_logo} alt="" />
        </div>
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[78%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-1 pl-4 ">
          <h1>Create your first playlist </h1>
          <p className="font-light">Let’s make this playlist together—</p>
          <button className="px-4 py-1.5 bg-white text-[15p] text-black rounded-full mt-4">
            Create PLaylist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-1 pl-4 mt-4 ">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">
            We’ll keep you posted—just like your favorite podcast's next
            episode!
          </p>
          <button className="px-4 py-1.5 bg-white text-[15p] text-black rounded-full mt-4">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
