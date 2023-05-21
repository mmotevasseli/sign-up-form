export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
  ) {
    errors.email = "Email is not correct";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "password field is empty";
  } else if (data.password < 6) {
    errors.password = "password must be 6 or more characters";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "confirm your password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords are not same";
  } else {
    delete errors.confirmPassword;
  }

  if (!data.isAccepted) {
    errors.isAccepted = "you should accept our policy";
  } else {
    delete errors.isAccepted;
  }

  return errors;
};
