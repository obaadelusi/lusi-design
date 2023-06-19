import { Outlet, Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="Homepage">
      <h1>Components</h1>
      <ul className="Homepage-list">
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
