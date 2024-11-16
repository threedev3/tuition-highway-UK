import React, { useEffect } from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ThankYou from "../../components/ThankYou/ThankYou";
// import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ThankYouPage = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.location.href = "/";
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div>
      <Helmet>
        <title>
          Thank You - Tuition Highway UK - Britain's Best Online Tutoring
          Service
        </title>
      </Helmet>
      <SubHeroSection
        title="We've Received Your Message!"
        description="Our team will be reviewing your inquiry and will respond promptly. In the meantime, feel free to explore our website."
        btnText="Back To Home"
      />
      <ThankYou />
    </div>
  );
};

export default ThankYouPage;
