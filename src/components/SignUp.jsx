import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import styles from "./signUp.module.css";

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
    <React.Fragment className={styles.container}>
      <div>
        <form
          action="submit"
          onSubmit={submitHandler}
          className={styles.formContainer}
        >
          <h2 className={styles.header}>Sign Up</h2>
          <div className={styles.formField}>
            <label htmlFor="#">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.name && touched.name
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.formField}>
            <label htmlFor="#">Email </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.name && touched.name
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
          <div className={styles.formField}>
            <label htmlFor="#">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.name && touched.name
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </div>
          <div className={styles.formField}>
            <label htmlFor="#">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.name && touched.name
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
          </div>
          <div className={styles.formField}>
            <div className={styles.checkBoxContainer}>
              <label htmlFor="#">I accept terms of privacy and policy.</label>
              <input
                type="checkbox"
                name="isAccepted"
                value={data.isAccepted}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
            </div>
            {errors.isAccepted && touched.isAccepted && (
              <span>{errors.isAccepted}</span>
            )}
          </div>
          <div className={styles.formButtons}>
            <a href="#">Login</a>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default SignUp;
