import React, { useContext, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState} from "draft-js";
import './Editor.css'
// import Blank from "/img/paper.jpg";
// import Ruled from "/img/images/ruled.svg";
// import V3 from "/img/blankv2.jpg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { forwardRef, useImperativeHandle } from "react";
// import draftToHtml from "draftjs-to-html";



// const freeOptions = ['blockType', 'fontSize', 'fontFamily', 'textAlign', 'colorPicker' ,'image', 'remove', 'history'];

export const styleMap = {
    'STRIKETHROUGH': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      textDecoration: 'line-through',
    },
    'REMOVESTRIKETHROUGH' : {
        textDecoration: 'none',
    },
    'LETTERSPACING0': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '0px',
    },
    'LETTERSPACING1': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '1px',
    },
    'LETTERSPACINGN1': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '-1px',
    },
    'LETTERSPACING2': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '2px',
    },
    'LETTERSPACINGN2': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '-2px',
    },
    'LETTERSPACING3': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '3px',
    },
    'LETTERSPACINGN3': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '-3px',
    },
    'LETTERSPACING4': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '4px',
    },
    'LETTERSPACINGN4': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '-4px',
    },
    'LETTERSPACING5': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '5px',
    },
    'LETTERSPACINGN5': {  // STRIKETHROUGH is the one which should be applied to inlineStyle
      letterSpacing: '-5px',
    },
  };


const TextEditor  =  forwardRef((props, ref) => {

  

  const  options = props.options;
  const  fontOptions = props.fontOptions;
  const  customOptions = props.customOptions;
  const colors = props.colors;
  const [state, setState] = useState({
      bgImg: "/img/paper.jpg"
    });

    // state = {
    //   bgImg: Blank
    // }



    useImperativeHandle(ref, () => ({

      changeBgRuled(bg) {
        setState({
          bgImg: "/img/ruled.png"
        });
      },
      changeBgBlank(bg) {
        setState({
          bgImg:"/img/paper.jpg"
        })
      },
      changeBgV3(bg) {
        setState({
          bgImg: "/img/blankv2.jpg"
        })
      }
  
    }));



 const emptyState = {
    editorState: EditorState.createEmpty(),
  };

 const onEditorStateChange = (editorState) => {
    setState({
      editorState,
    });
  };



    const { editorState } = state;
    return (
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          editorStyle={{  backgroundImage: "url(" +  state.bgImg + ")"
        }}
            customStyleMap={styleMap}
          toolbarCustomButtons={customOptions}
          toolbar = {{options: options,
          fontFamily: {
            options: fontOptions,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
          colorPicker: {
          colors: colors
        }
          // colorPicker: { component: ColorPic }
        }}
          
          onEditorStateChange={onEditorStateChange}
          
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea> */}
      </div>
    );
  })


export default TextEditor;