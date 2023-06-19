import "./PageHeading.scss";

const PageHeading = ({ title }) => {
  return (
    <div className="PageHeading">
      <h1 className="PageHeading-title">{title}</h1>
      <div className="PageHeading-breadcrumbs">
        <a href="/dashboard">Dashboard</a> / Components / Breadcrumbs
      </div>
    </div>
  );
};

PageHeading.defaultProps = {
  children: "Page Title",
};

export default PageHeading;
