import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="hero conatainer">
        <div className="leftDiv">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES
          </p>
          <div className="hero-btn">
          <button className=" ShopBtn">Shop Now</button>
          <button className="CategoryBtn ">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-logo">
              <img src="./images/flipkart-logo.png"></img>
              <img src="./images/amazon-logo.png"></img>
            </div>
          </div>
        </div>
        <div className="rightDiv">
          <img src="./images/shoe_image.png"></img>
        </div>
      </div>
    </>
  );
}
