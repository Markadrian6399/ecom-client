import React from "react";
import { BiEnvelope, BiCurrentLocation } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="mt-14">
      <div className="flex justify-evenly items-center mb-10">
        <div className="font-bold text-[20px]">MKArt.</div>
        <div className="text-[20px]">
          <h4 className="mb-5">Home</h4>
          <h4 className="mb-5">Marketplace</h4>
          <h4 className="mb-5">Auctions</h4>
          <h4>Drops.</h4>
        </div>
        <div className="text-[20px]">
          <h4 className="mb-5">Blog</h4>
          <h4 className="mb-5">Wallets</h4>
          <h4 className="mb-5">Rates</h4>
          <h4>High bids</h4>
        </div>
        <div>
          <div className="flex gap-3 text-[20px] mb-5 items-center ">
            <BiEnvelope />
            <h3>markodiba699@gmail.com</h3>
          </div>
          <div className="flex gap-3 text-[20px] items-center ">
            <BiCurrentLocation />
            <h3>Kaduna,Nigeria</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h6>MKArtstudios © 2022. copy right.</h6>
      </div>
    </div>
  );
};

export default Footer;
