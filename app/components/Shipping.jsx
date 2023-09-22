import React from "react";
import Shippingform from "./Shippingform";
import ShippingItem from "./ShippingItem";

const Shipping = () => {
  return (
    <div className="flex container_main w-[100%]">
      <Shippingform />
      <ShippingItem />
    </div>
  );
};

export default Shipping;
