import React, { Component } from 'react';
import { MenuItem, Select, InputLabel } from '@material-ui/core';

class ApplyBg extends Component {



            changeBgRuled = () => {
                this.props.changeBgRuled();
            }
            changeBgBlank = () => {
              this.props.changeBgBlank();
          }  
          changeBgV3 = () => {
            this.props.changeBgV3();
        }

    
      render() {
        return (<>
          <InputLabel id="demo-simple-select-label">Change Bg</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Choose Bg"}
          label="Choose Bg"
          className = "customDropdown" id="dropdown-basic"
        >
 
     <MenuItem onClick={this.changeBgBlank}>Blank</MenuItem>
     <MenuItem onClick={this.changeBgRuled}>Ruled</MenuItem>
     <MenuItem onClick={this.changeBgV3}>V3</MenuItem>

 </Select>
 </>
        );
      }

}

export default ApplyBg;