import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul className="Footer-links">
        <li className="Footer-link">
          <a href="#">Support</a>
        </li>
        <li className="Footer-link">
          <a href="#">Privacy</a>
        </li>
        <li className="Footer-link">
          <a href="#">Help Centre</a>
        </li>
      </ul>

      <div className="Footer-copyright">&copy;2023 Lusi</div>
    </footer>
  );
};

export default Footer;
