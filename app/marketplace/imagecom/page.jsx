import ImageGallery from "@/app/components/ImageGallery";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:8000/api/products");
  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }
  return res.json();
}

const page = () => {
  const data = getData();
  console.log("data");
  return (
    <div>
      <ImageGallery />
    </div>
  );
};

export default page;
