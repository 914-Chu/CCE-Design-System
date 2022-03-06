import React from 'react';
import '../assets/Home.scss';
import Navigation from "../components/Navigation";
import Collapse from '../components/Collapse';
import WindowDimensions from '../utils/WindowDimensions';

function Home(){

    const {width, height} = WindowDimensions();

    return(
        <div className='Home'>
            {width > 1000 ? <Navigation/> : <Collapse/>}
            Home
        </div>
    );
}

export default Home;