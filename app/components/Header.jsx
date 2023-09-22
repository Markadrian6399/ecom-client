import React from "react";
import Link from "next/link";
import { STIX_Two_Text } from "next/font/google";
import { FaShoppingCart, FaBell, FaSistrix } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineBell } from "react-icons/ai";
const STIX = STIX_Two_Text({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="flex justify-between py-5 items-center  ">
      <div className={`font-[700 text-[42px] font-bold`}>MkArt</div>
      <div className="flex gap-6 text-[24px] font-[400]">
        <Link href="/">Home</Link>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/">Auctions</Link>
        <Link href="/">Drop</Link>
      </div>
      <div className="flex gap-8 ">
        <div>
          <FaSistrix size={28} />
        </div>
        <div className="cart">
          <AiOutlineShoppingCart size={28} />
        </div>
        <div>
          <AiOutlineBell size={28} />
        </div>
      </div>
    </header>
  );
};

export default Header;
