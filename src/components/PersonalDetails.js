import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

function PersonalDetails({ page, setPage, formData, setFormData }) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate("");
  console.log("page4", page);
  function findPage() {
    setPage("personalDetails");
  }
  useEffect(() => {
    findPage();
  }, []);
  const initialValues = {
    fullName: "",
    address: "",
    place: "",
    state: "",
  };
  const handleSubmit = (values) => {
    setFormData({
      ...formData,
      address: values.address,
      place: values.place,
      state: values.state,
    });
  };
  useEffect(() => {
    fetch("http://localhost:8080/api/employees", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      console.log("mydata",formData)
  }, [formData]);

  const validateForm = (values) => {
    const errors = {};

    if (!values.address) {
      errors.address = "address is required";
    }

    if (!values.place) {
      errors.place = "place is required";
    }
    if (!values.state) {
      errors.state = "state is required";
    }
    return errors;
  };
  return (
    <>
      <div className="page">
        {" "}
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <div className="fieldGroup">
                <label htmlFor="address" className=" fieldLabel">
                  address
                </label>
                <Field
                  type="text"
                  name="address"
                  className="field form-control formTextbox"
                  placeholder="enter your address"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="fieldGroup">
                <label htmlFor="place" className="FieldLabel">
                  Place
                </label>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <Field
                  type="text"
                  name="place"
                  className="field form-control formTextbox"
                  placeholder="Enter your place"
                />
                <ErrorMessage
                  name="place"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="fieldGroup">
              <label htmlFor="state" className="FieldLabel">
                State
              </label>
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              <Field
                type="text"
                name="state"
                className="field form-control formTextbox"
                placeholder="Enter your state"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="error-message"
              />
            </div>
            <button className="cn" type="submit" onClick={()=>{alert("Registered Successfully"); navigate("Jobs")}}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default PersonalDetails;
