import { Bell, ChatLeft, List, Power, Search } from "react-bootstrap-icons";
import { Badge, BadgeContainer } from "../components/Badges";
import "./Header.scss";

const Header = () => {
  function showMenu(e) {
    e.stopPropagation();
    document.getElementById("sidebar").classList.add("show");
  }

  return (
    <header className="Header">
      <div className="Header-mobilemenu-icon" onClick={showMenu}>
        <List size={28} />
      </div>
      <label className="Header-search" htmlFor="header-search">
        <Search size={18} />
        <input type="search" name="q" id="header-search" placeholder="Search..." />
      </label>
      <ul className="Header-links">
        <li className="Header-link">
          <a href="#">
            <BadgeContainer>
              <Badge content={6} />
              <Bell size={20} title="notifications" />
            </BadgeContainer>
          </a>
        </li>
        <li className="Header-link">
          <a href="#">
            <BadgeContainer>
              <Badge content={3} />
              <ChatLeft size={20} title="messages" />
            </BadgeContainer>
          </a>
        </li>
        <li className="Header-link">
          <a href="#">
            <Power size={22} title="action" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
