import React from 'react';
import { Button } from '@material-ui/core';

const Converter = props => {

  return (
    <Button className = "btn-custom-inverse" onClick = {window.print}> <img style =  {{height: "15px"}} src="/img/convert.png" alt="" /> </Button>
  );
};

export default Converter;

