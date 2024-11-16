import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import Pricing from "../../components/Pricing/Pricing";
import { Helmet } from "react-helmet";

const PricingPage = ({ demoRef, handleNavClick }) => {
  return (
    <div>
      <Helmet>
        <title>
          Pricing - Tuition Highway UK - Britain's Best Online Tutoring Service
        </title>
      </Helmet>
      <SubHeroSection
        demoRef={demoRef}
        title="Pricing"
        description="we offer flexible and competitive pricing plans tailored to meet the needs of students at different academic levels."
        handleNavClick={handleNavClick}
        btnText="Get Started"
      />
      <Pricing demoRef={demoRef} handleNavClick={handleNavClick} />
      <div ref={demoRef}>
        <ContactForm
          demoRef={demoRef}
          firstString={"Request a Free "}
          secondString={"Demo"}
        />
      </div>
    </div>
  );
};

export default PricingPage;
