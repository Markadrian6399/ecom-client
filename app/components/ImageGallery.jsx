import Link from "next/link";
import React from "react";
import ImagePrice from "./ImagePrice";

const ImageGallery = () => {
  return (
    <div>
      <dir className="flex gap-2 container_main">
        <Link href="https://home.com/">Home /</Link>
        <Link href="https://MarketPlace/">MarketPlace /</Link>
        <Link href="https://Editorials/">Editorial /</Link>
        <Link href="https://PHILOMENA ‘22">PHILOMENA ‘22 </Link>
      </dir>
      <ImagePrice />
    </div>
  );
};

export default ImageGallery;
