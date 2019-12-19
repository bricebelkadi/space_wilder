import React from 'react';
import './Navbar.css'

class Navbar extends React.Component {

    render() {
        return (
            <div className="Navbar">
                <div className="Score">Score :</div>
                <div className="Title">Space Wilder</div>
                <div className="Parameters"> Paramètres</div>
            </div>
        )
    }

};

export default Navbar