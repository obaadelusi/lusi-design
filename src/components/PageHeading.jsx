/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./PageHeading.scss";

const PageHeading = ({ title }) => {
  return (
    <div className="PageHeading">
      <h1 className="PageHeading-title">{title}</h1>
      <div className="PageHeading-breadcrumbs">
        <Link to="/dashboard">Home</Link> / {title}
      </div>
    </div>
  );
};

PageHeading.defaultProps = {
  title: "Page Title",
};

export default PageHeading;
