'use client'


import useInput from "@/hooks/use-unput.js";

import logo from "../Icons/logo.png";
import classes from "@/components/authentication/Register/registerForm.module.css";
import { emailValidator, passwordValidator } from "@/utils/validators.js";

const RegisterForm = () => {
  let formValid = true;

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputOnBlurHandler: emailOnBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidator);
  const {
    value: enteredPassword,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputOnBlurHandler: passwordOnBlurHandler,
    reset: resetPassword,
  } = useInput(passwordValidator);
  const {
    value: enteredRepeatedPassword,
    isValid: isRepeatedPasswordValid,
    hasError: repeatedPasswordHasError,
    valueChangeHandler: repeatedPasswordChangeHandler,
    inputOnBlurHandler: repeatedPasswordOnBlurHandler,
    reset: resetRepeatedPassword,
  } = useInput(passwordsMatch.bind(null, enteredPassword));
  if (!isEmailValid || !isPasswordValid || !isRepeatedPasswordValid) {
    formValid = false;
  } else {
    formValid = true;
  }

  return (
    <>
      {error && <span className={classes.errorTopMessage}>{error}</span>}
      <div className={classes.logoContainer}>
        <label>Register</label>
        <img className={classes.logoImg} src={logo} alt="" />
      </div>
      <form onSubmit={registeFormHandler} className={classes.loginForm}>
        <div className={classes.group}>
          <input
            autoComplete="email"
            onChange={emailChangeHandler}
            onBlur={emailOnBlurHandler}
            value={enteredEmail}
            required=""
            type="email"
            className={`${classes.input} ${classes[emailHasError ? "invalid" : ""]
              }`}
            placeholder="Email"
          />
          <span className={classes.bar}></span>
          {emailHasError && (
            <p className={classes.errorMessage}>*Email is not valid</p>
          )}
        </div>

        <div className={classes.group}>
          <input
            autoComplete="current-password"
            required=""
            type="password"
            className={`${classes.input} ${classes[
              passwordHasError || repeatedPasswordHasError ? "invalid" : ""
            ]
              }`}
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordOnBlurHandler}
          />
          <span className={classes.bar}></span>
          {passwordHasError && enteredPassword.length < 5 && (
            <p className={classes.errorMessage}>
              *Password must be at least 5 chartacters long
            </p>
          )}
          {passwordHasError && !/[a-zA-Z]/.test(enteredPassword) && (
            <p className={classes.errorMessage}>
              *Password must have at least 1 chartacters
            </p>
          )}
        </div>
        <div className={classes.group}>
          <input
            autoComplete="current-password"
            required=""
            type="password"
            className={`${classes.input} ${classes[repeatedPasswordHasError ? "invalid" : ""]
              }`}
            placeholder="Repeat-Password"
            value={enteredRepeatedPassword}
            onChange={repeatedPasswordChangeHandler}
            onBlur={repeatedPasswordOnBlurHandler}
          />
          <span className={classes.bar}></span>
          {repeatedPasswordHasError && (
            <p className={classes.errorMessage}>
              *Passwords must match and to be valid
            </p>
          )}
        </div>
        <button
          disabled={!formValid}
          onClick={registeFormHandler}
          className={classes.button}
        >
          {isLoading ? "loading..." : "Register"}
        </button>
      </form>
      <div className={classes.textContainer}>
        <span>Already have an account?</span>
        <button onClick={showLoginFormHandler} className={classes.signUpButton}>
          Login
        </button>
      </div>
    </>
  );
};
export default RegisterForm;
