import React from "react";
import "./button.css";
import PropTypes from "prop-types";

const Button = ({
  variant = "default",
  color,
  hvrFocus = false,
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  ...otherProps
}) => {
  const variants = ["default", "text", "outline"];
  const colors = ['primary','secondary','success','danger','warning','info']
  const hvrClass = hvrFocus === true && `active-${variant}`;
  const shadow = disableShadow ? "no-shadow" : "";
  const disabledBtn = disabled ? "disabled_button" : "";

  const variantCheck = variants.includes(variant) ? variant : variants[0];
  const colorsCheck = colors.includes(color) ? color : '';
 
  return (
    <div className="btn__group">
      <button
        className={`btn ${variantCheck} ${hvrClass} ${shadow} ${disabledBtn} ${colorsCheck}`}
        {...otherProps}
        disabled={disabled}
      >
        { startIcon === undefined ? '' : <i className={startIcon}></i> }
        Default
        { endIcon === undefined ? '' : <i className={endIcon}></i> }
      </button>
    </div>
  );
};

// Checking Types
Button.propTypes = {
  variant: PropTypes.string,
  hvrFocus: PropTypes.string,
};

export default Button;
