import React, { useState } from "react";
import footerLogo from "../../assets/img/footerLogo.png";
import { visa, master, applePay } from "../../assets/img/images.js";
import { products, company, resources, socialIcons } from "../../data/data.js";
import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#031338] relative pt-12 pb-6 sm:px-12 px-6 max-w-full overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center gap-2">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-12 lg:gap-3 gap-10 border-b-2 border-b-footerBorder pb-8">
          <div className="flex flex-col items-start gap-6">
            <div className="">
              <a href={"/"}>
                <img
                  src={footerLogo}
                  alt=""
                  className="object-cover cursor-pointer"
                  onClick={scrollToTop}
                  width={150}
                />
              </a>
            </div>
            <div className="xl:max-w-[280px] max-w-[260px] text-footerText xl:text-base text-sm">
              <p>
                Achieve top marks with Tuition Highway's expert online tutoring,
                tailored for all subjects and UK curricula!
              </p>
            </div>
            <div className="flex gap-5 items-center ">
              {socialIcons.map((item, index) => (
                <a
                  href={item.to}
                  target="_blank"
                  key={index}
                  className="border-2 border-white p-3 rounded-full flex-shrink-0"
                >
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="cursor-pointer w-6"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-white xl:text-xl text-lg">Quick Links</h3>
            {company.map((comp, index) => (
              <a
                className="text-footerText cursor-pointer xl:text-base text-sm"
                key={index}
                href={comp.to}
              >
                {comp.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-white xl:text-xl text-lg">Quick Links</h3>
            {resources.map((resource, index) => (
              <a
                className="text-footerText cursor-pointer xl:text-base text-sm"
                key={index}
                href={resource.to}
              >
                {resource.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-white xl:text-xl text-lg">Contact Us</h3>
            <div className="flex gap-3 items-center">
              <MapPinIcon
                className="xl:w-5 lg:w-4 w-4 flex-shrink-0"
                color="#dadada"
              />
              <p className="text-footerText xl:text-base text-sm xl:max-w-xs max-w-[260px]">
                4D eLearning Limited, London, UK
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <PhoneIcon
                className="xl:w-5 lg:w-4 w-4 flex-shrink-0"
                color="#dadada"
              />
              <p className="text-footerText xl:text-base text-sm max-w-xs">
                +447733091518
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <EnvelopeIcon
                className="xl:w-5 lg:w-4 w-4 flex-shrink-0"
                color="#dadada"
              />
              <p className="text-footerText xl:text-base text-sm max-w-xs">
                hello@tuitionhighway.co.uk
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-4 flex flex-col gap-8 py-2">
          <div>
            <p className="text-footerText xl:text-base text-sm">
              © {currentYear} Tuition Highway. All rights reserved.
            </p>
          </div>

          <div className="flex gap-10 items-center">
            <img src={visa} alt="" className="object-contain" />
            <img src={master} alt="" className="object-contain" />
            <img src={applePay} alt="" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
