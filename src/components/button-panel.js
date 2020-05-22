/* eslint-disable jsx-quotes */

import React from "react";
import Button from "./button";
import PropTypes from "prop-types";


const ButtonPanel = ({ clickHandler }) => (
  <div>
    <div className="row btn-group">
      <Button name="AC" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button
        name="+/-"
        btn="btn"
        color="#e0e0e0"
        clickHandler={clickHandler}
      />
      <Button name="%" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="/" btn="btn" clickHandler={clickHandler} />
    </div>
    <div className="row btn-group">
      <Button name="7" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="8" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="9" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="X" btn="btn" clickHandler={clickHandler} />
    </div>
    <div className="row btn-group">
      <Button name="4" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="5" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="6" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="-" btn="btn" clickHandler={clickHandler} />
    </div>
    <div className="row btn-group">
      <Button name="1" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="2" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="3" btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="+" btn="btn" clickHandler={clickHandler} />
    </div>
    <div className="row btn-group">
      <Button name="0" btn="btn" wide color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="." btn="btn" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="=" btn="btn" clickHandler={clickHandler} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
