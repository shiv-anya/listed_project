import React from "react";
import ProductInfo from "./ProductInfo";
import Schedule from "./Schedule";

const Footer = () => {
  return (
    <div className="flex">
      <ProductInfo />
      <Schedule />
    </div>
  );
};

export default Footer;
