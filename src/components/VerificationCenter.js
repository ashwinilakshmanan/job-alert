import React, { useEffect, useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Button } from "react-bootstrap";
import "./page2.css";

function VerificationCenter({
  setPage,
  setFormData,
  formData,
  OTP,
  setOTP,
  showOTP,
  setShowOTP,
}) {
  function findPage() {
    setPage("verificationCenter");
  }

  useEffect(() => {
    findPage();
  }, []);
  return (
    <>
      <div>
        <div style={{ marginTop: "80px" }}>
          <h1 className="heading">Verification Center</h1>
        </div>
        <h3 id="h3">Mobile</h3>
        <span> We have sent an OTP to your phone number</span>

        <div>
          <p className="otp">Enter OTP</p>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
            secure
            className="otp-group containerStyle"
          />
          <Button className="verify-btn">Verify Mobile Number</Button>
        </div>
      </div>
    </>
  );
}

export default VerificationCenter;

