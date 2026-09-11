import React from "react";
import "./Styles/LoginSignup.css";
import { useState } from "react";

const LoginSignup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(`Username: ${username} Email: ${email} Password: ${password}`);
    alert("form submitted");

    // Clear form fields after submission
    setUserName("");
    setEmail("");
    setPassword("");
    setAgreeTerms(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>

          <div className="loginsignup-fields">
            <input
              type="text"
              value={username}
              placeholder="Your Name"
              onChange={(e) => setUserName(e.target.value)}
              required /* form validation */
            />

            <input
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account? <span>Login here</span>
          </p>

          <div className="loginsignup-agree">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
            />
            <p>By Continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;
