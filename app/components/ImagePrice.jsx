import React from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImagePrice = () => {
  return (
    <div>
      <div className="flex w-[100%] h-[640px] border border-3 border-black mb-10 container_main">
        <div className="h-[100%] w-[400px] border border-3 border-black">
          <div className="m-[20px]">
            <Image src="/images/blon/bl.png" alt="" width={340} height={280} />
          </div>
        </div>
        <div className="h-[100%] w-[580px] border border-3 border-black">
          <div className="flex gap-4 w-[100%] h-[100px] border-b border-3 border-black item-center justify-center  pt-[20px]">
            <h1 className="text-[40px] font-bold">Boolean Egyptian</h1>
            <div className="flex item-center justify-center gap-1">
              <Image
                src="/images/vector/V1.png"
                alt=""
                width={30}
                height={10}
                style={{ height: "40px" }}
              />
              <h3 className="text-[20px] font-semibold">0.09</h3>
            </div>
          </div>
          <div className="h-[300px] w-[100%] border-b border-3 border-black p-[20px]">
            <h2 className="text-[25px] font-light  mb-2">
              Creator :{" "}
              <span className="text-blue-500 underline font-medium">
                Ali Dawa
              </span>
            </h2>
            <h6 className="text-[20px] mb-2">Made in Italy</h6>
            <h4 className="text-[20px] font-semibold mb-2">
              Total views: <span className="font-light">1.7K views</span>
            </h4>
            <div className="flex gap-2 mb-7">
              <h3 className="text-[20px] font-semibold">-</h3>
              <h3 className="text-[20px] font-semibold">1</h3>
              <h3 className="text-[20px] font-semibold">+</h3>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <button className="h-[40px] w-[130px] bg-black text-white">
                Add to cart <span>&rarr;</span>
              </button>
              <button className="border border-3 border-black h-[40px] w-[50px] flex justify-center items-center">
                {" "}
                <BiHeart size={40} />{" "}
              </button>
            </div>
          </div>
          <div className="border-b border-3 border-black flex justify-between p-[30px]">
            <h3>Description</h3>
            <FaAngleDown />
          </div>
          <div className="border-b border-3 border-black flex justify-between p-[30px]">
            <h3>Listings</h3>
            <FaAngleDown />
          </div>
          <div className=" flex justify-between p-[30px]">
            <h3>Status</h3>
            <FaAngleDown />
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[50px] flex justify-between p-[20px] items-center bg-white shadow-2xl mb-8 container_main">
        <h4>Explore more from this collection</h4>
        <div className="flex gap-2">
          <div className="rounded-full h-10 w-10 border border-3 border-black flex items-center justify-center">
            <FaAngleLeft />
          </div>
          <div className="rounded-full h-10 w-10 border border-3 border-black flex items-center justify-center">
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="flex gap-6 mb-6">
        <div className="h-[370px] w-[350px] border border-3 border-[#89878798]">
          <div className="flex justify-end w-[100%]">
            <BiHeart size={20} />
          </div>
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/images/mslide/m3.png"
              alt=""
              width={300}
              height={150}
            />
          </div>
          <div className="flex justify-between pr-7 pl-7">
            <h5 className="text-[20px] font-semibold">Sassy</h5>
            <div className="flex gap-2">
              <Image
                src="/images/vector/V1.png"
                alt=""
                width={20}
                height={10}
                style={{ height: "20px" }}
              />
              <h3>3.25</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[370px] w-[350px] border border-3 border-[#89878798]">
            <div className="flex justify-end w-[100%]">
              <BiHeart size={20} />
            </div>
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/mslide/m2.png"
                alt=""
                width={300}
                height={150}
              />
            </div>
            <div className="flex justify-between pr-7 pl-7">
              <h5 className="text-[20px] font-semibold">Escape</h5>
              <div className="flex gap-2">
                <Image
                  src="/images/vector/V1.png"
                  alt=""
                  width={20}
                  height={10}
                  style={{ height: "20px" }}
                />
                <h3>0.05</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[370px] w-[350px] border border-3 border-[#89878798]">
            <div className="flex justify-end w-[100%]">
              <BiHeart size={20} />
            </div>
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/mslide/m3.png"
                alt=""
                width={300}
                height={150}
              />
            </div>
            <div className="flex justify-between pr-7 pl-7">
              <h5 className="text-[20px] font-semibold">Sassy</h5>
              <div className="flex gap-2">
                <Image
                  src="/images/vector/V1.png"
                  alt=""
                  width={20}
                  height={10}
                  style={{ height: "20px" }}
                />
                <h3>2.75</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_main w-[100%] flex justify-center items-center">
        <button className="rounded-lg w-[100px] h-[50px] border border-3 boder-black">
          Explore all
        </button>
      </div>
    </div>
  );
};

export default ImagePrice;
