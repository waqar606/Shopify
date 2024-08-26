import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#E3EDF6] mt-4">
      <div className="container grid md:grid-cols-2 py-8 items-center">
        <div className="flex">
          <div className="max-w-[450px] space-y-4">
            <p class="text-topHeadingSecondary">
              Starting at <span class="font-bold">$999.00</span>
            </p>
            <h1 class="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
              The best note book collection 2023
            </h1>
            <h3 class="text-2xl font-['Oregano',cursive]">
              Exclusive offer <span class="text-red-600">-10%</span> off this
              week
            </h3>
            <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-800 hover:text-red-600">
              Shop Now{" "}
            </a>
          </div>
        </div>
        <div>
          <img className="ml-auto" src="/img/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
