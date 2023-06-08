import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Page1.css";
import { useNavigate } from "react-router-dom";
import { BsUpload } from "react-icons/bs";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import Button from "react-bootstrap/Button";

function Page1({ page, setPage, setFormData }) {
  const [value, setValue] = useState();

  const [selectedFile, setSelectedFile] = useState(null);

  function findPage() {
    setPage("page1");
  }

  useEffect(() => {
    findPage();
  }, []);

  const navigate = useNavigate("");

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    file: null,
  };

  const handleSubmit = (values) => {
    const formData = {
      ...values,
      file:selectedFile,
    }
    setFormData(formData);
    navigate("page2");
  };

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

//   const file = event.currentTarget.files[0];
// setSelectedFile(file);

  const validateForm = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Full Name is required";
    }

    if (!values.email) {
      errors.email = "Email ID is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    }
    return errors;
  };

  return (
    <div className="page1">
      {" "}
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <div>
              <h3 className="heading">Create an Account</h3>
              <p className="heading2">
                It only takes a couple of minutes to get started!
              </p>
            </div>
            <div>
              <span className="itsFree">it's free</span>
            </div>
            <div className="socialLogin">
              <div className="linkedinTab socialLoginTab">
                <img
                  src="https://media.foundit.in/trex/search/images/linkedin.svg"
                  alt="icon"
                />
                LinkedIn
              </div>
              <div className="googleTab socialLoginTab">
                <img
                  src="https://media.foundit.in/trex/search/images/google.svg"
                  alt="icon"
                />
                Google
              </div>
              <div className="facebookTab socialLoginTab">
                <img
                  src="https://media.foundit.in/trex/search/images/facebook.svg"
                  alt="icon"
                />
                Facebook
              </div>
            </div>
            {/* upload resume */}
            <div className="uploadResumeCont" style={{ width: "600px" }}>
              <div className="uploadResume">
                <div className="uploadResumeContent">
                  <div className="content">
                    <div className="contentTilte">Upload Resume</div>
                    <input
                      type="file"
                      accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];}}
                    ></input>
                    <div class="resumeFormat">
                      *Doc, Docx, RTF, PDF (Max file size- 6MB)
                    </div>
                  </div>
                  <BsUpload className=" uploadIcon" />
                </div>
              </div>
            </div>
            <div className="uploadButtonText">
              Profiles with resumes are 3x more likely to be noticed by
              recruiters
            </div>
            <div className="fieldGroup">
              <label htmlFor="fullName" className=" fieldLabel">
                Full Name
              </label>
              <Field
                type="text"
                name="fullName"
                className="field form-control formTextbox"
                placeholder="enter your full name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="error-message"
              />
            </div>
          </div>
          <div className="fieldGroup">
            <label htmlFor="email" className=" fieldLabel">
              Email ID{" "}
            </label>
            {"\u00A0"}
            {"\u00A0"}
            <Field
              type="email"
              name="email"
              className="field form-control formTextbox"
              placeholder="enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="password" className="fieldLabel">
              Password
            </label>
            <Field
              type="password"
              name="password"
              className="field form-control formTextbox"
              placeholder="enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <div className="fieldGroup">
            <label htmlFor="mobile" className="fieldLabel">
              Mobile
            </label>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              className=" formMobile formTextbox"
            />
          </div>
          <div>
            <button
              className="cn"
              type="submit"
              onClick={() => navigate("page2")}
            >
              Continue
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Page1;