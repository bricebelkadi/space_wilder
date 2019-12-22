import React, { useState } from 'react';
import useInterval from '../../Hooks/useInterval'
import './Enemies.css';
import { connect } from "react-redux";
import Hugo from './hugo.gif';
import Guillaume from './guillaume.gif';
import Elisa from './elisa.gif'

const mapStateToProps = state => {
    return { data: state };
};

const URL_GIF = [
    "./hugo.gif",
    "./guillaume.gif",
    "./elisa.gif"
]




function Enemies({ xProp, yProp, data, killed, monsterId, gifProp}) {

    const [x, setX] = useState(xProp);
    const [y, setY] = useState(yProp);
    const [cycle, setCycle] = useState(0);
    const [speed, setSpeed] = useState(data.speed);
    let gif = Hugo;
    
    if (gifProp === 1) {
        gif = Hugo;
    } else if (gifProp === 2) {
        gif = Guillaume;
    } else if (gifProp === 3) {
        gif = Elisa;
    }

    
    const MoveYourself = () => {
        if (data.speed !== speed) {setSpeed(data.speed)}
        if (data.fire && (data.xLaser >= x) && (data.yLaser >= y - 1 && data.yLaser <= y + 1)) {
            killed(monsterId);
        }
        if (cycle === 10) {
            setCycle(0, () => {
                setX(x - 1);
                setY(y + 0.2)
            });
            return
        }
        if (cycle < 5) {
            if (cycle === 0) {
                setX(x - 1);
            }
            setY(y + 0.2)
        } else {
            setY(y - 0.2)
        }
        setCycle(cycle + 1)
    }

    
    useInterval(() => {
        MoveYourself();
    }, speed);

    
    
    return (
        <div className="Enemies" 
            style={{ top: `${y}rem`, left: `${x}rem`, }}
        >
            <img src={gif} alt="monsssstre"/>
        </ div>
    )

}


export default connect(
    mapStateToProps,
)(Enemies);