import React from "react";
import Image from "next/image";
import { STIX_Two_Text } from "next/font/google";
const STIX = STIX_Two_Text({ subsets: ["latin"] });

const Boxphoto = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/bg/bgimg.png)",
        backgroundSize: "contain",
      }}
      className="container_main w-[100%] h-[450px] pt-12 flex justify-end flex-col"
    >
      <div className="flex pl-4">
        <div>
          <div className="flex gap-2 ml-6">
            <div className="rounded-full w-5 h-5 bg-white "></div>
            <h1
              className={`text-[30px] text-white ${STIX.className} w-[350px]`}
            >
              MONALISA REDEFINED IN STYLE.
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="text-[50px] text-white">01</h1>
            <div>
              <h5 className="text-white pb-2">
                Start on : 08:00 GTS . Monday{" "}
              </h5>
              <p className="text-white w-[550px]">
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-32 pl-5 item-center justify-between gap-8">
          <p className="underline text-white ">See more</p>
          <button className="border-2 border-white rounded-lg text-white r h-[32px] w-[120px]">
            Set a reminder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boxphoto;
