import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichUtils } from 'draft-js';
import { MenuItem, Select,InputLabel } from '@material-ui/core';
 

class ApplyLineHeight extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
  };

  applyLetterSpacing0 = () => {
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACING0'
      )
    )
  };
  applyLetterSpacing1 = () => {
     const { editorState, onChange } = this.props;
     onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACING1'
      )
    )
  };
  applyLetterSpacingN1 = () => {
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACINGN1'
      )
    )
  };
  applyLetterSpacing2 = () => {
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACING2'
      )
    )
  };
  applyLetterSpacingN2 = () => {
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACINGN2'
      )
    )
  };
  applyLetterSpacing3 = () => {
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACING3'
      )
    )
  };
  applyLetterSpacingN3 = () => {
    // this.removeLetterSpacing();
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACINGN3'
      )
    )
  };
  applyLetterSpacing4 = () => {
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACING4'
      )
    )
  };
  applyLetterSpacingN4 = () => {
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACINGN4'
      )
    )
  };
  applyLetterSpacing5 = () => {
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACING5'
      )
    )
  };
  applyLetterSpacingN5 = () => {
    const { editorState, onChange } = this.props;
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        'LETTERSPACINGN5'
      )
    )
  };
  render() {
    return (<>
    <InputLabel id="demo-simple-select-label">Letter Spacing</InputLabel>
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Choose Bg"}
          label="Letter Spacing"
          className = "customDropdown" id="dropdown-basic"
        >
    <MenuItem onMouseDown={this.applyLetterSpacing0}>0px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacing1}>1px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacingN1}>-1px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacing2}>2px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacingN2}>-2px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacing3}>3px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacingN3}>-3px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacingN4}>-4px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacing4}>4px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacingN5}>-5px</MenuItem>
    <MenuItem onClick={this.applyLetterSpacing5}>5px</MenuItem>

        </Select>
  

    

    </>
    )
  }
}

export default ApplyLineHeight;