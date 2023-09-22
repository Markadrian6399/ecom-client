import React from "react";
import Image from "next/image";
import { BiMessageSquareX } from "react-icons/bi";

const ShopCarts = () => {
  return (
    <div>
      <hr />
      <div className="flex gap-2 justify-between mt-[20px] mb-[20px] mr-[35px] ml-[35px]">
        <div className="flex gap-4">
          <Image
            src="/images/shipcart/sc1.png"
            alt=""
            width={190}
            height={136}
          />
          <div className=" flex flex-col gap-4">
            <h3 className=" font-bold">Philomena ‘22</h3>
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
        <div className="flex flex-col gap-[]">
          <BiMessageSquareX size={30} />
          <h4 className="mt-[50px] font-medium">$35.95</h4>
        </div>
      </div>
      <hr />

      <hr />
      <div className="flex gap-2 justify-between mt-[20px] mb-[20px] mr-[35px] ml-[35px]">
        <div className="flex gap-4">
          <Image
            src="/images/shipcart/sc2.png"
            alt=""
            width={190}
            height={136}
          />
          <div className=" flex flex-col gap-4">
            <h3 className=" font-bold">Warped ‘99</h3>
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
        <div className="flex flex-col gap-[]">
          <BiMessageSquareX size={30} />
          <h4 className="mt-[50px] font-medium">$35.95</h4>
        </div>
      </div>
      <hr />

      <hr />
      <div className="flex gap-2 justify-between mt-[20px] mb-[20px] mr-[35px] ml-[35px]">
        <div className="flex gap-4">
          <Image
            src="/images/shipcart/sc3.png"
            alt=""
            width={190}
            height={136}
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

      <footer className="mt-10 mr-[30px] ml-[35px] h-[100px] flex justify-evenly">
        <div className="flex flex-col justify-center item-center gap-[20px]">
          <button className="bg-black w-[220px] h-[50px] flex justify-center items-center text-white">
            Proceed to checkout
          </button>
          <p className="text-[20px]  ml-5 after:border after:border-3 after:border-black after:mb-5 flex flex-col w-[200px]">
            Continue shopping
          </p>
        </div>
        <div>
          <p className="text-[grey] text-[20pxpx]">Products in cart : </p>
          <p className="text-[grey] text-[20pxpx]">Shipping : </p>
          <p className="text-[grey] text-[20pxpx]">Total :</p>
        </div>
        <div>
          <p className="text-[20px] font-light">3 items</p>
          <p className="text-[20px] font-light">$2.50</p>
          <p className="text-[20px] font-light">$114.00</p>
        </div>
      </footer>
    </div>
  );
};

export default ShopCarts;
