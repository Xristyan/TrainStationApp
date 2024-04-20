"use client";

import { useState } from "react";

import LoginForm from "./Login/loginForm";
import RegisterForm from "./Register/registerForm";

const Authentication = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  function switchForm() {
    setShowLoginForm(!showLoginForm);
  }

  return (
    <>
      {showLoginForm ? (
        <LoginForm switchForm={switchForm} />
      ) : (
        <RegisterForm switchForm={switchForm} />
      )}
    </>
  );
};

export default Authentication;
