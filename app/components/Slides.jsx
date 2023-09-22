import React from "react";
import Slide from "./Slide";

const Slides = () => {
  return (
    <div className="flex gap-6">
      <Slide delay={1000} />
      <Slide delay={1500} />
      <Slide delay={2000} />
      <Slide delay={2500} />
    </div>
  );
};

export default Slides;
