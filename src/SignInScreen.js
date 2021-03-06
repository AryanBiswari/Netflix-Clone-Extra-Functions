import React from "react";
import "./SigninScreen.css";
function SignInScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Enter your email address" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link">Sign Up Now!</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
