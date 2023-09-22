import React from "react";
import { BiSliderAlt, BiChevronUp } from "react-icons/bi";
import Image from "next/image";
import { Baskervville } from "next/font/google";
import Link from "next/link";
const Basker = Baskervville({ subsets: ["latin"], weight: ["400"] });

const Gallerymarket = () => {
  return (
    <div className="flex container_main h-[860px] mt-9">
      <div className="flex-grow max-w-[200px] h-[100%] ">
        <div className="flex gap-3  items-center">
          <BiSliderAlt size={30} />
          <h3 className={`text-[30px] ${Basker.className}`}>Filter</h3>
        </div>
        <hr className="rounded-lg bg-[#8d8c8c6b] h-2" />
        <div className="mt-4 flex pl-5 items-center gap-4">
          <h4 className={` text-[20px] ${Basker.className}`}>By category</h4>
          <BiChevronUp />
        </div>
        <div className="mt-6">
          <div className={`pl-5 flex gap-2 mb-2 ${Basker.className}`}>
            <input type="checkbox" />
            <h6>Editorials</h6>
          </div>
          <div className={`pl-5 flex gap-2 mb-2 ${Basker.className}`}>
            <input type="checkbox" />
            <h6>Fashion</h6>
          </div>
          <div className={`pl-5 flex gap-2 mb-2 ${Basker.className}`}>
            <input type="checkbox" />
            <h6>Optics</h6>
          </div>
          <div className={`pl-5 flex gap-2 mb-2 ${Basker.className}`}>
            <input type="checkbox" />
            <h6>Art & Museum</h6>
          </div>
          <div className={`pl-5 flex gap-2 mb-2 ${Basker.className}`}>
            <input type="checkbox" />
            <h6>Nature</h6>
          </div>
        </div>
        <div className="mt-5 flex pl-5 items-center gap-4">
          <h4 className={` text-[15px] ${Basker.className}`}>By price</h4>
          <BiChevronUp />
        </div>
        <div
          className={`pl-5 flex gap-2 flex-col mb-2 ${Basker.className} mt-5`}
        >
          <h6 className="mb-5">$100.00 - $150.00</h6>
          <input type="range" />
        </div>
        <div className="mt-10 flex pl-5 items-center gap-4">
          <h4 className={` text-[15px] ${Basker.className}`}>By artist</h4>
          <BiChevronUp />
        </div>
        <div
          className={`pl-5 flex gap-2 flex-col mb-2 ${Basker.className} mt-5`}
        >
          <p>All</p>
          <hr className="w-5 bg-black h-1 mb-4" />
          <h6>Below $100.00</h6>
          <h6>$100.00 - $150.00</h6>
          <h6>$150.00 - $200.00</h6>
          <h6>Above $200.00</h6>
        </div>
        <div className="mt-10 flex pl-5 items-center gap-4">
          <h4 className={` text-[15px] ${Basker.className}`}>
            Collection year
          </h4>
          <BiChevronUp />
        </div>
      </div>
      <div className=" h-[100%] flex-grow ">
        <div className="h-[50%] ">
          <div className="dip_pix mt-1 flex justify-evenly">
            <div className="w-[170px] h-[250px] ">
              <Image src="/images/dip/d1.png" alt="" width={240} height={280} />
              <h6 className="mb-3">PHILOMENA ‘22</h6>
              <h4 className="text-[17px] font-semibold">$3.90</h4>
            </div>
            <div>
              <Link href="/marketplace/imagecom">
                <div className="w-[170px] h-[100px]">
                  <Image
                    src="/images/dip/d2.png"
                    alt=""
                    width={240}
                    height={280}
                  />
                  <h6 className="mb-3">BOOLEAN EGYPTIAN</h6>
                  <h4 className="text-[17px] font-semibold">$3.90</h4>
                </div>
              </Link>
            </div>
            <div>
              <div className="w-[170px] h-[250px]">
                <Image
                  src="/images/dip/d3.png"
                  alt=""
                  width={240}
                  height={280}
                />
                <h6 className="mb-3">BLANC</h6>
                <h4 className="text-[17px] font-semibold">$3.90</h4>
              </div>
            </div>
          </div>

          <div className="dip_pix mt-4 flex justify-evenly">
            <div className="w-[170px] h-[250px] ">
              <Image src="/images/dip/d4.png" alt="" width={240} height={280} />
              <h6 className="mb-3">ELLIPSIA</h6>
              <h4 className="text-[17px] font-semibold">$3.90</h4>
            </div>
            <div>
              <div className="w-[170px] h-[250px]">
                <Image
                  src="/images/dip/d5.png"
                  alt=""
                  width={240}
                  height={280}
                />
                <h6 className="mb-3">THE LAWMAKERS </h6>
                <h4 className="text-[17px] font-semibold">$3.90</h4>
              </div>
            </div>
            <div>
              <div className="w-[170px] h-[250px]">
                <Image
                  src="/images/dip/d6.png"
                  alt=""
                  width={240}
                  height={280}
                />
                <h6 className="mb-3">VEIL</h6>
                <h4 className="text-[17px] font-semibold">$3.90</h4>
              </div>
            </div>
          </div>

          <div className="dip_pix mt-4 flex justify-evenly">
            <div className="w-[170px] h-[250px] ">
              <Image src="/images/dip/d7.png" alt="" width={240} height={280} />
              <h6 className="mb-5">ALTERNATING</h6>
              <h4 className="text-[17px] font-semibold">$3.90</h4>
            </div>
            <div>
              <div className="w-[170px] h-[250px]">
                <Image
                  src="/images/dip/d8.png"
                  alt=""
                  width={240}
                  height={280}
                />
                <h6 className="mb-3">ROSEMARY ‘22</h6>
                <h4 className="text-[17px] font-semibold">$3.90</h4>
              </div>
            </div>
            <div>
              <div className="w-[170px] h-[250px]">
                <Image
                  src="/images/dip/d9.png"
                  alt=""
                  width={240}
                  height={280}
                />
                <h6 className="mb-3">BEVERLY</h6>
                <h4 className="text-[17px] font-semibold">$3.90</h4>
              </div>
            </div>
          </div>
          <div className="h-[50px] w-[100%] flex justify-center items-center mt-5">
            <button
              className="w-[100px] h-[30px] border border-1 border-black rounded-lg
           "
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallerymarket;
