import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import "./Page1.css";
import { useNavigate } from "react-router-dom";
import { BsUpload } from "react-icons/bs";
import "react-phone-number-input/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";
import { Toaster, toast } from "react-hot-toast";
import VerificationCenter from "./VerificationCenter";
import PhoneInput from "react-phone-number-input";

function BasicDetails({
  page,
  setPage,
  setFormData,
  formData
}) {
  // const [value, setValue] = useState();

  const [selectedFile, setSelectedFile] = useState(null);
  const recaptchaVerifierRef = useRef(null);

  // const [success, setSuccess] = useState(null);
  // const [error, setError] = useState(null);
  // const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  function findPage() {
    setPage("basicDetails");
  }

  useEffect(() => {
    findPage();
  }, []);

  const navigate = useNavigate("");

  const initialValues = {
    file: "",
    fullName: "",
    email: "",
    password: "",
    mobile: "",
  };

  const handleSubmit = async (values) => {
    const formData = {
      ...values,
      file: selectedFile,
    };
    setFormData(formData);
    navigate("verificationCenter");

    // console.log("ph",values.mobile);
    onSignup(values.mobile);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Full Name is required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.mobile) {
      errors.mobile = "Required";
    } else if (
      !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(
        values.mobile
      )
    ) {
      errors.mobile = "Invalid mobile number";
    }
    return errors;
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup(mobile) {
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+919497606639" + mobile;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true);
        toast.success("OTP send successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onOTPVerify() {
    window.confirmationResult.confirm(OTP).then(async (res) => {
      console.log(res);
      navigate("verificationCenter")
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  

  return (
    <div>
      <Toaster toastOptions={{ duration: 4000 }} />
       <div id="recaptcha-container"></div>
      {showOTP ? (
        
        <VerificationCenter />
      ) : (
        <div className="page1 ">
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
                    <a href="https://www.linkedin.com/login">
                      <img
                        src="https://media.foundit.in/trex/search/images/linkedin.svg"
                        alt="icon"
                      />
                      LinkedIn
                    </a>
                  </div>
                  <div className="googleTab socialLoginTab">
                    <a href="https://www.google.com">
                      {" "}
                      <img
                        src="https://media.foundit.in/trex/search/images/google.svg"
                        alt="icon"
                      />
                      Google
                    </a>
                  </div>
                  <div className="facebookTab socialLoginTab">
                    <a href="https://www.facebook.com/login/">
                      <img
                        src="https://media.foundit.in/trex/search/images/facebook.svg"
                        alt="icon"
                      />
                      Facebook
                    </a>
                  </div>
                </div>

                {/* upload resume */}
                <div className="uploadResumeCont upld">
                  <div className="uploadResume">
                    <div className="uploadResumeContent">
                      <div className="content">
                        <div className="contentTilte">Upload Resume</div>

                        <input
                          id="file"
                          name="file"
                          type="file"
                          accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          style={{ display: "none" }}
                        />

                        <div class="resumeFormat">
                          *Doc, Docx, RTF, PDF (Max file size- 6MB)
                        </div>
                      </div>
                      <BsUpload
                        className=" uploadIcon"
                        type="file"
                        name="file"
                        onChange={(event) => {
                          setSelectedFile(event.target.files);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="uploadButtonText">
                  Profiles with resumes are 3x more likely to be noticed by
                  recruiters
                </div>

                {/* <div className="uploadResumeCont upld">
              <div className="upldResume">
                <div className="contentTilte"> Upload Resume</div>

                <Field
                  className="upload"
                  type="file"
                  name="file"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedFile(event.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div className="uploadButtonText">
              Profiles with resumes are 3x more likely to be noticed by
              recruiters
            </div> */}

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
                <br></br>
                <Field
                  type="mobile"
                  placeholder="Enter phone number"
                  className="formMobile formTextbox"
                  name="mobile" // Update the name attribute here
                />


                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <button className="cn" type="submit" >
                  Continue
                </button>
              </div>
            </Form>
          </Formik>
        </div>
       )}  
    </div>
  );
}

export default BasicDetails;
