import React from "react";
import Navigation from "../components/Navigation";
import Collapse from '../components/Collapse';
import WindowDimensions from '../utils/WindowDimensions';

function Content(){

    const {width, height} = WindowDimensions();


    return (
        <div className="Content">
            {width > 1000 ? <Navigation/> : <Collapse/>}
            Content
        </div>
    );
}

export default Content;