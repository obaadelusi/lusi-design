import PageHeading from "../components/PageHeading";

const DashboardPage = () => {
  return (
    <div className="DashboardPage">
      <PageHeading title="Dashboard" />
      <div className="Page__container">
        <div className="Page__section-container">
          <div className="Page__section">
            <h2>Dashboard coming soon</h2>
            <p>Check out other pages...</p>
            <ul style={{ listStyle: "inside" }}>
              <li>
                <a href="components/accordion">Accordion</a>
              </li>
              <li>
                <a href="components/alerts">Alerts</a>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
