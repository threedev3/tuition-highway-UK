import React from "react";
import PricingCard from "./PricingCard";
import { aLevelPlans, plans } from "../../data/data";

const Pricing = ({demoRef, handleNavClick}) => {
  return (
    <div className="relative md:py-20 py-12 sm:px-12 px-6 max-w-full bg-[#F8F8F8]">
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-20 gap-8">
        <div className="text-center space-y-4 ">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-orangeHeading w-[16%]" />
            <h2 className="xl:text-[30px] xl:leading-tight md:text-2xl sm:text-2xl text-xl leading-none font-semibold text-headingColor">
              Choose Your Plan
            </h2>
            <div className="h-px bg-orangeHeading w-[16%]" />
          </div>
          <h1 className="xl:text-[42px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl leading-none font-bold text-headingColor">
            GCSE & Secondary Level Packages
          </h1>
        </div>

        <div className="grid xl:gap-8 gap-6 lg:grid-cols-3 place-items-center">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} demoRef={demoRef} handleNavClick={handleNavClick} />
          ))}
        </div>

        <div className="h-[0.5px] bg-black/10 w-[80%] mx-auto"></div>

        <div className="text-center space-y-4 ">
          <h2 className="xl:text-[30px] xl:leading-tight md:text-2xl sm:text-2xl text-xl leading-none font-semibold text-headingColor">A-Level Packages</h2>
          <p className="lg:text-lg sm:text-base text-sm font-normal max-w-4xl mx-auto text-headingColor">
            Our A-level packages cater to the increased demands of advanced-level studies, with a small price adjustment to reflect the depth of support required.
          </p>
        </div>

        <div className="grid xl:gap-8 gap-6 lg:grid-cols-3 place-items-center">
          {aLevelPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} demoRef={demoRef} handleNavClick={handleNavClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
