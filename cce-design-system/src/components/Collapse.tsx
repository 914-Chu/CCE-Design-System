import React, {useEffect, useState} from "react";
import WindowDimensions from "../utils/WindowDimensions";
import { Link } from 'react-router-dom';
import { GrMenu } from "react-icons/gr";
import "../assets/Collapse.scss";

function Collapse(){

    const [collapse, setCollapse] = useState(true);

    function handleClick(){
        setCollapse(!collapse);
    }

    return(
        <div className="Collapse">
             <div className='Collapse-row'>
                <div className='Collapse-brand'>
                    <Link to="/" className='link-brand'>
                        I Fly Young CCEd
                    </Link>
                    <GrMenu className="Collapse-burger" onClick={handleClick}/>
                </div>
                {collapse ? <div></div> : 
                <div>
                    <div className='Collapse-col'>
                    <Link to="/content" className='link-options'>
                        Content
                    </Link>
                    </div>
                    <div className='Collapse-col'>
                    <Link to="/design" className='link-options'>
                        Design
                    </Link>
                    </div>
                    <div className='Collapse-col'>
                    <Link to="/components" className='link-options'>
                        Components
                    </Link>
                    </div>
                    <div className='Collapse-col'>
                        <input type="text" placeholder='Search' className='link-options Collapse-search'/>
                    </div> 
                </div>

                    }
            </div>
        </div>
    );
}

export default Collapse;