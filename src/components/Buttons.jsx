import { Link } from "react-router-dom";
import "./Buttons.scss";
import { InfoCircle } from "react-bootstrap-icons";

const Button = ({ action, children, isDisabled, size, style, type, variant }) => {
  return (
    <button type={type} className={`Button Button-${variant} ${style} ${size}`} onClick={action} disabled={isDisabled}>
      <span>{children}</span>
    </button>
  );
};

const IconButton = ({ action, icon, children, isDisabled, size, style, type, variant }) => {
  return (
    <button type={type} className={`Button Button-${variant} ${style} ${size}`} onClick={action} disabled={isDisabled}>
      {icon}
      <span>{children}</span>
    </button>
  );
};

const FloatingActionButton = ({ action, children, isDisabled, size, style, type, variant }) => {
  return (
    <button type={type} className={`Button Button-${variant} ${style} ${size} fab`} onClick={action} disabled={isDisabled}>
      {children}
    </button>
  );
};

const LinkButton = ({ children, path, size, style, variant }) => {
  return (
    <Link to={path}>
      <span className={`Button Button-${variant} ${style} ${size}`}>{children}</span>
    </Link>
  );
};

Button.defaultProps = {
  variant: "primary",
  type: "button",
  isDisabled: false,
  size: "medium",
};

IconButton.defaultProps = {
  variant: "primary",
  type: "button",
  isDisabled: false,
  icon: <InfoCircle />,
  size: "medium",
};

FloatingActionButton.defaultProps = {
  variant: "primary",
  type: "button",
  isDisabled: false,
  size: "medium",
};

LinkButton.defaultProps = {
  variant: "primary",
  size: "medium",
};

export { Button, FloatingActionButton, IconButton, LinkButton };
