import './Dialogs.scss';

const Dialog = ({ children, onBgClick, maxWidth }) => {
  function getMaxWidth() {
    let w;
    switch (maxWidth) {
      case 'xs':
        w = '290px';
        break;
      case 'sm':
        w = '460px';
        break;
      case 'md':
        w = '600px';
        break;
      case 'lg':
        w = '960px';
        break;
      case 'xl':
        w = '1280px';
        break;
      default:
        w = '600px';
        break;
    }

    return w;
  }

  return (
    <div className="Dialog open">
      <div className="Dialog-bg" onClick={onBgClick}></div>
      <div className="Dialog-modal" style={{ maxWidth: getMaxWidth() }}>
        {children}
      </div>
    </div>
  );
};

Dialog.Heading = ({ children }) => {
  return <h2 className="Dialog-heading">{children}</h2>;
};

Dialog.Body = ({ children }) => {
  return <div className="Dialog-body">{children}</div>;
};

Dialog.BodyText = ({ children }) => {
  return <p className="Dialog-body-text">{children}</p>;
};

Dialog.Buttons = ({ children }) => {
  return <div className="Dialog-buttons">{children}</div>;
};

export { Dialog };
