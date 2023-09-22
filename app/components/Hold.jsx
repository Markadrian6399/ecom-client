import React from "react";
import Holdcon from "./Holdcon";
import { featured } from "../asset/featured";
const Hold = () => {
  return (
    <div className="container_main">
      <h2 className="text-[25px] ">Featured products</h2>
      {featured.map((item, i) => {
        return <Holdcon key={i} item={item} i={i + 1} />;
      })}
    </div>
  );
};

export default Hold;
