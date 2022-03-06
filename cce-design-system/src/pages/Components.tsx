import React from "react";
import Navigation from "../components/Navigation";
import Collapse from '../components/Collapse';
import WindowDimensions from '../utils/WindowDimensions';

function Components(){

    const {width, height} = WindowDimensions();

    return (
        <div className="Components">
            {width > 1000 ? <Navigation/> : <Collapse/>}
            Components
        </div>
    );
}

export default Components;