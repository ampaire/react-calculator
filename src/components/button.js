/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, btn, color, size }) => {
  const style = {
    width: size ? '50%' : '25%',
    backgroundColor: color,
  };
  return (
    <button type="button" className={btn} style={style}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.bool,
  color: PropTypes.string,
  btn: PropTypes.string,
};

Button.defaultProps = {
  size: false,
  color: 'orange',
};

Button.propTypes = { name: PropTypes.string.isRequired };

export default Button;
