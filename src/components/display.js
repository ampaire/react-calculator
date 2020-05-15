import React from "react";
import PropTypes from "prop-types";

const Display = ({ result }) => <input type="text" defaultValue={result} />;

Display.defaultValue = { result: "0" };
Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
