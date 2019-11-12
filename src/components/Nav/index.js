import React from 'react';
import "./style.css";

const Nav = props =>  {
    return(
        <nav className="navbar">
           <ul>
                <li className="">
                    <h1>CLICKY GAME</h1>
                </li>
                <li className="brand">
                    score: {props.score}
                    | topscore : {props.topScore}
                </li>
            </ul> 
        </nav>
    )

}

export default Nav;