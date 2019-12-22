import React from 'react';
import './Navbar.css';


function Navbar(props) {


    return (
        <div className="Navbar">
            <div className="Score">Score : {props.count}</div>
            <div className="Title">Space Wilder</div>
            <div className="Parameters"><a href="mailto:brice.belkadi@gmail.com">Nous envoyer des gif de wilders ?</a></div>
        </div>
    )


};

export default Navbar;