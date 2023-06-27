import "./App.css";
import { Routes, Route } from "react-router";
import { useNavigate } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import VerificationCenter from "./components/VerificationCenter";
import PersonalDetails from "./components/PersonalDetails";
import EducationalDetails from "./components/EducationalDetails";
import { useState } from "react";
import logo from "./assets/logo.png";
import Home from "./components/Home";

function App() {
  const [page, setPage] = useState("");
  const [formData, setFormData] = useState("");

  const navigate = useNavigate();
  console.log("pagee", page);

  return (
    <>
      <div>
        <header className="hd">
          <a href="/">
            <img id="logo" src={logo} alt="logo"></img>
          </a>

          <a style={{ textDecoration: "none" }} href="/basicDetails">
            <span className="login text-color">Register </span>
          </a>
        </header>
        {page === "home" ? (
          <Home page setPage={setPage} />
        ) : (
          <main
            style={{ display: "flex", justifyContent: "space-around" }}
            className="mainDiv"
          >
            <section className="sec1">
              <div
                className={
                  page === "basicDetails" ||
                  "educationalDetails" ||
                  page === "personalDetails"
                    ? "d1"
                    : "d11"
                }
              ></div>
              <div
                className={
                  page === "educationalDetails" || page === "personalDetails"
                    ? "d2"
                    : "d22"
                }
              ></div>
              <div className={page === "personalDetails" ? "d3" : "d33"}></div>
              {/* <div className={page === "Jobs" ? "d4" : "d44"}></div> */}
              <ul>
                <li
                  onClick={() => {
                    navigate("basicDetails");
                  }}
                >
                  <div
                    className={
                      page === "basicDetails" ||
                      page === "educationalDetails" ||
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
                      page === "educationalDetails" ||
                      page === "personalDetails"
                        ? "liNumber2"
                        : "liNumber22"
                    }
                  >
                    2
                  </div>
                  <div> Educational Details</div>
                </li>
                <li>
                  <div
                    className={
                      page === "personalDetails" ? "liNumber3" : "liNumber33"
                    }
                  >
                    3
                  </div>
                  <div>Personal Details</div>
                </li>
                {/* <li>
                <div className={page === "Jobs" ? "liNumber4" : "liNumber44"}>
                  4
                </div>
                <div>Start Job Search</div>
              </li> */}
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
                    <Home page setPage={setPage} />

                    // <BasicDetails
                    //   setPage={setPage}
                    //   setFormData={setFormData}
                    //   formData ={formData}
                    //   OTP
                    //   setOTP
                    //   showOTP
                    //   setShowOTP
                    // ></BasicDetails>
                  }
                />
                {/* <Route
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
                /> */}
                <Route
                  path="basicDetails/educationalDetails"
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
                  path="basicDetails/educationalDetails/personalDetails"
                  element={
                    <PersonalDetails
                      page
                      setPage={setPage}
                      setFormData={setFormData}
                      formData={formData}
                    ></PersonalDetails>
                  }
                />
              </Routes>
            </section>
          </main>
        )}
      </div>
    </>
  );
}

export default App;
