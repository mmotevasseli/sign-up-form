import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: "false",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("you are signed in successfully", "success");
    } else {
      setTouched({
        name: "true",
        email: "true",
        password: "true",
        confirmPassword: "true",
        isAccepted: "true",
      });
      notify("An error occured", "error");
    }
  };

  return (
    <React.Fragment>
      <div>
        <form action="submit" onSubmit={submitHandler}>
          <h2>Sign Up</h2>
          <div>
            <label htmlFor="#">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="#">Email </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="#">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </div>
          <div>
            <label htmlFor="#">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
          </div>
          <div>
            <label htmlFor="#">I accept terms of privacy and policy.</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {errors.isAccepted && touched.isAccepted && (
              <span>{errors.isAccepted}</span>
            )}
          </div>
          <a href="#">Login</a>
          <button>Sign Up</button>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default SignUp;
