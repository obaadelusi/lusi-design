import { Link } from "react-router-dom";
import "./Buttons.scss";
import { InfoCircle } from "react-bootstrap-icons";

const Button = ({ children, size, variant, color, ...restProps }) => {
  return (
    <button className={`Button Button-${color} ${variant} ${size}`} {...restProps}>
      <span>{children}</span>
    </button>
  );
};

const IconButton = ({ icon, children, size, variant, color, ...restProps }) => {
  return (
    <button className={`Button Button-${color} ${variant} ${size}`} {...restProps}>
      {icon}
      <span>{children}</span>
    </button>
  );
};

const FloatingActionButton = ({ children, size, variant, color, ...restProps }) => {
  return (
    <button className={`Button Button-${color} ${variant} ${size} fab`} {...restProps}>
      {children}
    </button>
  );
};

const LinkButton = ({ children, size, variant, color, ...restProps }) => {
  return (
    <Link className={`Button Button-${color} ${variant} ${size}`} {...restProps}>
      <span>{children}</span>
    </Link>
  );
};

Button.defaultProps = {
  color: "primary",
  size: "medium",
};

IconButton.defaultProps = {
  color: "primary",
  icon: <InfoCircle />,
  size: "medium",
};

FloatingActionButton.defaultProps = {
  color: "primary",
  size: "medium",
};

LinkButton.defaultProps = {
  color: "primary",
  size: "medium",
};

export { Button, FloatingActionButton, IconButton, LinkButton };
