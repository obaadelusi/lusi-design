import "../components/Form.scss";
import "./LoginPage.scss";
import { LinkButton } from "../components/Buttons";
import loginImg from "../assets/loginImg.jpg";

const LoginPage = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("From the Login page button!");
  }
  return (
    <div className="Login">
      <figure className="Login-image">
        <img src={loginImg} alt="colourful background image" />
      </figure>
      <div className="Login-container">
        <div className="Form Login-form">
          <form action="#">
            <h1 className="Form-title">Sign In</h1>
            <div className="Form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="Form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <LinkButton path="/dashboard" variant="primary">
              Log In
            </LinkButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
