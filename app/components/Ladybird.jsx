import React from "react";
import Image from "next/image";

const Ladybird = () => {
  return (
    <div className="container_main w-[826px] h-[450px] absolute top-[30px] left-[370px]">
      <div className="h-[450px] bg-slate-2ab00">
        <Image src="/images/Lady/L1.png" alt="" width={450} height={450} />
      </div>
    </div>
  );
};

export default Ladybird;
