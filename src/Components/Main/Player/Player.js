import React, { useState, } from 'react';
import useEventListener from '@use-it/event-listener';
import { connect } from "react-redux";
import './Player.css';

const mapStateToProps = state => {
    return { data: state };
};

const mapDispatchToProps = dispatch => ({
    up: () => dispatch({ type: 'UP' }),
    down: () => dispatch({ type: 'DOWN' }),
    left: () => dispatch({ type: 'LEFT' }),
    right: () => dispatch({ type: 'RIGHT' }),

});

const Z = ['90', 'z'];
const S = ['83', 's'];
const Q = ['81', 'q'];
const D = ['68', 'd'];
const Space = ['32', ' '];

function Player({ data, up, action, down, right, left }) {

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
        right();
        setX(x - 1);
    };
    const moveRightD = () => {
        setX(x + 1);
        right();
    };


    const playerFire = () => {
        action();
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
            style={{ top: `${y}rem`, left: `${x}rem`, }}
        >
            C'est moi
        </div>

    )
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);