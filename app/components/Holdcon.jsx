import React from "react";
import Image from "next/image";
import { STIX_Two_Text } from "next/font/google";
const STIX = STIX_Two_Text({ subsets: ["latin"] });

const Holdcon = ({ item, i }) => {
  const styles = {
    itemOrder: {
      order: i % 2 == 0 ? "2" : "1",
    },
  };
  return (
    <div>
      <hr className="mb-5 mt-3 p-6" />
      <div className="flex justify-between gap-8 ">
        <div style={{ order: i % 2 == 0 ? "2" : "1" }}>
          <Image src={item.imageUrl} alt="" width={610} height={305} />
        </div>
        <div style={{ order: i % 2 == 0 ? "1" : "2" }}>
          <h1 className={`mb-3 text-[20px] ${STIX.className}`}>{item.title}</h1>
          <p className="max-jw-[540px] mb-10">{item.primarytest}</p>
          <div
            // className="flex justify-evenly"
            style={{ justifyContent: i % 2 == 0 ? "2" : "1" }}
          >
            <div className="flex relative items-center">
              <div className="hover:border:none hover:z-30">
                <Image
                  src="/images/Elite/E1.png"
                  alt=""
                  width={51}
                  height={51}
                />
              </div>
              <div className="absolute left-7 hover:border:none hover:z-30">
                <Image
                  src="/images/Elite/E2.png"
                  alt=""
                  width={51}
                  height={51}
                />
              </div>
              <div className="absolute left-14 hover:border:none hover:z-30">
                <Image
                  src="/images/Elite/E3.png"
                  alt=""
                  width={51}
                  height={51}
                />
              </div>
              <div className="absolute left-20  hover:border:none hover:z-30">
                <Image
                  src="/images/Elite/E4.png"
                  alt=""
                  width={51}
                  height={51}
                />
              </div>
              <h3 className="absolute left-36">64 major creators</h3>
              <div className="rounded-full text-[50px] absolute right-5 border  border-5 border-black w-12 h-12 flex items-center justify-center pb-2">
                &rarr;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdcon;
