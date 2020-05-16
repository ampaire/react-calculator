/* eslint-disable jsx-quotes */

import React from "react";
import Button from "./button";

const ButtonPanel = () => (
  <div>
    <div className='row btn-group'>
      <Button name='AC' btn='btn' color='#e0e0e0'/>
      <Button name='+/-' btn='btn' color='#e0e0e0'/>
      <Button name='%' btn='btn' color='#e0e0e0'/>
      <Button name='/' btn='btn' />
    </div>
    <div className='row btn-group'>
      <Button name='7' btn='btn' color='#e0e0e0'/>
      <Button name='8' btn='btn' color='#e0e0e0'/>
      <Button name='9' btn='btn' color='#e0e0e0'/>
      <Button name='X' btn='btn' />
    </div>
    <div className='row btn-group'>
      <Button name='4' btn='btn' color='#e0e0e0'/>
      <Button name='5' btn='btn' color='#e0e0e0'/>
      <Button name='6' btn='btn' color='#e0e0e0'/>
      <Button name='-' btn='btn' />
    </div>
    <div className='row btn-group'>
      <Button name='1' btn='btn' color='#e0e0e0'/>
      <Button name='2' btn='btn' color='#e0e0e0'/>
      <Button name='3' btn='btn' color='#e0e0e0'/>
      <Button name='+' btn='btn' />
    </div>
    <div className='row btn-group'>
      <Button name='0' btn='btn' size color='#e0e0e0'/>
      <Button name='.' btn='btn' color='#e0e0e0'/>
      <Button name='=' btn='btn' />
    </div>
  </div>
);

export default ButtonPanel;
