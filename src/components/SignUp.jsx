import React, { useState, useEffect } from "react";
import { validate } from "./validate";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: "false",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  return (
    <React.Fragment>
      <div>
        <form action="submit">
          <h2>Sign Up</h2>
          <div>
            <label htmlFor="#">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="#">Email </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="#">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="#">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="#">I accept terms of privacy and policy.</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
            />
          </div>
          <a href="#">Login</a>
          <button>Sign Up</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
