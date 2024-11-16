import React, { useState } from "react";
import {
  customStyles,
  selectedCountries,
  subjectsOffer,
} from "../../data/data";
import useFormValidation from "../../hooks/useFormValidation";
import { PhoneInput } from "react-international-phone";
import Select from "react-select";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import toast from "react-hot-toast";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

const TutorForm = () => {
  const { errors, validateTutor } = useFormValidation();
  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    country: null,
    selectedSubject: null,
    selectedGrade: null,
    qualification: "",
    teachingExperience: "",
    remunerationPerHour: "",
    uploadedResume: [],
    reasonforTeach: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone) => {
    setFormValues((prev) => ({ ...prev, phone }));
  };

  const handleSelectorChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   console.log("Files", files);

  //   const maxSize = 2 * 1024 * 1024; // 2MB max size per file

  //   const validFiles = files.filter((file) => {
  //     if (file.size > maxSize) {
  //       toast.error(`File ${file.name} is too large. Maximum size is 2MB.`);
  //       return false;
  //     }
  //     return true;
  //   });

  //   console.log("VAlid Files", validFiles);

  //   if (validFiles.length > 0) {
  //     setFormValues((prev) => ({
  //       ...prev,
  //       uploadedResume: [...prev.uploadedResume, ...validFiles],
  //     }));
  //   }
  // };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const maxSize = 2 * 1024 * 1024; // 2MB max size per file
    const invalidFiles = [];
    const validFiles = files.filter((file) => {
      if (file.size > maxSize) {
        invalidFiles.push(file.name);
        return false;
      }
      return true;
    });

    if (invalidFiles.length > 0) {
      toast.error(
        `The following files are too large: ${invalidFiles.join(", ")}`
      );
    }
    setFormValues((prev) => ({
      ...prev,
      uploadedResume: [
        ...prev.uploadedResume.filter(
          (existingFile) =>
            !validFiles.some((file) => file.name === existingFile.name)
        ),
        ...validFiles,
      ],
    }));
  };
  const validatePhoneNumber = () => {
    try {
      const parsedNumber = phoneUtil.parseAndKeepRawInput(
        formValues.phone,
        formValues.country?.value || "GB" // Default to GB if no country selected
      );
      return phoneUtil.isValidNumber(parsedNumber);
    } catch (error) {
      return false;
    }
  };

  const validateStep = (step) => {
    const fieldsByStep = {
      1: ["fullName", "email", "phone", "city", "country"],
      2: ["selectedSubject", "selectedGrade"],
    };

    const stepFields = fieldsByStep[step];
    const errorsFound = stepFields.some((field) => {
      if (field === "phone" && !validatePhoneNumber()) {
        toast.error("Please enter a valid phone number.");
        return true;
      } else if (!formValues[field]) {
        toast.error(`Please fill out the ${field} field.`);
        return true;
      }
      return false;
    });
    return !errorsFound;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep < 3) {
      handleNext();
    } else if (validateTutor(formValues)) {
      const dynamicFields = JSON.stringify({
        phone_number: formValues.phone,
        city: formValues.city,
        country: formValues.country?.label || null,
        grade: formValues.selectedGrade?.label || null,
        qualification: formValues.qualification,
        teaching_experience: formValues.teachingExperience,
        remuneration_per_hour: formValues.remunerationPerHour,
        applicant_intro: formValues.reasonforTeach,
        subjects: formValues.selectedSubject.map((subject) => subject.label),
      });

      // Create FormData instance
      const formData = new FormData();
      formData.append("full_name", formValues.fullName);
      formData.append("email", formValues.email);

      formData.append("dynamicFields", dynamicFields);

      // Handle uploaded files (add file names/URLs in dynamicFields)
      if (formValues.uploadedResume?.length > 0) {
        const uploadedFileNames = [];
        formValues.uploadedResume.forEach((file) => {
          // Collect file names (or file URLs after upload, depending on your setup)
          uploadedFileNames.push(file.name); // Store file name or use URL after upload
          formData.append("uploaded_files", file); // Append the file itself for upload
        });

        // Add uploaded file names to dynamicFields
        const dynamicFieldsWithFiles = {
          ...JSON.parse(dynamicFields),
          uploaded_files: uploadedFileNames, // Add the file names to dynamicFields
        };

        // Update dynamicFields in formData
        formData.set("dynamicFields", JSON.stringify(dynamicFieldsWithFiles));
      } else {
        // If no files uploaded, just append null to dynamicFields
        const dynamicFieldsWithNoFiles = {
          ...JSON.parse(dynamicFields),
          uploaded_files: null,
        };
        formData.set("dynamicFields", JSON.stringify(dynamicFieldsWithNoFiles)); // Update dynamicFields in formData
      }

      try {
        setIsLoading(true);
        // console.log("tutor data", formData);
        console.log("FormData entries:", Array.from(formData.entries())); // Log FormData entries for debugging
        const response = await axios.post(
          "http://localhost:5000/api/v1/webLeads/tutor",
          formData

          // {
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // }
        );
        setCurrentStep(1);
        setFormValues({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          country: null,
          selectedSubject: null,
          selectedGrade: null,
          qualification: "",
          teachingExperience: "",
          remunerationPerHour: "",
          uploadedResume: [],
          reasonforTeach: "",
        });
        setIsLoading(false);
        window.location.href = "/thank-you";
      } catch (error) {
        toast.error("Failed to submit form. Please try again.");
      } finally {
        setIsLoading(false); // End loading state
      }
    }
  };

  const preventEnterKey = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const countryObjects = selectedCountries.map((country, index) => ({
    value: country,
    label: country,
  }));

  const subjectOptions = subjectsOffer.map((subject, index) => ({
    value: subject,
    label: subject,
  }));

  const grades = Array.from({ length: 13 }, (_, i) => (i + 1).toString());
  const gradeOptions = grades
    .map((grade, index) => ({
      value: grade,
      label: grade,
    }))
    .reverse();

  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (step) => {
    // Only navigate if the current step is valid or the clicked step is prior to the current step
    if (step < currentStep || validateStep(currentStep)) {
      setCurrentStep(step);
    }
  };

  return (
    <div>
      <div className="flex">
        {/* Step Headers */}
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`py-4 sm:px-8 min-[375px]:px-6 px-4 text-center cursor-pointer rounded-t-xl font-semibold ${
              currentStep === step ? "bg-contactBg" : "bg-contactBg2"
            }`}
            onClick={() => handleStepClick(step)}
          >
            Step {step}
          </div>
        ))}
      </div>
      <div className=" xl:w-[700px] lg:w-[550px] sm:w-[600px] min-[450px]:w-[400px] min-[400px]:w-[350px] w-[300px] bg-contactBg p-8 rounded-lg rounded-tl-none shadow-lg ">
        <form
          className="transition-transform duration-500 ease-in-out "
          onSubmit={handleSubmit}
          onKeyDown={preventEnterKey}
        >
          {currentStep === 1 && (
            <div className="sm:space-y-6">
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                  />
                  {errors.fullName && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <div className="py-0.5 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor">
                    <PhoneInput
                      defaultCountry="gb"
                      name="phone"
                      value={formValues.phone}
                      onChange={handlePhoneChange}
                      placeholder="Phone Number"
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.city}
                    onChange={handleInputChange}
                  />
                  {errors.city && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.city}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <Select
                    name="country"
                    options={countryObjects}
                    classNamePrefix="select"
                    value={formValues.country}
                    onChange={(country) =>
                      handleSelectorChange("country", country)
                    }
                    styles={customStyles}
                    placeholder="Select Country"
                    components={{
                      DropdownIndicator: (props) => (
                        <ChevronDownIcon className="w-5 h-5 text-black" />
                      ),
                    }}
                  />
                  {errors.country && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.country}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blueHeading mt-8 text-white px-6 py-2 rounded-full shadow-lg "
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="sm:space-y-6">
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <Select
                    isMulti
                    name="subjects"
                    options={subjectOptions}
                    classNamePrefix="select"
                    value={formValues.selectedSubject}
                    onChange={(subject) =>
                      handleSelectorChange("selectedSubject", subject)
                    }
                    styles={customStyles}
                    placeholder="Select Subjects"
                    components={{
                      DropdownIndicator: (props) => (
                        <ChevronDownIcon className="w-5 h-5 text-black" />
                      ),
                    }}
                  />
                  {errors.selectedSubject && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.selectedSubject}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <Select
                    name="grade"
                    options={gradeOptions}
                    classNamePrefix="select"
                    value={formValues.selectedGrade}
                    onChange={(grade) =>
                      handleSelectorChange("selectedGrade", grade)
                    }
                    styles={customStyles}
                    placeholder="Select Grade"
                    components={{
                      DropdownIndicator: (props) => (
                        <ChevronDownIcon className="w-5 h-5 text-black" />
                      ),
                    }}
                  />
                  {errors.selectedGrade && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.selectedGrade}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blueHeading mt-8 text-white px-6 py-2 rounded-full shadow-lg "
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="sm:space-y-6">
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Your Qualification"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.qualification}
                    onChange={handleInputChange}
                  />
                  {errors.qualification && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.qualification}
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <input
                    type="text"
                    name="teachingExperience"
                    placeholder="Teaching Experience"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.teachingExperience}
                    onChange={handleInputChange}
                  />
                  {errors.teachingExperience && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.teachingExperience}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <input
                    type="text"
                    name="remunerationPerHour"
                    placeholder="Remuneration Per Hour"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.remunerationPerHour}
                    onChange={handleInputChange}
                  />
                  {errors.remunerationPerHour && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.remunerationPerHour}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <label className="block text-headingColor sm:text-base text-sm mb-1">
                    Upload Your Resume and Cover Letter
                  </label>
                  <input
                    type="file"
                    name="uploadedResume"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none sm:placeholder:text-base placeholder:text-sm"
                    onChange={handleFileChange}
                    multiple
                  />
                  {formValues.uploadedResume.length > 0 && (
                    <div className="mt-2">
                      <h4>Uploaded Resumes:</h4>
                      <ul>
                        {formValues.uploadedResume.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {errors.uploadedResume && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.uploadedResume}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <textarea
                    name="reasonforTeach"
                    placeholder="Tell Us About Yourself And Why Do You Want To Join Tuition Highway?"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.reasonforTeach}
                    onChange={handleInputChange}
                    rows={3}
                  ></textarea>
                  {errors.reasonforTeach && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.reasonforTeach}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-orangeHeading  mt-8 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TutorForm;
