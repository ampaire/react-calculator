import React from "react";
import Button from "./button";

const ButtonPanel = () => (
  <div>
    <div className="row">
      <Button name="AC" className="col-md-3" />
      <Button name="+/-" className="col-md-3" />
      <Button name="%" className="col-md-3" />
      <Button name="/" className="col-md-3" />
    </div>
    <div className="row">
      <Button name="7" className="col-md-3" />
      <Button name="8" className="col-md-3" />
      <Button name="9" className="col-md-3" />
      <Button name="X" className="col-md-3" />
    </div>
    <div className="row">
      <Button name="4" className="col-md-3" />
      <Button name="5" className="col-md-3" />
      <Button name="6" className="col-md-3" />
      <Button name="-" className="col-md-3" />
    </div>
    <div className="row">
      <Button name="1" className="col-md-3" />
      <Button name="2" className="col-md-3" />
      <Button name="3" className="col-md-3" />
      <Button name="+" className="col-md-3" />
    </div>
    <div className="row">
      <Button name="0" className="col-md-6" />
      <Button name="." className="col-md-3" />
      <Button name="=" className="col-md-3" />
    </div>
  </div>
);

export default ButtonPanel;
