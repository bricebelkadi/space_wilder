import React, { useState } from 'react';
import useInterval from '../../Hooks/useInterval'
import './Enemies.css';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { data: state };
};



function Enemies({ xProp, yProp, data, killed, monsterId}) {

    const [x, setX] = useState(xProp);
    const [y, setY] = useState(yProp);
    const [cycle, setCycle] = useState(0);

    
    const MoveYourself = () => {
        if (data.fire && (data.xLaser >= x) && (data.yLaser >= y - 1 && data.yLaser <= y + 1)) {
            killed(monsterId);
        }
        if (cycle === 10) {
            setCycle(0, () => {
                setX(x + 1);
                setY(y + 0.2)
            });
            return
        }
        if (cycle < 5) {
            if (cycle === 0) {
                setX(x + 1);
            }
            setY(y + 0.2)
        } else {
            setY(y - 0.2)
        }
        setCycle(cycle + 1)
    }

    
    useInterval(() => {
        MoveYourself();
    }, 100);

    
    
    return (
        <div className="Enemies" 
            style={{ top: `${y}rem`, left: `${x}rem`, }}
        >
            Monstre
            <p>cycle{cycle}</p>
        </ div>
    )

}


export default connect(
    mapStateToProps,
)(Enemies);