import React from 'react'
import Navbar from '../../shared/components/Navigation/Navbar'
import TextEditor from '../components/TextEditor'
import {useRef} from 'react';
import './Dashboard.css';
import ApplyLineHeight from '../components/letter-spacing/letter-spacing';
import ApplyBg from '../components/change-bg/change-bg';
import Converter from '../components/converter/converter';
import UploadButton from '../components/uploadHandwriting/uploadButon';

const Dashboard = (props) => {
    const bgRef = useRef();

    const BgBlank = () =>{
     bgRef.current.changeBgBlank();
     }
     const BgRuled = () =>{
         bgRef.current.changeBgRuled();
     }
     const BgV3 = () =>{
         bgRef.current.changeBgV3();
     }
    return (
        <React.Fragment>
            <Navbar />
        <div className='dashboard-container'>
            <div className="dashboard-sidebar">

            </div>
            <div className="dashboard-content">
                <TextEditor ref = {bgRef} options = {['inline','fontSize', 'fontFamily', 'textAlign', 'colorPicker', 'image', 'history' , 'blockType' ]} 
        fontOptions = {['Arial', 'shailey']}
        colors = {['rgb(0,0,0)', 'rgb(22,38,76)', 'rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
      'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
      'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 
      'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
      'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
      'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)']}
      customOptions = {[<ApplyBg changeBgBlank = {BgBlank} changeBgRuled = {BgRuled} changeBgV3 = {BgV3} />, <ApplyLineHeight />,<UploadButton/>, <Converter />]}/>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Dashboard
