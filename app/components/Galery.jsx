import React from "react";
import Gallerymarket from "./Gallerymarket";
import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";

const Galery = () => {
  return (
    <div>
      <div className="container_main flex gap-7">
        <div className="w-[30%] h-8 flex gap-4 rounded-md bg-[#bbb3b385] flex-grow-2 justify-center items-center pl">
          <BiSearchAlt2 size={20} color="gray" />
          <input
            type="search"
            placeholder="Search"
            className="bg-[transparent] w-[150px]"
          />
        </div>
        <div className="shadow-2xl  w-[100%] h-10 flex-grow-5 rounded-md flex justify-between p-5 items-center">
          <p>See 1-6 of 15 results</p>

          <select
            name="Sort by"
            id="fisrt"
            className="border border-3 border-[#67656585] w-[100px] h-[30px] rounded-lg"
          >
            <option value="Sort by">Sort by</option>
            <option value="Sort by">Sort by</option>
            <option value="Sort by">Sort by</option>
          </select>
        </div>
      </div>
      <Gallerymarket />
    </div>
  );
};

export default Galery;
