import PageHeading from "../components/PageHeading";

const DashboardPage = () => {
  return (
    <div className="DashboardPage">
      <PageHeading title="Dashboard" />
      <div className="Page__container">
        <div className="Page__section-container">
          <div className="Page__section">
            <h2>DASHBOARD coming soon</h2>
            <p>Check out these components</p>
            <ul style={{ listStyle: "inside" }}>
              <li>
                <a href="components/accordion">Accordion</a>
              </li>
              <li>
                <a href="components/alerts">Alerts</a>
              </li>
              <li>
                <a href="components/avatars">Avatars</a>
              </li>
              <li>
                <a href="components/badges">Badges</a>
              </li>
              <li>
                <a href="components/buttons">Buttons</a>
              </li>
              <li>
                <a href="components/cards">Cards</a>
              </li>
              <li>
                <a href="components/chips">Chips</a>
              </li>
              <li>
                <a href="components/dialogs">Dialogs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Page__section-container">
          <div className="Page__section">
            <h2>PAGES</h2>
            <p>Check out other pages</p>
            <ul style={{ listStyle: "inside" }}>
              <h3>Auth</h3>
              <li>
                <a href="auth/sign-in">Sign In</a>
              </li>
              <li>
                <a href="auth/sign-up">Sign Up</a>
              </li>
              <li>
                <a href="auth/404">404 Page</a>
              </li>
              <li>
                <a href="auth/500">500 Page</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
