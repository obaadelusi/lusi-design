import { useEffect, useState } from "react";

import Alert from "../components/Alerts";
import { Button, LinkButton } from "../components/Buttons";
import colorfulBg from "../assets/colorfulBg.jpg";
import starIcon from "../assets/starIcon.png";

import "../components/FormControls.scss";
import "./SignInPage.scss";

const SignInPage = () => {
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    document.title = "Sign In — Lusi Design";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value == "" || password.value == "") {
      setAlertMessage(`Please enter your username and password`);
    } else if (username.value != "demo@lusi.app" || password.value != "xpassword") {
      setAlertMessage("Incorrect username or password");
      console.dir(e.target);
    } else {
      location.href = "/";
    }
  }
  return (
    <div className="SignIn">
      <figure className="SignIn-bg-image">
        <img src={colorfulBg} alt="colourful background image" />
      </figure>
      <div className="SignIn-form-container">
        <figure className="SignIn-form-logo">
          <img src={starIcon} alt="lusi design logo" />
          <span>Lusi Design</span>
        </figure>
        <Alert>
          Use <b>demo@lusi.app</b> and <b>xpassword</b> to sign in
        </Alert>

        <div className="Form SignIn-form">
          <form action="/" method="GET" onSubmit={handleSubmit}>
            <h1 className="Form-title">Sign In</h1>
            <div className="Form-group">
              <label htmlFor="username">
                Username<span>*</span>
              </label>
              <input type="text" id="username" name="username" defaultValue="demo@lusi.app" />
            </div>
            <div className="Form-group">
              <label htmlFor="password">
                Password<span>*</span>
              </label>
              <input type="password" id="password" name="password" defaultValue="xpassword" />
            </div>
            {alertMessage && <Alert variant="error">{alertMessage}</Alert>}
            <Button type="submit" variant="fill" color="primary">
              Sign In
            </Button>
            <LinkButton to="#" variant="text" size="small">
              Forgot Password
            </LinkButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
