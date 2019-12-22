import React, { useState, } from 'react';
import useEventListener from '@use-it/event-listener';
import { connect } from "react-redux";
import './Player.css';
import SpaceShip from '../../../Assets/spaceShipPlayer.png'

const mapStateToProps = state => {
    return { data: state };
};

const mapDispatchToProps = dispatch => ({
    up: () => dispatch({ type: 'UP' }),
    down: () => dispatch({ type: 'DOWN' }),
    left: () => dispatch({ type: 'LEFT' }),
    right: () => dispatch({ type: 'RIGHT' }),
    fire: () => dispatch({type: "FIRE"}),


});

const Z = ['90', 'z'];
const S = ['83', 's'];
const Q = ['81', 'q'];
const D = ['68', 'd'];
const Space = ['32', ' '];

function Player({ data, up, action, down, right, left , fire}) {

    const [x, setX] = useState(data.x);
    const [y, setY] = useState(data.y);

    const moveUpZ = () => {
        up();
        setY(y-1);
    };
    const moveDownS = () => {
        down();  
        setY(y+1);
    }
    const moveLeftQ = () => {
        left();
        setX(x - 1);
    };
    const moveRightD = () => {
        setX(x + 1);
        right();
    };


    const playerFire = () => {
        action();
        fire();
    }

    function handler({ key }) {
        if (Z.includes(key)) { moveUpZ() };
        if (S.includes(key)) { moveDownS() };
        if (Q.includes(key)) { moveLeftQ() };
        if (D.includes(key)) { moveRightD() };
        if (Space.includes(key)) { playerFire() }
    }

    useEventListener('keydown', handler);


    return (
        <div className="Player"
            style={{ top: `${y}rem`, left: `${x}rem`, backgroundImage: `url(${SpaceShip})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}
        >
        </div>

    )
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);