import React from "react";
import Image from "next/image";
import { BiMessageSquareX } from "react-icons/bi";

const ShippingItem = () => {
  return (
    <div className=" w-[50%] ml-[20px]">
      <hr />
      <div className="flex justify-between">
        <div className=" gap-7 flex ">
          <Image
            src="/images/sidepay/sid1.png"
            alt=""
            width={166}
            height={196}
          />
          <div className=" flex flex-col gap-4">
            <h3 className=" font-bold"> Ellipsia </h3>
            <p className="text-gray-400">Clearamane</p>
            <p>
              Size:
              <span className=" font-bold">200 ft</span>
            </p>
            <div className=" flex gap-5">
              <h2 className="text-[25px]"> - </h2>
              <h2 className="text-[25px]"> 1 </h2>
              <h2 className="text-[25px]"> + </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <BiMessageSquareX size={30} />
          <h4 className="mt-[50px] font-medium">$35.95</h4>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <div className=" gap-7 flex ">
          <Image
            src="/images/sidepay/sid2.png"
            alt=""
            width={166}
            height={196}
          />
          <div className=" flex flex-col gap-4">
            <h3 className=" font-bold"> Ellipsia </h3>
            <p className="text-gray-400">Clearamane</p>
            <p>
              Size:
              <span className=" font-bold">200 ft</span>
            </p>
            <div className=" flex gap-5">
              <h2 className="text-[25px]"> - </h2>
              <h2 className="text-[25px]"> 1 </h2>
              <h2 className="text-[25px]"> + </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <BiMessageSquareX size={30} />
          <h4 className="mt-[50px] font-medium">$35.95</h4>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <div className=" gap-7 flex ">
          <Image
            src="/images/sidepay/sid3.png"
            alt=""
            width={166}
            height={196}
          />
          <div className=" flex flex-col gap-4">
            <h3 className=" font-bold"> Ellipsia </h3>
            <p className="text-gray-400">Clearamane</p>
            <p>
              Size:
              <span className=" font-bold">200 ft</span>
            </p>
            <div className=" flex gap-5">
              <h2 className="text-[25px]"> - </h2>
              <h2 className="text-[25px]"> 1 </h2>
              <h2 className="text-[25px]"> + </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <BiMessageSquareX size={30} />
          <h4 className="mt-[50px] font-medium">$35.95</h4>
        </div>
      </div>
      <div className="flex gap-9">
        <div>
          <p className="text-[grey] text-[20pxpx]">Products in cart : </p>
          <p className="text-[grey] text-[20pxpx]">Shipping : </p>
          <p className="text-[grey] text-[20pxpx]">Total :</p>
        </div>
        <div>
          <p className="text-[15px] font-light">3 items</p>
          <p className="text-[15px] font-light">$2.50</p>
          <p className="text-[15px] font-light">$114.00</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingItem;
