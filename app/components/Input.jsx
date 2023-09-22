import React from "react";
import { Baskervville } from "next/font/google";
const Basker = Baskervville({ subsets: ["latin"], weight: ["400"] });

const Input = () => {
  return (
    <div className=" container_main border border-black border-5 h-[200px] flex flex-col justify-center items-center">
      <h2 className={`mb-4 text-[20px] ${Basker.className}`}>NewsLetter</h2>
      <h2 className="mb-6 text-[16px]">
        Subscribe to get daily updates on new drops & exciting deals{" "}
      </h2>
      <div className="flex gap-4">
        <input
          type="email"
          placeholder="Enter your Email"
          className={`container_main border border-black border-3 w-[250px] ${Basker.className}`}
        />
        <input
          type="submit"
          value="Subscribe"
          className={`py-2 px-4 bg-black text-white ${Basker.className}`}
        />
      </div>
    </div>
  );
};

export default Input;
