import { connect } from "react-redux";
import useInterval from '../../Hooks/useInterval'
import './Laser.css'
import React, { useState } from "react"
import Laser1 from '../../../Assets/laser1.png';
import Laser2 from '../../../Assets/laser2.png'


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
    const [count, setCount] = useState(0);
    const [laser, setLaser] = useState(false);

    const MoveLaser = () => {
        if (count % 10) {
            setLaser(!laser);

        }
        if (count === 60) {
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
        <div className="Laser" style={{ top: `${data.y}rem `, left: `${x +1}rem `}}>
            <img alt="feu" src={laser ? Laser2: Laser1} />
        </div>
    )

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Laser);