import { NavLink } from "react-router-dom";

import "./Sidebar.scss";
import profPicture from "../assets/profPicture.png";
import starIcon from "../assets/starIcon.png";
import { Capsule, CardHeading, ChatSquareDots, Coin, ColumnsGap, ExclamationCircle, FileTextFill, Gear, ListTask, MenuButton, PatchCheck, PlusSquare, Receipt, WindowFullscreen, PersonGear, ChevronDown, PieChart, Check2Square, Table, Heart, Lock } from "react-bootstrap-icons";

const Sidebar = () => {
  function handleClick(e) {
    e.target.nextElementSibling.classList.toggle("show");
  }

  return (
    <aside className="Sidebar">
      <section className="Sidebar-section">
        <div className="Sidebar-header">
          <figure className="Sidebar-header-logo">
            <img src={starIcon} alt="logo" />
          </figure>
          <h1 className="Sidebar-header-title">Lusi</h1>
        </div>
      </section>

      <section className="Sidebar-section">
        <ul className="Sidebar-links">
          <li className="Sidebar-link">
            <ColumnsGap />
            &ensp;
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "Sidebar-link--active" : undefined)}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </section>

      <section className="Sidebar-section">
        <h2 className="Sidebar-section-title">COMPONENTS</h2>
        <ul className="Sidebar-links">
          <li className="Sidebar-link">
            <ExclamationCircle />
            &ensp;
            <NavLink to="/components/alerts" className={({ isActive }) => (isActive ? "Sidebar-link--active" : undefined)}>
              Alerts
            </NavLink>
          </li>
          <li className="Sidebar-link">
            <ListTask />
            &ensp;
            <a href="#">Accordion</a>
          </li>
          <li className="Sidebar-link">
            <PatchCheck />
            &ensp;
            <NavLink to="/components/badges" className={({ isActive }) => (isActive ? "Sidebar-link--active" : undefined)}>
              Badges
            </NavLink>
          </li>
          <li className="Sidebar-link">
            <PlusSquare />
            &ensp;
            <NavLink to="/components/buttons" className={({ isActive }) => (isActive ? "Sidebar-link--active" : undefined)}>
              Buttons
            </NavLink>
          </li>
          <li className="Sidebar-link">
            <CardHeading />
            &ensp;
            <NavLink to="/components/cards" className={({ isActive }) => (isActive ? "Sidebar-link--active" : undefined)}>
              Cards
            </NavLink>
          </li>
          <li className="Sidebar-link">
            <Capsule />
            &ensp;
            <a href="#">Chips</a>
          </li>
          <li className="Sidebar-link">
            <WindowFullscreen />
            &ensp;
            <a href="#">Dialogs</a>
          </li>
          <li className="Sidebar-link">
            <MenuButton />
            &ensp;
            <a href="#">Menus</a>
          </li>
          <li className="Sidebar-link">
            <ChatSquareDots />
            &ensp;
            <a href="#">Tooltips</a>
          </li>
        </ul>
      </section>

      <section className="Sidebar-section">
        <h2 className="Sidebar-section-title">PAGES</h2>
        <ul className="Sidebar-links">
          <li className="Sidebar-link" onClick={handleClick}>
            <Lock />
            &ensp;
            <div>Auth</div>
            <ChevronDown />
          </li>
          <div className="Sidebar-submenu">
            <div className="Sidebar-submenu-links">
              <a href="/login" className="Sidebar-submenu-link">
                Sign In
              </a>
              <a href="#" className="Sidebar-submenu-link">
                Sign Up
              </a>
              <a href="#" className="Sidebar-submenu-link">
                404 Page
              </a>
              <a href="#" className="Sidebar-submenu-link">
                500 Page
              </a>
            </div>
          </div>

          <li className="Sidebar-link">
            <Coin />
            &ensp;
            <a href="#">Pricing</a>
          </li>
          <li className="Sidebar-link">
            <PersonGear />
            &ensp;
            <a href="#">Profile</a>
          </li>
          <li className="Sidebar-link">
            <Receipt />
            &ensp;
            <a href="#">Invoice</a>
          </li>
          <li className="Sidebar-link">
            <Gear />
            &ensp;
            <a href="#">Settings</a>
          </li>
        </ul>
      </section>

      <section className="Sidebar-section">
        <h2 className="Sidebar-section-title">ELEMENTS</h2>
        <ul className="Sidebar-links">
          <li className="Sidebar-link">
            <PieChart />
            &ensp;
            <a href="#">Charts</a>
          </li>
          <li className="Sidebar-link" onClick={handleClick}>
            <Check2Square />
            &ensp;
            <div>Forms</div>
            <ChevronDown />
          </li>
          <div className="Sidebar-submenu">
            <div className="Sidebar-submenu-links">
              <a href="/login" className="Sidebar-submenu-link">
                Selection Controls
              </a>
              <a href="#" className="Sidebar-submenu-link">
                Selects
              </a>
              <a href="#" className="Sidebar-submenu-link">
                Text Fields
              </a>
              <a href="#" className="Sidebar-submenu-link">
                Editors
              </a>
            </div>
          </div>

          <li className="Sidebar-link">
            <Table />
            &ensp;
            <a href="#">Tables</a>
          </li>

          <li className="Sidebar-link">
            <Heart />
            &ensp;
            <a href="#">Icons</a>
          </li>
        </ul>
      </section>

      <section className="Sidebar-section">
        <ul className="Sidebar-links">
          <li className="Sidebar-link">
            <FileTextFill />
            &ensp;
            <a href="#">Documentation</a>
          </li>
        </ul>
      </section>

      <section className="Sidebar-section">
        <div className="Sidebar-profile">
          <figure className="Sidebar-profile-image">
            <img src={profPicture} alt="profile image" />
          </figure>
          <div className="Sidebar-profile-content">
            <h3 className="Sidebar-profile-title">Oba Adelusi</h3>
            <p className="Sidebar-profile-desc">Frontend Developer</p>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
