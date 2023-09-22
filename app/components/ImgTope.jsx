import React from "react";
import Link from "next/link";

const ImgTope = () => {
  return (
    <div>
      <div className="flex gap-[30px] container_main mt-9  justify-center items-center w-[100%] mb-9 ">
        <div>
          <Link
            href="/marketplace/ShoppingCart"
            className="text-[20px] text-[#80808091] hover:text-[#000000cf]  hover:after:w-[120px] hover:after:border hover:after:border-black hover:after:border-5 flex flex-col  "
          >
            Shopping Cart
          </Link>
        </div>
        <div>
          <Link
            href="/marketplace/shippingdetails"
            className="text-[20px] text-[#80808091] hover:text-[#000000cf] hover:after:w-[130px] hover:after:border hover:after:border-black hover:after:border-5 flex flex-col"
          >
            Shipping details
          </Link>
        </div>
        <div>
          <Link
            href="/marketplace/Payment details"
            className="text-[20px] text-[#80808091] hover:text-[#000000cf] hover:after:w-[135px] hover:after:border hover:after:border-black hover:after:border-5 flex flex-col"
          >
            Payment details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImgTope;
