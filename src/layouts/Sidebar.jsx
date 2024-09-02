import { NavLink } from 'react-router-dom';
import { Capsule, CardHeading, ChatSquareDots, Coin, ColumnsGap, ExclamationCircle, FileTextFill, Gear, ListTask, MenuButton, PatchCheck, PlusSquare, Receipt, WindowFullscreen, PersonGear, ChevronDown, PieChart, Check2Square, Table, Heart, Lock, XLg, PersonCircle } from 'react-bootstrap-icons';

import './Sidebar.scss';
import profPicture from '../assets/obaAdelusi.png';
import starIcon from '../assets/starIcon.png';

const Sidebar = () => {
  function toggleSubmenu(e) {
    e.target.nextElementSibling.classList.toggle('show');
  }

  function hideSidebar() {
    document.getElementById('sidebar').classList.remove('show');
  }

  return (
    <aside className="Sidebar" id="sidebar">
      <div className="Sidebar-container">
        <div className="Sidebar-menu-closeicon" onClick={hideSidebar}>
          <XLg size={20} />
        </div>
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
            <li className="Sidebar-list-item">
              <ColumnsGap />
              &ensp;
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'Sidebar-link--active' : undefined)}>
                Dashboard
              </NavLink>
            </li>
          </ul>
        </section>
        <section className="Sidebar-section">
          <h2 className="Sidebar-section-title">COMPONENTS</h2>
          <ul className="Sidebar-list">
            <li className="Sidebar-list-item">
              <ListTask />
              &ensp;
              <NavLink to="/components/accordion" className={({ isActive }) => (isActive ? 'Sidebar-link--active' : undefined)}>
                Accordion
              </NavLink>
            </li>
            <li className="Sidebar-list-item">
              <ExclamationCircle />
              &ensp;
              <NavLink to="/components/alerts" className={({ isActive }) => (isActive ? 'Sidebar-link--active' : undefined)}>
                Alerts
              </NavLink>
            </li>
            <li className="Sidebar-list-item">
              <PersonCircle />
              &ensp;
              <NavLink to="/components/avatars" className={({ isActive }) => (isActive ? 'Sidebar-link--active' : undefined)}>
                Avatars
              </NavLink>
            </li>
            <li className="Sidebar-list-item">
              <PatchCheck />
              &ensp;
              <NavLink to="/components/badges" className={({ isActive }) => (isActive ? 'Sidebar-link--active' : undefined)}>
                Badges
              </NavLink>
            </li>
            <li className="Sidebar-list-item">
              <PlusSquare />
              &ensp;
              <NavLink to="/components/buttons" className={({ isActive }) => (isActive ? 'Sidebar-link--active' : undefined)}>
                Buttons
              </NavLink>
            </li>
            <li className="Sidebar-list-item">
              <CardHeading />
              &ensp;
              <NavLink to="/components/cards" className={({ isActive }) => (isActive ? 'Sidebar-link--active' : undefined)}>
                Cards
              </NavLink>
            </li>
            <li className="Sidebar-list-item">
              <Capsule />
              &ensp;
              <NavLink to="/components/chips" className={({ isActive }) => (isActive ? 'Sidebar-link--active' : undefined)}>
                Chips
              </NavLink>
            </li>
            <li className="Sidebar-list-item">
              <WindowFullscreen />
              &ensp;
              <NavLink to="/components/dialogs" className={({ isActive }) => (isActive ? 'Sidebar-link--active' : undefined)}>
                Dialogs
              </NavLink>
            </li>
            <li className="Sidebar-list-item">
              <MenuButton />
              &ensp;
              <a href="#">Menus</a>
            </li>
            <li className="Sidebar-list-item">
              <ChatSquareDots />
              &ensp;
              <a href="#">Tooltips</a>
            </li>
          </ul>
        </section>
        <section className="Sidebar-section">
          <h2 className="Sidebar-section-title">PAGES</h2>
          <ul className="Sidebar-links">
            <li className="Sidebar-list-item" onClick={toggleSubmenu}>
              <Lock />
              &ensp;
              <div>Auth</div>
              <ChevronDown />
            </li>
            <div className="Sidebar-submenu">
              <div className="Sidebar-submenu-links">
                <a href="/auth/sign-in" className="Sidebar-submenu-link">
                  Sign In
                </a>
                <a href="/auth/sign-up" className="Sidebar-submenu-link">
                  Sign Up
                </a>
                <a href="/auth/404" className="Sidebar-submenu-link">
                  404 Page
                </a>
                <a href="/auth/500" className="Sidebar-submenu-link">
                  500 Page
                </a>
              </div>
            </div>
            <li className="Sidebar-list-item">
              <Coin />
              &ensp;
              <a href="#">Pricing</a>
            </li>
            <li className="Sidebar-list-item">
              <PersonGear />
              &ensp;
              <a href="#">Profile</a>
            </li>
            <li className="Sidebar-list-item">
              <Receipt />
              &ensp;
              <a href="#">Invoice</a>
            </li>
            <li className="Sidebar-list-item">
              <Gear />
              &ensp;
              <a href="#">Settings</a>
            </li>
          </ul>
        </section>
        <section className="Sidebar-section">
          <h2 className="Sidebar-section-title">ELEMENTS</h2>
          <ul className="Sidebar-links">
            <li className="Sidebar-list-item">
              <PieChart />
              &ensp;
              <a href="#">Charts</a>
            </li>
            <li className="Sidebar-list-item" onClick={toggleSubmenu}>
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
            <li className="Sidebar-list-item">
              <Table />
              &ensp;
              <a href="#">Tables</a>
            </li>
            <li className="Sidebar-list-item">
              <Heart />
              &ensp;
              <a href="#">Icons</a>
            </li>
          </ul>
        </section>
        <section className="Sidebar-section">
          <ul className="Sidebar-links">
            <li className="Sidebar-list-item">
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
      </div>
    </aside>
  );
};

export default Sidebar;
