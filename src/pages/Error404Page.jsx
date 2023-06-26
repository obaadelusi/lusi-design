import { LinkButton } from "../components/Buttons";
import "./ErrorPage.scss";

const Error404Page = () => {
  return (
    <div className="ErrorPage">
      <div className="ErrorPage-container">
        <h1>404</h1>
        <h2>Page not found.</h2>
        <p>The page you are looking for might have been removed.</p>
        <LinkButton to="/" variant="fill">
          Return to website
        </LinkButton>
      </div>
    </div>
  );
};

export default Error404Page;
