import React from "react";
import { useParams } from "react-router-dom";

import CurriculumPage from "./pages/CurriculumPage/CurrculumPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { curriculumOffering, subjectsOffering } from "./data/data";
import SubjectDetails from "./pages/SubjectDetails/SubjectDetails";

const SlugRoute = ({ demoRef, handleNavClick }) => {
  const { slug } = useParams();

  const curriculum = curriculumOffering.find((c) => c.slug === slug);
  if (curriculum) {
    return <CurriculumPage demoRef={demoRef} handleNavClick={handleNavClick} />;
  }
  const subject = subjectsOffering.find((s) => s.slug === slug);
  if (subject) {
    return <SubjectDetails demoRef={demoRef} handleNavClick={handleNavClick} />;
  }

  return <NotFoundPage />;
};

export default SlugRoute;