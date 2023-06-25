import React, { useEffect, useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Button } from "react-bootstrap";
import "./page2.css";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";

function VerificationCenter({
  setPage,
  setFormData,
  formData,
  
  
}) {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  function findPage() {
    setPage("verificationCenter");
  }

  useEffect(() => {
    findPage();
  }, []);

  const initialValues = {
    otp: "",
  };
  const handleSubmit = async (values) => {
    const formData = {
      ...values,
      otp: "",
    };
    setFormData(formData);
    navigate("professionalDetails");

   
  };

  return (
    <>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div style={{ marginTop: "80px" }}>
              <h1 className="heading">Verification Center</h1>
            </div>
            <h3 id="h3">Mobile</h3>
            <span> We have sent an OTP to your phone number</span>

            <div>
              <p className="otp">Enter OTP</p>
              <OTPInput
                value={OTP}
                onChange={(e)=>{setOTP(e.target.value);console.log("otp",e);}}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                // secure
                name="otp"
                className="otp-group containerStyle"
              />
              <Button className="verify-btn">Verify Mobile Number</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default VerificationCenter;
