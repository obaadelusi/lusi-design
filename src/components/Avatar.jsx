import React from "react";
import "./Avatar.scss";

const Avatar = ({ children, bgColor, src, srcSet, size, ...restProps }) => {
  return (
    <div className="Avatar" style={{ width: size + "px", height: size + "px", backgroundColor: bgColor }}>
      {src || srcSet ? <img src={src || srcSet} {...restProps} /> : children}
    </div>
  );
};

export default Avatar;
