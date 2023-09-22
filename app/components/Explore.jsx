import React from "react";

const Explore = () => {
  return (
    <div className="bg-white h-[50px] mt-6">
      <hr className="color-gray shadow-black mb-3" />
      <div className="container_main flex justify-between">
        <h2 className=" text-[20px]">Explore markteplace</h2>
        <div className="rounded-full border-3 border border-black flex justify-center item-center w-9 h-9 pt-1 text-[18px]">
          &rarr;
        </div>
      </div>
      <hr className="color-gray shadow-black mb-3" />
      <div className=" container_main flex justify-between">
        <h4 className=" text-[20px]">See Auction</h4>
        <div className="rounded-full border-3 border border-black flex justify-center item-center w-9 h-9 pt-1 text-[18px]">
          &rarr;
        </div>
      </div>
    </div>
  );
};

export default Explore;
