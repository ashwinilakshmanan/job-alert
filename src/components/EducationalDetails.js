import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

function EducationalDetails({ page, setPage, formData, setFormData }) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate("");
  console.log("page3", page);
  function findPage() {
    setPage("educationalDetails");
  }
  useEffect(() => {
    findPage();
  }, []);
  const initialValues = {
    qualification: "",
    institute: "",
    passingYear: "",
  };
  const handleSubmit = (values) => {
    setFormData({
      ...formData,
      qualification: values.qualification,
      institute: values.institute,
      passingYear: values.passingYear,
    });
    navigate("personalDetails");
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.qualification) {
      errors.qualification = "qualification is required";
    }

    if (!values.institute) {
      errors.institute = "institute is required";
    }
    if (!values.passingYear) {
      errors.passingYear = "passingYear is required";
    }
    return errors;
  };
  return (
    <>
      <div className="page">
        {" "}
        <Formik
          initialValues={initialValues}
          // validate={validateForm}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <div className="fieldGroup">
                <label htmlFor="qualification" className=" fieldLabel">
                  qualification
                </label>
                <Field
                  type="text"
                  name="qualification"
                  className="field form-control formTextbox"
                  instituteholder="enter your qualification"
                />
                <ErrorMessage
                  name="qualification"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="fieldGroup">
                <label htmlFor="institute" className="FieldLabel">
                  institute
                </label>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <Field
                  type="text"
                  name="institute"
                  className="field form-control formTextbox"
                  instituteholder="Enter your institute"
                />
                <ErrorMessage
                  name="institute"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="fieldGroup">
              <label htmlFor="passingYear" className="FieldLabel">
                passingYear
              </label>
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              <Field
                type="text"
                name="passingYear"
                className="field form-control formTextbox"
                instituteholder="Enter your passingYear"
              />
              <ErrorMessage
                name="passingYear"
                component="div"
                className="error-message"
              />
            </div>
            <button className="cn" type="submit">
              Continue
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default EducationalDetails;
