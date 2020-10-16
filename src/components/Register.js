// Import Dependencies
import React, { useState } from "react";
import * as yup from "yup";
import { gsap } from "gsap";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

export default function Register() {
  // Declare a variable holding the default empty data
  const defaultUserData = { name: "", password: "", username: "", email: "" };

  // Get the state to hold the form data
  const [user, setUser] = useState(defaultUserData);

  // Set the state for the errors for validation
  const [errors, setErrors] = useState({});

  // Set state for to disable submit button
  const [disableSubmit, setDisableSubmit] = useState(false);

  // Function to handle the text field change to set to the user state
  const handleChange = (e) => {
    const userData = { ...user, [e.target.name]: e.target.value };

    setUser(userData);
  };

  // Form schema to be used for form validation
  const formSchema = yup.object().shape({
    name: yup.string().required("Please enter a name."),
    password: yup.string().required("Please enter a password."),
    username: yup.string().required("Please enter a username."),
    email: yup
      .string()
      .required("Please enter an email.")
      .email("Please enter a valid email."),
  });

  // Form to catch any errors if the form did not validated
  const formErrors = (e) => {
    // Make a copy of the errors state
    let allErrors = { ...errors };

    // Cycle through all data and check
    for (const userData in user) {
      yup
        .reach(formSchema, userData)
        .validate(user[userData])
        .then((valid) => {
          allErrors[`${userData}`] = "";
        })
        .catch((err) => {
          allErrors[`${userData}`] = err.errors[0];
        });
    }

    // Set the errors into the state
    setErrors(allErrors);
  };

  // Function to handle the form submission
  const handleSubmission = (e) => {
    e.preventDefault();
    // POST request
    // axios
    //   .post("/endpoint", user)
    //   .then((res) => {
    //     console.log("New User from Registration", res.data);
    //     setUser({
    //       name: "",
    //       password: "",
    //       username: "",
    //       email: "",
    //     });
    //  alert("account created, please sign in");
    // push("/login");
    //   })
    //   .catch((err) => console.log("err", err.message));

    // Check for errors first
    formErrors();

    // Check if the form passes the validation
    formSchema.isValid(user).then((valid) => {
      console.log("is my form valid?", valid);

      if (valid) {
        // Ensure to eliminate all errors if form is valid
        setErrors({});

        // Submit the form
        console.log("Form submitted", user);

        // Clear the form
        setUser(defaultUserData);
      } else {
        // Add a little animation if not valid
        const errorAnim = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        errorAnim.to(".form-container", { x: -50, duration: 0.2 });
        errorAnim.to(".form-container", { x: 50, duration: 0.2 });
        errorAnim.to(".form-container", { x: -20, duration: 0.2 });
        errorAnim.to(".form-container", { x: 20, duration: 0.2 });
        errorAnim.to(".form-container", { x: 0, duration: 0.2 });

        // Disable the submit button while the animation plays
        setDisableSubmit(true);

        setTimeout(() => {
          setDisableSubmit(false);
        }, 1000);
      }
    });
  };

  return (
    <div className="form-container">
      <h3>Registration Form</h3>

      <form onSubmit={handleSubmission}>
        <label
          htmlFor="name"
          className={`${
            errors.name !== "" && errors.name !== undefined
              ? "invalid"
              : "valid"
          }`}
        >
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="username"
          className={`${
            errors.username !== "" && errors.username !== undefined
              ? "invalid"
              : "valid"
          }`}
        >
          Username
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="email"
          className={`${
            errors.email !== "" && errors.email !== undefined
              ? "invalid"
              : "valid"
          }`}
        >
          Email
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="password"
          className={`${
            errors.password !== "" && errors.password !== undefined
              ? "invalid"
              : "valid"
          }`}
        >
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Log in" disabled={disableSubmit} />
      </form>

      {Object.keys(errors).length > 0 && (
        <div className="errors">
          {Object.keys(errors).map((key) => (
            <p value={key} key={key}>
              {errors[key]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
