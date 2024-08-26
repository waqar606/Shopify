import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="grid lg:grid-cols-[66%,34%] gap-4 pr-[15px]">
          <div className="bg-[url(/img/banner3.jpg)] h-[200px] md:h-[260px] bg-cover bg-center rounded-xl p-8 md:p-16">
            <p class="text-topHeadingSecondary text-xl font-medium">
              Sale 20% off all store
            </p>
            <h2 class="text-topHeadingPrimary font-bold text-xl sm:text-3xl max-w-[240px]">
              Smartphone BLU G91 Pro 2023
            </h2>
            <a
              class=" mt-6 hover:text-accent text-topHeadingSecondary font-medium"
              href="#"
            >
              Shop Now
            </a>
          </div>
          <div class="h-[260px] bg-[url(/img/banner2.png)] bg-cover bg-center rounded-xl hidden lg:block"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
