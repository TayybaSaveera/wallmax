import React from "react";

function Hero() {
  return (
    <div
      className="hero w-full h-[440px] object-cover "
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <h1 className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent md:text-9xl text-6xl font-extrabold">
        WALLMAX
      </h1>
    </div>
  );
}

export default Hero;
