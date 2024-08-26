import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="pt-4 bg-white sticky">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 class="text-4xl font-bold">Logo</h1>
          <div className="max-w-[500px] w-full relative hidden lg:flex ">
            <input
              type="text"
              className="border-2 border-gray-300 px-6 py-2 w-full outline-none"
              placeholder="Search for products..."
            />
            <div class="bg-accents text-white text-[26px] grid place-items-center px-4">
              <FaSearch />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <div class="md:flex gap-3 hidden">
              <div className="border-2 rounded-full text-[32px] w-[50px] h-[50px] grid place-items-center">
                <AiOutlineUser />
              </div>
              <div>
                <p class="text-gray-500">Hello, Sign in</p>
                <p class="font-medium">Your Account</p>
              </div>
            </div>
            <div class="text-gray-500 text-[32px] relative">
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className="border-b border-black pt-3"></div>
      </div>
    </div>
  );
};

export default Navbar;
