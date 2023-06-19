import "./Badges.scss";

const Badge = ({ content, variant, invisible }) => {
  const isInvisible = invisible ? "Badge-invisible" : "";

  return (
    <div className={`Badge Badge-${variant} ${isInvisible}`}>
      <span>{content}</span>
    </div>
  );
};

const BadgeContainer = ({ children }) => {
  return <div className="Badge-container">{children}</div>;
};

Badge.defaultProps = {
  variant: "primary",
  invisible: false,
};

export { Badge, BadgeContainer };
