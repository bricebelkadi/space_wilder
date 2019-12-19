import React, { useState } from 'react';
import useInterval from '../../Hooks/useInterval'
import './Enemies.css';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { data: state };
};



function Enemies(props) {

    const [x, setX] = useState(props.x);
    const [y, setY] = useState(props.y);
    const [cycle, setCycle] = useState(0);

    const MoveYourself = () => {
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
            je suis {props.name}
            <p>cycle{cycle}</p>
        </ div>
    )

}

export default Enemies;