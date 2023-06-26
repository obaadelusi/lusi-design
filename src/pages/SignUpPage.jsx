import { useEffect, useState } from "react";

import Alert from "../components/Alerts";
import { Button, LinkButton } from "../components/Buttons";
import colorfulBg2 from "../assets/colorfulBg2.jpg";
import starIcon from "../assets/starIcon.png";

import "../components/FormControls.scss";
import "./SignUpPage.scss";

const SignUpPage = () => {
  const [showErrorText, setShowErrorText] = useState(false);

  useEffect(() => {
    document.title = "Sign Up — Lusi Design";
  }, []);

  function handleInputChange(e) {
    const t = e.currentTarget;
    if (t.value.length === 0) {
      t.nextElementSibling.classList.add("show");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    location.href = "/";
  }

  return (
    <div className="SignUp">
      <figure className="SignUp-bg-image">
        <img src={colorfulBg2} alt="colourful background image" />
      </figure>
      <div className="SignUp-form-container">
        <figure className="SignUp-form-logo">
          <img src={starIcon} alt="lusi design logo" />
          <span>Lusi Design</span>
        </figure>

        <div className="Form SignUp-form">
          <form action="/" method="GET" onSubmit={handleSubmit}>
            <h1 className="Form-title">Sign Up</h1>
            <div className="Form-group">
              <label htmlFor="first-name">First name</label>
              <input type="text" id="first-name" name="firstname" onChange={handleInputChange} />
              <div className="Form-input-error">First name is required</div>
            </div>
            <div className="Form-group">
              <label htmlFor="last-name">Last name</label>
              <input type="text" id="last-name" name="lastname" onChange={handleInputChange} />
              <div className="Form-input-error">Last name is required</div>
            </div>
            <div className="Form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onChange={handleInputChange} />
              <div className="Form-input-error">Email is required</div>
            </div>
            <div className="Form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" onChange={handleInputChange} />
              <div className="Form-input-error">Password is required</div>
            </div>
            <div className="Form-group">
              <label htmlFor="confirm-password">Confirm password</label>
              <input type="password" id="confirm-password" name="confirmpassword" onChange={handleInputChange} />
              <div className="Form-input-error">Please confirm password</div>
            </div>
            <Button type="submit" variant="fill" color="primary">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
