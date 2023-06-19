import "./Cards.scss";

const Card = ({ children }) => {
  return <div className="Card">{children}</div>;
};

const CardBody = ({ children }) => {
  return <div className="Card-body">{children}</div>;
};

const CardImage = ({ src }) => {
  return <img src={src} alt={src} loading="lazy" />;
};

const CardTitle = ({ children }) => {
  return <h2>{children}</h2>;
};

export { Card, CardImage, CardBody, CardTitle };
