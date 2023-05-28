import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
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
      <div className={styles.container}>
        <form
          action="submit"
          onSubmit={submitHandler}
          className={styles.formContainer}
        >
          <h2 className={styles.header}>Login</h2>

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

          <div className={styles.formButtons}>
            <Link to="/signup">Signup</Link>
            <button>Login</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Login;
