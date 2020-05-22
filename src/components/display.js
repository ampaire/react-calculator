/* eslint-disable react/require-default-props */
/* eslint-disable jsx-quotes */

import React from "react";
import PropTypes from "prop-types";

const Display = props => { 
  const { result } = props;
  return (
  <div className="display"> 
    {result} 
  </div> 
  );
};

Display.prop = { result: PropTypes.string};

Display.defaultProps = { result: "0" };
Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
