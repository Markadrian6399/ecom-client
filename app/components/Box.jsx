import React from "react";
import Boxphoto from "./Boxphoto";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { STIX_Two_Text } from "next/font/google";
const STIX = STIX_Two_Text({ subsets: ["latin"] });
const Box = () => {
  return (
    <div className=" bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[#C056097D] h-[560px] mt-10">
      <h2 className={`container_main text-white pt-[20px] ${STIX.className}`}>
        See Upcoming Auctions and Exhibitions
      </h2>
      <hr className="container_main w-[1000px]" />
      <Boxphoto />
      <div className="container_main mt-5 flex justify-between">
        <div className="w-[300px] h-[10px] bg-slate-500 rounded-lg">
          <div className="bg-white w-8 h-[100%] rounded-lg"></div>
        </div>
        <div className="flex w-[150px] gap-4 items-center">
          <div className="rounded-full shadow-inner h-9 w-9 flex item-center justify-center pt-3 bg-gray-100">
            <FaAngleLeft />
          </div>
          <div className="rounded-full shadow-lg h-9 w-9 flex item-center justify-center pt-3 bg-red-100">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
