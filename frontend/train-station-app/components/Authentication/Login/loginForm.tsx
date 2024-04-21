'use client';

import { useState } from 'react';

import { emailValidator, passwordValidator } from '@/utils/validators';
import useInput from '@/hooks/use-input';
import Image from 'next/image';
import logo from '@/public/logo.png';
import classes from './loginForm.module.scss';
import useAuth from '@/hooks/use-auth';
import useModal from '@/hooks/use-modal';

/**
 *
 * @param {() => void} props.switchForm
 * @returns {ReactElement}
 */
const LoginForm = (props: any) => {
  let formValid = true;

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputOnBlurHandler: emailOnBlurHandler,
    reset: resetEmail
  } = useInput(emailValidator);
  const {
    value: enteredPassword,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputOnBlurHandler: passwordOnBlurHandler,
    reset: resetPassword
  } = useInput(passwordValidator);
  const { login, error } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  if (!isEmailValid || !isPasswordValid) {
    formValid = false;
  } else {
    formValid = true;
  }

  function loginFormHandler(e: any) {
    e.preventDefault();
    login({ email: enteredEmail, password: enteredPassword });
  }

  return (
    <>
      {error && <span className={classes.errorTopMessage}>{error}</span>}
      <div className={classes.logoContainer}>
        <label>Login</label>
        <Image
          className={classes.logoImg}
          src={logo}
          alt=''
          width={70}
          height={70}
        />
      </div>
      <form onSubmit={loginFormHandler} className={classes.loginForm}>
        <div className={classes.group}>
          <input
            autoComplete='email'
            onChange={emailChangeHandler}
            onBlur={emailOnBlurHandler}
            required={true}
            type='email'
            className={`${classes.input} ${
              classes[emailHasError ? 'invalid' : '']
            }`}
            placeholder='Email'
            value={enteredEmail}
          />
          <span className={classes.bar}></span>
          {emailHasError && (
            <p className={classes.errorMessage}>*Email is not valid</p>
          )}
        </div>
        <div className={classes.group}>
          <input
            autoComplete='current-password'
            required={true}
            type='password'
            className={`${classes.input} ${
              classes[passwordHasError ? 'invalid' : '']
            }`}
            placeholder='Password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordOnBlurHandler}
          />
          <span className={classes.bar}></span>
          {passwordHasError && (
            <p className={classes.errorMessage}>*Please enter valis password</p>
          )}
        </div>
        <button
          disabled={!formValid}
          onClick={loginFormHandler}
          className={classes.button}
        >
          {isLoading ? 'loading...' : 'Login'}
        </button>
      </form>
      <div className={classes.textContainer}>
        <span>Don’t have an account?</span>
        <button onClick={props.switchForm} className={classes.signUpButton}>
          Sign up
        </button>
      </div>
    </>
  );
};
export default LoginForm;
