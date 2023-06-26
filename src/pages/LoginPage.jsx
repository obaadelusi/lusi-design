import { useEffect, useState } from "react";

import Alert from "../components/Alerts";
import { Button, LinkButton } from "../components/Buttons";
import loginImg from "../assets/loginImg.jpg";
import starIcon from "../assets/starIcon.png";

import "../components/FormControls.scss";
import "./LoginPage.scss";

const LoginPage = () => {
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    document.title = "Log in — Lusi Design";
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
    <div className="Login">
      <figure className="Login-bg-image">
        <img src={loginImg} alt="colourful background image" />
      </figure>
      <div className="Login-form-container">
        <figure className="Login-form-logo">
          <img src={starIcon} alt="lusi design logo" />
          <span>Lusi Design</span>
        </figure>
        <Alert>
          Use <b>demo@lusi.app</b> and <b>xpassword</b> to log in
        </Alert>

        <div className="Form Login-form">
          <form action="/" method="GET" onSubmit={handleSubmit}>
            <h1 className="Form-title">Log In</h1>
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
              Log In
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

export default LoginPage;
