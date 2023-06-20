import React, { useState, useContext, createContext } from "react";
import "./Accordion.scss";
import { ChevronDown } from "react-bootstrap-icons";

const ToggleContext = createContext();

function Accordion({ children, ...restProps }) {
  return (
    <div className="Accordion-container" {...restProps}>
      <div className="Accordion-inner">{children}</div>
    </div>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return (
    <h2 className="Accordion-title" {...restProps}>
      {children}
    </h2>
  );
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return (
    <div className="Accordion-frame" {...restProps}>
      {children}
    </div>
  );
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <div className="Accordion-item" {...restProps}>
        {children}
      </div>
    </ToggleContext.Provider>
  );
};

Accordion.ItemHeader = function AccordionItemHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <div className="Accordion-item-header" onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      <h3>{children}</h3>
      <ChevronDown />
    </div>
  );
};

Accordion.ItemBody = function AccordionItemBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return (
    <div className={`Accordion-item-body ${toggleShow ? "open" : "close"}`}>
      <p>{children}</p>
    </div>
  );
};

export default Accordion;
