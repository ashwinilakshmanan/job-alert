import React, { useState, useEffect } from "react";
import "./page2.css";
import "./Page1.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";


function Page2({ page, setPage, formData, setFormData }) {
  const [value, setValue] = useState();

  const[success,setSuccess] = useState(null);
  const[error,setError] = useState(null);

  const navigate = useNavigate("");
  function findPage() {
    setPage("page2");
  }
  useEffect(() => {
    findPage();
  }, []);
  const initialValues = {
    Position: "",
    department: "",
    salary: "",
  };
  const handleSubmit = (values) => {
    setFormData({
      ...formData,
      Position: values.Position,
      department: values.department,
      salary: values.salary,
    });
    navigate("page3");
    
    // You can perform further actions such as API calls or state updates here
  };
  const validateForm = (values) => {
    const errors = {};

    if (!values.Position) {
      errors.Position = "position is required";
    }

    if (!values.department) {
      errors.department = "department is required";
    }

    if (!values.salary) {
      errors.salary = "salary is required";
    }
    return errors;
  };
  return (
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
              <label htmlFor="Position" className=" fieldLabel">
                Position
              </label>
              <Field
                type="text"
                name="position"
                className="field form-control formTextbox"
                placeholder="enter your position"
              />
              <ErrorMessage
                name="Position"
                component="div"
                className="error-message"
              />
            </div>
         
            <div className="fieldGroup">
            <label htmlFor="department" className="fieldLabel">
              Department
            </label>
            <Field
              type="department"
              name="department"
              className="field form-control formTextbox"
              placeholder="enter your department"
            />
            <ErrorMessage
              name="department"
              component="div"
              className="error-message"
            />
          </div>
          <div className="fieldGroup">
            <label htmlFor="salary" className="fieldLabel">
              Salary
            </label>
            <Field
              type="salary"
              name="salary"
              className="field form-control formTextbox"
              placeholder="enter your salary"
            />
            <ErrorMessage
              name="salary"
              component="div"
              className="error-message"
            />
          </div>
          <button
            className="cn"
            type="submit"
            onClick={() => navigate("page3")}
          >
            Continue
          </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Page2;
