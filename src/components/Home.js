import React from "react";
import "../styles/Home.css";
import BasicDetails from "./BasicDetails";

function Home() {
  return (
    <>
      <div>
        <div>
          <h3 id="h3">Create an Account</h3>
          <p>It only takes a couple of minutes to get started !</p>
        </div>
        <div className="text-center">
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
        
      </div>
    </>
  );
}

export default Home;
