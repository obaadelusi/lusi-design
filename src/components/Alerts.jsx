import { CheckCircle, ExclamationCircle, ExclamationTriangle, InfoCircle, XCircle } from "react-bootstrap-icons";
import "./Alerts.scss";

const Alert = ({ children, action, style, variant }) => {
  let icon,
    iconSize = 20;

  switch (variant) {
    case "error":
    case "error-outline":
    case "error-fill":
      icon = <ExclamationCircle size={iconSize} />;
      break;
    case "warning":
    case "warning-outline":
    case "warning-fill":
      icon = <ExclamationTriangle size={iconSize} />;
      break;
    case "info":
    case "info-outline":
    case "info-fill":
      icon = <InfoCircle size={iconSize} />;
      break;
    case "success":
    case "success-outline":
    case "success-fill":
      icon = <CheckCircle size={iconSize} />;
      break;
    default:
      icon = <InfoCircle size={iconSize} />;
      break;
  }

  let button;

  switch (action) {
    case "undo":
      button = <span>UNDO</span>;
      break;
    default:
      button = <XCircle />;
      break;
  }

  return (
    <div className={`Alert Alert-${variant} ${style}`}>
      {icon}
      <p>{children}</p>
      {action && <button className="Alert__button">{button}</button>}
    </div>
  );
};

const AlertTitle = ({ children }) => {
  return <span className="Alert__title">{children}</span>;
};

Alert.defaultProps = {
  // icon: <InfoCircle />,
  style: "",
  variant: "info",
};

AlertTitle.defaultProps = {
  children: "Info",
};

export { AlertTitle };

export default Alert;
