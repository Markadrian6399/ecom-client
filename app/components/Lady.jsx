import React from "react";
import Ladybird from "./Ladybird";
import Image from "next/image";
const Lady = () => {
  return (
    <div className="h-[400px] bg-gray-300 relative mt-16 mb-[150px]">
      <div className="text-black  container_main flex justify-between pt-6 ">
        <h1 className="font-bold text-[30px] w-[300px]">
          TOP CREATORS OF THE WEEK
        </h1>
        <div className="flex gap-4">
          <div className=" bg-gray-400 h-[150px] w-[7px] rounded-full">
            <div className="bg-black w-[100%] h-[30px] mt-[120px] rounded-full"></div>
          </div>
          <div>
            <h3 className="mb-[15px] text-[16px]">Editorials</h3>
            <h3 className="mb-[15px] text-[16px]">Fashion</h3>
            <h3 className="mb-[15px] text-[16px]">Lifestyle</h3>
            <h3 className="mb-[15px] text-[16px]">Blueprint</h3>
          </div>
        </div>
      </div>
      <Ladybird />
      <div className="text-black container_main">
        <p className="w-[650px]">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <h1 className="font-bold text-[100px] ml-[600px]">1985</h1>
      </div>
    </div>
  );
};

export default Lady;
