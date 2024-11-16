import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const PricingCard = ({ title, description, price, rateType, features, imageSrc, handleNavClick, demoRef }) => {
  return (
    <div className="relative rounded-2xl p-6 shadow-xl border-[0.5px] bg-white hover:bg-priceBg transition-colors duration-300 group">
      <div className="pb-8">
        <div className="flex items-center gap-5 mb-4">
          <img
            src={imageSrc}
            alt=""
            className="rounded-lg bg-[#ECEBFF] flex items-center justify-center p-4 w-16"
          />
          <h3 className="text-xl font-semibold text-headingColor group-hover:text-white">
            {title}
          </h3>
        </div>
        <p className="text-sm text-priceText max-w-xs group-hover:text-white xl:min-h-20 min-h-24">
          {description}
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex gap-2 items-end">
          <h3 className="text-5xl font-extrabold text-headingColor group-hover:text-white">
            £{price}
          </h3>
          <span className="text-headingColor group-hover:text-white">
            {rateType}
          </span>
        </div>
        <div className="space-y-4">
          <h4 className="font-medium group-hover:text-white">
            What&apos;s included
          </h4>
          <ul className="space-y-3 min-h-32">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-priceBg group-hover:bg-white rounded-full p-1 flex-shrink-0">
                  <CheckIcon className="w-5 text-white group-hover:text-headingColor" />
                </div>
                <span className="text-headingColor group-hover:text-white font-semibold">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full py-4 mt-4 bg-priceBg group-hover:bg-white group-hover:text-headingColor text-white rounded-full font-semibold" onClick={() => handleNavClick("Demo")}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
