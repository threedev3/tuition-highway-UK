import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import CurriculumSection from "../../components/CurriculumSection/CurriculumSection";
import SubjectsList from "../../components/SubjectsList/SubjectsList";
import { Helmet } from "react-helmet";

const SubjectsPage = ({ demoRef, handleNavClick }) => {
  return (
    <div>
      <Helmet>
        <title>
          All Subjects - Tuition Highway UK - Britain's Best Online Tutoring
          Service
        </title>
      </Helmet>
      <SubHeroSection
        title="Explore Our Comprehensive Subject Offerings"
        description="Our expert tutors provide personalised support across all subjects from GCSE to A-Level, helping students achieve their target grades."
        handleNavClick={handleNavClick}
      />
      <SubjectsList handleNavClick={handleNavClick} />
      <CurriculumSection handleNavClick={handleNavClick} />
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

export default SubjectsPage;
