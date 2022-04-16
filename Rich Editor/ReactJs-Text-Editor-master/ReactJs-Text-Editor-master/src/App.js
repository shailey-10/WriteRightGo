import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
      <div className="editor">
        <TextEditor  options = {['inline','fontSize', 'fontFamily', 'textAlign', 'colorPicker', 'image', 'history' , 'blockType' ]} 
        fontOptions = {['Arial', 'preset1']}
          />
      </div>
    </div>
  );
}

export default App;
