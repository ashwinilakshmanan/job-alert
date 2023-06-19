import "./App.css";
import { Routes, Route } from "react-router";
import { useNavigate } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import VerificationCenter from "./components/VerificationCenter";
import ProfessionalDetails from "./components/ProfessionalDetails";
import Jobs from "./components/Jobs";
import { useState } from "react";
import logo from "./assets/logo.png";
import Verification from "./components/Verification";

function App() {
  const [page, setPage] = useState("");
  const [formData, setFormData] = useState("");
  const [OTP, setOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);

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
                page === "professionalDetails"
                  ? "d1"
                  : "d11"
              }
            ></div>
            <div
              className={
                page === "verificationCenter" || page === "professionalDetails"
                  ? "d2"
                  : "d22"
              }
            ></div>
            <div
              className={page === "professionalDetails" ? "d3" : "d33"}
            ></div>
            <div className={page === "Jobs" ? "d4" : "d44"}></div>
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
                    page === "professionalDetails"
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
                    page === "professionalDetails"
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
                    page === "professionalDetails" ? "liNumber3" : "liNumber33"
                  }
                >
                  3
                </div>
                <div>Professional Details</div>
              </li>
              <li>
                <div className={page === "Jobs" ? "liNumber4" : "liNumber44"}>
                  4
                </div>
                <div>Start Job Search</div>
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
                path="basicDetails/verificationCenter/professionalDetails"
                element={
                  <ProfessionalDetails
                    page
                    setPage={setPage}
                    setFormData={setFormData}
                    formData={formData}
                  ></ProfessionalDetails>
                }
              />
              <Route
                path="basicDetails/verificationCenter/professionalDetails/Jobs"
                element={<Jobs page setPage={setPage}></Jobs>}
              />
            </Routes>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
