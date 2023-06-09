import "./App.css";
import { Routes, Route } from "react-router";
import { useNavigate } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  const [page, setPage] = useState("");
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();
  console.log("pagee", page);

  return (
    <>
      
      <div >
        <header className="hd">
          <img id="logo" src={logo} alt="logo"></img>
         
            <a  href="#">
              <span className ="login">Already Registered? </span>
              <span className ="text-color">
                Login
              </span>
            </a>
         
        </header>
        <main style={{ display: "flex", justifyContent: "space-around" }} >
          <section className="sec1" >
            <div className={page === "page1" ? "d1" : "d11"}></div>
            <div className={page === "page2" ? "d2" : "d22"}></div>
            <div className={page === "page3" ? "d3" : "d33"}></div>
            {/* <div className={page === "page4" ? "d2" : "d22"}></div> */}
            <ul>
              <li
                onClick={() => {
                  navigate("page1");
                }}
              >
                <div className={page === "page1" ? "liNumber1" : "liNumber11"}>
                  1
                </div>
                <div> Basic Details</div>
              </li>
              <li>
                <div className={page === "page2" ? "liNumber2" : "liNumber22"}>
                  2
                </div>
                <div> Verification Details</div>
              </li>
              <li>
                <div className ={page === "page3" ? "liNumber3" : "liNumber33"}>
                  3
                </div>
                <div>Personal Details</div>
              </li>
              {/* <li>
                <div className ={page ==="page4" ? "liNumber2" : "liNumber22"}>
                  4
                </div>
                <div>Start Job Search</div>
              </li> */}
            </ul>
          </section>
          <section className="sec2" id ="page">
            <Routes>
              <Route
                path="page1"
                element={
                  <Page1 page setPage={setPage} setFormData={setFormData}></Page1>
                }
              />
              <Route
                path="/"
                element={
                  <Page1 setPage={setPage} setFormData={setFormData}></Page1>
                }
              />
              <Route
              path="page1/page2"
              element={
                <Page2
                  setPage={setPage}
                  setFormData={setFormData}
                  formData={formData}
                ></Page2>
              }
            />
            <Route
              path="page1/page2/page3"
              element={
                <Page3
                page
                  setPage={setPage}
                  setFormData={setFormData}
                  formData={formData}
                ></Page3>
              }
            />
           
            </Routes>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
