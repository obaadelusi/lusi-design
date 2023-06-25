import { LinkButton } from "../components/Buttons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul className="Footer-list">
        <li className="Footer-list-item">
          <a href="#" className="Footer-link">
            Help Centre
          </a>
        </li>
        <li className="Footer-list-item">
          <a href="#" className="Footer-link">
            Privacy
          </a>
        </li>
        <li className="Footer-list-item">
          <LinkButton variant="secondary" path="https://github.com/obaadelusi/lusi-design" target="_blank">
            GitHub
          </LinkButton>
        </li>
      </ul>

      <div className="Footer-copyright">&copy;2023 Lusi</div>
    </footer>
  );
};

export default Footer;
