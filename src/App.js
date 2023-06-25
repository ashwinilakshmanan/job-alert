import "./App.css";
import { Routes, Route } from "react-router";
import { useNavigate } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import VerificationCenter from "./components/VerificationCenter";
import PersonalDetails from "./components/PersonalDetails";
import EducationalDetails from "./components/EducationalDetails";
import Jobs from "./components/Jobs";
import { useState } from "react";
import logo from "./assets/logo.png";
import Verification from "./components/Verification";

function App() {
  const [page, setPage] = useState("");
  const [formData, setFormData] = useState("");
  

  const navigate = useNavigate();
  console.log("pagee", page);

  return (
    <>
      <div>
        <header className="hd">
          <img id="logo" src={logo} alt="logo"></img>

          <a style={{ textDecoration: "none" }} href="#">
            <span className="login">Already Registered? </span>
            <span className="text-color">Login</span>
          </a>
        </header>
        <main
          style={{ display: "flex", justifyContent: "space-around" }}
          className="mainDiv"
        >
          <section className="sec1">
            <div
              className={
                page === "basicDetails" ||
                "verificationCenter" ||
                page === "personalDetails"
                  ? "d1"
                  : "d11"
              }
            ></div>
            <div
              className={
                page === "verificationCenter" || page === "personalDetails"
                  ? "d2"
                  : "d22"
              }
            ></div>
            <div
              className={page === "educationalDetails" ? "d3" : "d33"}
            ></div>
            <div className={page === "personalDetails" ? "d4" : "d44"}></div>
            <ul>
              <li
                onClick={() => {
                  navigate("basicDetails");
                }}
              >
                <div
                  className={
                    page === "basicDetails" ||
                    page === "verificationCenter" ||
                    page === "personalDetails"
                      ? "liNumber1"
                      : "liNumber11"
                  }
                >
                  1
                </div>
                <div> Basic Details</div>
              </li>
              <li>
                <div
                  className={
                    page === "verificationCenter" ||
                    page === "personalDetails"
                      ? "liNumber2"
                      : "liNumber22"
                  }
                >
                  2
                </div>
                <div> Verification Center</div>
              </li>
              <li>
                <div
                  className={
                    page === "educationalDetails" ? "liNumber3" : "liNumber33"
                  }
                >
                  3
                </div>
                <div>Educational Details</div>
              </li>
              <li>
                <div className={page === "personalDetails" ? "liNumber4" : "liNumber44"}>
                  4
                </div>
                <div>PersonalDetails</div>
              </li>
            </ul>
          </section>
          <section className="sec2" id="page">
            <Routes>
              <Route
                path="basicDetails"
                element={
                  <BasicDetails
                    page
                    setPage={setPage}
                    setFormData={setFormData}
                    OTP
                    setOTP
                    showOTP
                    setShowOTP
                  ></BasicDetails>
                }
              />
              <Route
                path="/"
                element={
                  <BasicDetails
                    setPage={setPage}
                    setFormData={setFormData}
                    formData ={formData}
                    OTP
                    setOTP
                    showOTP
                    setShowOTP
                  ></BasicDetails>
                }
              />
              <Route
                path="basicDetails/verificationCenter"
                element={
                  <VerificationCenter
                    setPage={setPage}
                    setFormData={setFormData}
                    formData={formData}
                    OTP
                    setOTP
                    showOTP
                    setShowOTP
                  ></VerificationCenter>
                }
              />
              <Route
                path="basicDetails/verificationCenter/educationalDetails"
                element={
                  <EducationalDetails
                    page
                    setPage={setPage}
                    setFormData={setFormData}
                    formData={formData}
                  ></EducationalDetails>
                }
              />
              <Route
                path="basicDetails/verificationCenter/educationalDetails/personalDetails"
                element={<PersonalDetails
                  page
                  setPage={setPage}
                  setFormData={setFormData}
                  formData={formData}
                ></PersonalDetails>}
              />
            </Routes>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
