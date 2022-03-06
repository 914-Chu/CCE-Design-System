import React from "react";
import Navigation from "../components/Navigation";
import Collapse from '../components/Collapse';
import WindowDimensions from '../utils/WindowDimensions';

function Design(){

    const {width, height} = WindowDimensions();


    return (
        <div className="Design">
            {width > 1000 ? <Navigation/> : <Collapse/>} 
            Design
        </div>
    );
}

export default Design;