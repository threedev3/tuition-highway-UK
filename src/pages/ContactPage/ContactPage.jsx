import React from "react";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Helmet } from "react-helmet";

const ContactPage = ({ demoRef, handleNavClick }) => {
  return (
    <div>
      <Helmet>
        <title>
          Contact Us - Tuition Highway UK - Britain's Best Online Tutoring
          Service
        </title>
      </Helmet>
      <SubjectHeroSection
        title="Contact Us"
        // description="Paving the way with smart online tutoring solutions for gcse, A-Levels, IB & other Curriculums"
        btnText="Contact Now"
        handleNavClick={handleNavClick}
      />

      <div ref={demoRef}>
        <ContactForm
          demoRef={demoRef}
          firstString={"Contact Us For "}
          secondString={"More Details"}
          tagLine="Paving the way with smart online tutoring solutions"
        />
      </div>
    </div>
  );
};

export default ContactPage;
