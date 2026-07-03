/* eslint-disable react/prop-types */
import "./Cards.scss";

const Card = ({ children, className, ...props }) => {
  return <div className={`Card ${className || ""}`} {...props}>{children}</div>;
};

const CardBody = ({ children, className, ...props }) => {
  return <div className={`Card-body ${className || ""}`} {...props}>{children}</div>;
};

const CardImage = ({ src }) => {
  return <img src={src} alt={src} loading="lazy" />;
};

const CardTitle = ({ children }) => {
  return <h2>{children}</h2>;
};

export { Card, CardImage, CardBody, CardTitle };
