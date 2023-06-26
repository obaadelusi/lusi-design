import "./FormControls.scss";

const ToggleSwitch = ({ children, defaultCheck, onToggle }) => {
  function handleChange(e) {
    onToggle(e.target);
    console.log(e.target.checked);
  }

  return (
    <div className="ToggleSwitch">
      <label className="ToggleSwitch-switch">
        <input type="checkbox" defaultChecked={defaultCheck} onChange={handleChange} />
        <span className="ToggleSwitch-slider"></span>
      </label>
      <span className="ToggleSwitch-label">{children}</span>
    </div>
  );
};

ToggleSwitch.defaultProps = {
  defaultCheck: false,
};

export { ToggleSwitch };
