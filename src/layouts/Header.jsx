import { BellFill, ChatLeftFill, PersonFill, Search } from "react-bootstrap-icons";
import { Badge, BadgeContainer } from "../components/Badges";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <label className="Header-search" htmlFor="header-search">
        <Search size={18} />
        <input type="search" name="q" id="header-search" placeholder="Search..." />
      </label>
      <ul className="Header-links">
        <li className="Header-link">
          <a href="#">
            <BadgeContainer>
              <Badge content={6} />
              <BellFill size={20} title="notifications" />
            </BadgeContainer>
          </a>
        </li>
        <li className="Header-link">
          <a href="#">
            <BadgeContainer>
              <Badge content={3} />
              <ChatLeftFill size={20} title="messages" />
            </BadgeContainer>
          </a>
        </li>
        <li className="Header-link">
          <a href="#">
            <PersonFill size={22} title="profile" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
