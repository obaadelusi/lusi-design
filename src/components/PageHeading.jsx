import { useLocation, Link } from "react-router-dom";
import "./PageHeading.scss";

const PageHeading = ({ title }) => {
  const { pathname } = useLocation();

  function getBreadcrumbs() {
    let pathArray = pathname.split("/");
    for (let i = 0; i < pathArray.length; i++) {
      pathArray[i] = pathArray[i].charAt(0).toUpperCase() + pathArray[i].slice(1);
    }

    return pathArray.join(" / ");
  }

  return (
    <div className="PageHeading">
      <h1 className="PageHeading-title">{title}</h1>
      <div className="PageHeading-breadcrumbs">
        <Link to="/dashboard">Home</Link>
        {getBreadcrumbs()}
      </div>
    </div>
  );
};

PageHeading.defaultProps = {
  children: "Page Title",
};

export default PageHeading;
