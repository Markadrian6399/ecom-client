import React from "react";
import Image from "next/image";

const Shippingform = () => {
  return (
    <div>
      <form
        action=""
        className="p-[20px] w-[100%] h-[590px]"
      >
        <div className="mb-[20px]">
          <p className="text-[grey] mb-[10px]">Your email</p>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-[100%] border boder-3 border-[grey] h-[30px] mb-[10px] rounded-lg"
          />
          <div className="flex gap-[10px]">
            <input type="checkbox" />
            <h6 className="text-[gray]">
              Get updates about new drops & exclusive offers
            </h6>
          </div>
        </div>

        <div className="mb-[20px]">
          <p className="text-[gray] mb-[10px]">Your FullName</p>
          <input
            type="text"
            placeholder="john doe"
            className="w-[100%] border boder-3 border-[grey] h-[30px] mb-[10px]
          rounded-lg"
          />
        </div>
        <div className="mb-[20px]">
          <p className="text-[gray]">Choose a wallet</p>
          <select
            name="select wallet"
            id=""
            className="w-[100%] border boder-3 border-[grey] h-[30px]
          rounded-lg"
          >
            <option value="select"></option>
            <option value="MetaMask">MetaMask</option>
            <option value="Coinbase">Coinbase</option>
            <option value="phantom">phantom</option>
            <option value="walletConnet">WalletConnet</option>
          </select>
        </div>
        <div className="mb-[20px]">
          <p className="text-[gray]">city</p>
          <select
            name="city"
            id=""
            className="w-[100%] border boder-3 border-[grey] h-[30px]
          rounded-lg"
          >
            <option value=""></option>
            <option value="califonia">califonia</option>
            <option value="chicago">chicago</option>
            <option value="kaduna">kaduna</option>
            <option value="narayi">narayi</option>
          </select>
        </div>

        <div className="flex gap-6 mb-[40px]">
          <div>
            <p className="text-[gray]">country</p>
            <select
              name="Country"
              id=""
              className="w-[100%] border boder-3 border-[grey] h-[30px]
          rounded-lg"
            >
              <option value=""></option>
              <option value="Nigeria">Nigeria</option>
              <option value="USA">USA</option>
              <option value="Colombia">Colombia</option>
              <option value="Cuba">Cuba</option>
              <option value="Algeria">Algeria</option>
            </select>
          </div>
          <div>
            <p className="text-[gray]">poster code</p>
            <input
              type="text"
              placeholder="0000"
              className="w-[100%] border boder-3 border-[grey] h-[30px]
          rounded-lg"
            />
          </div>
        </div>

        <div className="mb-[20px]">
          <p className="text-[gray]">Phone</p>
          <input
            type="text"
            placeholder="+1 000-342-(29)"
            className="w-[100%] border boder-3 border-[grey] h-[30px]
          rounded-lg"
          />
        </div>
        <div className="flex item-center justify-center">
          <button className=" text-white bg-black w-[200px] h-[30px]">
            Proceed to payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shippingform;
