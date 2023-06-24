import "./Chip.scss";

const Chip = ({ children, clickable, color, style, ...restProps }) => {
  return (
    <div className={`Chip ${color} ${style} ${clickable ? "clickable" : ""}`} aria-label="chip" {...restProps}>
      {children}
    </div>
  );
};

Chip.Icon = function ({ children }) {
  return <div className="Chip-icon">{children}</div>;
};

Chip.Text = function ({ children }) {
  return <span className="Chip-text">{children}</span>;
};

Chip.Button = function ({ children, ...restProps }) {
  return (
    <div className="Chip-button clickable" aria-label="delete icon" {...restProps}>
      {children}
    </div>
  );
};

Chip.defaultProps = {
  color: "default",
  clickable: false,
  style: "",
};

export default Chip;
