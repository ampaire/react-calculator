/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const {
    name, btn, color, wide, clickHandler,
  } = props;
  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
  };
  return (
    <button type="button" className={btn} style={style} onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  btn: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: "orange",
  clickHandler: PropTypes.func.isRequired,
};


export default Button;
