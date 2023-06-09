import React,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";


function Page3({page, setPage, formData, setFormData }){

  const[success,setSuccess] = useState(null);
  const[error,setError] = useState(null);
    const navigate =useNavigate("");
console.log("page3",page)
  function findPage() {
    setPage("page3");
  }
  useEffect(() => {
    findPage();
  }, []);
  const initialValues = {
    fullName: "",
    address: "",
    place: "",
    state:"",
  };
  const handleSubmit = (values) => {
    setFormData({
      ...formData,
      fullName:values.fullname,
      address:values.address,
      place: values.place,
      state: values.state,
    });
    console.log("datap3",formData);
    
    // You can perform further actions such as API calls or state updates here
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.Place) {
      errors.Place = "Place is required";
    }

    if (!values.Password) {
      errors.Password = "Password is required";
    }

    return errors;
  };
  return(
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

            <div className ="fieldGroup">
            <label htmlFor="place" className ="FieldLabel">Place</label>
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            <Field type="text" name="Place" 
                className="field form-control formTextbox"
                placeholder = "Enter your place" />
            <ErrorMessage
              name="place"
              component="div"
              className="error-message"
            />
            </div>
          </div>
          <div className ="fieldGroup">
            <label htmlFor="state" className ="FieldLabel">State</label>
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            <Field type="text" name="state" 
                className="field form-control formTextbox"
                placeholder = "Enter your state" />
            <ErrorMessage
              name="state"
              component="div"
              className="error-message"
            />
            </div>
          <button className="cn" type ="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </>
  )
}

export default Page3;