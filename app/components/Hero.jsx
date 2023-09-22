import React from "react";
import { Ysabeau } from "next/font/google";
import Slides from "./Slides";
const ysa = Ysabeau({
  subsets: ["latin"],
  weight: ["600"],
  style: "italic",
});

const Hero = () => {
  return (
    <>
      <section className="container_main px-6 mt-14">
        <div>
          <h1 className={`${ysa.className} text-[60px] text-center`}>
            Photography is poertry <br /> & beautiful untold stories
          </h1>
          <p className="font-[400] text-[24px] mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis, quam ipsa nobis voluptas earum pariatur. Itaque minus
            nam maxime porro eaque dolorum iste id incidunt!
          </p>
        </div>
      </section>
      <Slides />
    </>
  );
};

export default Hero;
