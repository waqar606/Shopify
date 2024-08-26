import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
const data = [
  {
    icon: <TbTruckDelivery Delivery className="text-4x1" />,
    title: "Free Delivery",
    desc: "Orders from all item",
  },
  {
    icon: <RiRefund2Fill className="text-4x1" />,
    title: "Return & Refund",
    desc: "Money back guarante",
  },

  {
    icon: <MdSupportAgent className="text-4x1" />,
    title: "Support 24/7",
    desc: "Contact Us 24 hours a day",
  },
  {
    icon: <RiRefund2Fill className="text-4x1" />,
    title: "24 hours Support",
    desc: "Call any time",
  },
];
const FeautureSec = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
        <div className=" bg-gray-300">
          <div className="flex gap-3 items-center py-4 px-2">
            <div className="text-4xl">
              <TbTruckDelivery />
            </div>
            <div>
              <h2 class="font-medium text-xl">Support 24/7</h2>
              <p class="text-gray-600">Contact Us 24 hours a day</p>
            </div>
          </div>
        </div>
        <div className=" bg-gray-300">
          <div className="flex gap-3 items-center py-4 px-2">
            <div className="text-4xl">
              <TbTruckDelivery />
            </div>
            <div>
              <h2 class="font-medium text-xl">Support 24/7</h2>
              <p class="text-gray-600">Contact Us 24 hours a day</p>
            </div>
          </div>
        </div>
        <div className=" bg-gray-300">
          <div className="flex gap-3 items-center py-4 px-2">
            <div className="text-4xl">
              <TbTruckDelivery />
            </div>
            <div>
              <h2 class="font-medium text-xl">Support 24/7</h2>
              <p class="text-gray-600">Contact Us 24 hours a day</p>
            </div>
          </div>
        </div>
        <div className=" bg-gray-300">
          <div className="flex gap-3 items-center py-4 px-2">
            <div className="text-4xl">
              <TbTruckDelivery />
            </div>
            <div>
              <h2 class="font-medium text-xl">Support 24/7</h2>
              <p class="text-gray-600">Contact Us 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeautureSec;
