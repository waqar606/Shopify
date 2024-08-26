import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
const products = [
  {
    id: 0,
    img: "/img/headphone-1.png",
    category: "Headphones",
    title: "Gaming Headphone",
    price: "109.00",
  },
  {
    id: 1,
    img: "/img/mobile-1.png",
    category: "Mobile Tablets",
    title: "Galaxy Android Tablet",
    price: "300.00",
  },
  {
    id: 2,
    img: "/img/headphone-2.png",
    category: "Headphones",
    title: "Wireless Headphone",
    price: "105.00",
  },
  {
    id: 3,
    img: "/img/headphone-3.png",
    category: "Headphones",
    title: "Wireless Headphone",
    price: "199.00",
  },
  {
    id: 4,
    img: "/img/ipad-1.png",
    category: "Headphones",
    title: "Wireless Headphone",
    price: "199.00",
  },
  {
    id: 5,
    img: "/img/mobile-1.png",
    category: "Headphones",
    title: "Wireless Headphone",
    price: "199.00",
  },
  {
    id: 6,
    img: "/img/mobile-2.png",
    category: "Headphones",
    title: "Wireless Headphone",
    price: "199.00",
  },
  {
    id: 7,
    img: "/img/cpu-2.png",
    category: "Headphones",
    title: "Wireless Headphone",
    price: "199.00",
  },
];
const Trending = () => {
  return (
    <>
      <div className="container mt-32 mb-10">
        <div class="sm:flex justify-between items-center">
          <h2 class="text-4xl font-medium">Trending Products</h2>
          <div class="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
            <div class="text-black">New</div>
            <div>Featured</div>
            <div>Top Sellers</div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {products.map((el) => {
            return (
              <>
                <div className="border border-gray-200">
                  <div class="text-center border-b border-gray-200">
                    <img
                      class="inline-block"
                      src={el.img}
                      alt="Gaming Headphone"
                    />
                  </div>
                  <div className="px-8 py-4">
                    <p class="text-gray-500 text-[14px] font-medium">
                      {el.category}
                    </p>
                    <h2 class="font-medium">{el.title}</h2>
                    <div className="mt-3 flex text-[#FFB21D] items-center">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <p class="text-gray-600 text-[14px] ml-2">(3 Review)</p>
                    </div>
                    <div class="flex justify-between items-center mt-4">
                      <h2 class="font-medium text-accent text-xl">
                        {el.price}
                      </h2>
                      <div class="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent">
                        <AiOutlineShoppingCart />
                        Add To Cart
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* <div className="border border-gray-200">
            <div class="text-center border-b border-gray-200">
              <img
                class="inline-block"
                src="/img/headphone-1.png"
                alt="Gaming Headphone"
              />
            </div>
            <div className="px-8 py-4">
              <p class="text-gray-500 text-[14px] font-medium">Headphones</p>
              <h2 class="font-medium">Gaming Headphone</h2>
              <div className="mt-3 flex text-[#FFB21D] items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <p class="text-gray-600 text-[14px] ml-2">(3 Review)</p>
              </div>
              <div class="flex justify-between items-center mt-4">
                <h2 class="font-medium text-accent text-xl">$109.00</h2>
                <div class="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent">
                  <AiOutlineShoppingCart />
                  Add To Cart
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Trending;
