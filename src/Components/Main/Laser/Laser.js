import { connect } from "react-redux";
import useInterval from '../../Hooks/useInterval'
import './Laser.css'
import React, { useState } from "react"

const mapStateToProps = state => {
    return { data: state };
};

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch({ type: 'RESET' }),
    rightLaser: () => dispatch({ type: 'RIGHT_LASER' }),
    fire: () => dispatch({type: "FIRE"}),
});







function Laser ({data, stopFire, reset, rightLaser, fire}) {

    const [x, setX] = useState(data.x);
    const [count, setCount] = useState(0)

    const MoveLaser = () => {
        if (count === 50) {
            stopFire();
            reset();
            fire();
        }
        rightLaser();
        setCount(count + 1);
        setX(x + 1)
    }

    useInterval(() => {
        MoveLaser();
    }, 10);


    return (
        <div className="Laser" style={{ top: `${data.y}rem `, left: `${x}rem `}}>
            <p>coucou</p>
        </div>
    )

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Laser);