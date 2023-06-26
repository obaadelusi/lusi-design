import { useEffect } from "react";

import { LinkButton } from "../components/Buttons";
import "./ErrorPage.scss";

const Error500Page = () => {
  useEffect(() => {
    document.title = "Server error — Lusi Design";
  }, []);
  return (
    <div className="ErrorPage">
      <div className="ErrorPage-container">
        <h1>500</h1>
        <h2>Internal server error.</h2>
        <p>The server encountered something unexpected that didn't allow it to complete the request.</p>
        <LinkButton to="/" variant="fill">
          Return to website
        </LinkButton>
      </div>
    </div>
  );
};

export default Error500Page;
