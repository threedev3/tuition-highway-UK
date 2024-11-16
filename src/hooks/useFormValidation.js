import { useState } from "react";

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateDemo = (values) => {
    const newErrors = {};

    if (!values.parentName) {
      newErrors.parentName = "Parent Name is required";
    }

    if (!values.studentName) {
      newErrors.studentName = "Student Name is required";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!values.phone) {
      newErrors.phone = "Phone Number is required";
    }

    if (!values.city) {
      newErrors.city = "City is required";
    }

    if (!values.selectedSubject || values.selectedSubject.length === 0) {
      newErrors.selectedSubject = "Subject is required";
    }

    if (!values.selectedGrade) {
      newErrors.selectedGrade = "Grade is required";
    }

    if (!values.selectedGoal || values.selectedGoal.length === 0) {
      newErrors.selectedGoal = "Goal is required";
    }
    if (!values.selectedSchedule) {
      newErrors.selectedSchedule = "Schedule is required";
    }
    if (!values.selectedTime) {
      newErrors.selectedTime = "Preferred Time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateTutor = (values) => {
    const newErrors = {};

    if (!values.fullName) {
      newErrors.fullName = "Full Name is required";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!values.phone) {
      newErrors.phone = "Phone Number is required";
    }

    if (!values.city) {
      newErrors.city = "City is required";
    }

    if (!values.country) {
      newErrors.country = "Country is required";
    }

    if (!values.selectedSubject || values.selectedSubject.length === 0) {
      newErrors.selectedSubject = "Subject is required";
    }

    if (!values.selectedGrade) {
      newErrors.selectedGrade = "Grade is required";
    }

    if (!values.qualification) {
      newErrors.qualification = "Qualification is required";
    }
    if (!values.teachingExperience) {
      newErrors.teachingExperience = "Teaching Experience is required";
    }
    if (!values.remunerationPerHour) {
      newErrors.remunerationPerHour = "Remuneration Per Hour is required";
    }
    if (!values.reasonforTeach) {
      newErrors.reasonforTeach = "Reason is required";
    }
    // if (!values.uploadedResume || values.uploadedResume.length === 0) {
    //   newErrors.uploadedResume = "Resume and Cover letter are required";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateContactForm = (values) => {
    const newErrors = {};

    if (!values.fullName) {
      newErrors.fullName = "Full Name is required";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!values.phone) {
      newErrors.phone = "Phone Number is required";
    }

    if (!values.city) {
      newErrors.city = "City is required";
    }

    if (!values.country) {
      newErrors.country = "Country is required";
    }

    if (!values.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateDemo, validateTutor, validateContactForm };
};

export default useFormValidation;