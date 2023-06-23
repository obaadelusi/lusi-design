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
      {action && <button className="Alert-button">{button}</button>}
    </div>
  );
};

Alert.Title = function ({ children }) {
  return <span className="Alert-title">{children}</span>;
};

Alert.defaultProps = {
  style: "",
  variant: "info",
};

export default Alert;
