'use client'

import { useState } from "react";

import LoginForm from './Login/loginForm.js';
import RegisterForm from './Register/registerForm.js';

const Authentication = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    function switchForm() {
        setShowLoginForm(!showLoginForm);
    }

    return (
        <>
            {
                showLoginForm
                    ? <LoginForm switchForm={switchForm} />
                    : <RegisterForm switchForm={switchForm} />
            }
        </>
    )
}

export default Authentication