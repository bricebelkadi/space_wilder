import { connect } from "react-redux";
import useInterval from '../../Hooks/useInterval'
import './Laser.css'
import React, { useState } from "react"

const mapStateToProps = state => {
    return { data: state };
};





function Laser ({data, stopFire}) {

    const [x, setX] = useState(data.x);
    const [count, setCount] = useState(0)

    const MoveLaser = () => {
        if (count === 50) {
            stopFire();
        }
        setCount(count + 1);
        setX(x + 1)
    }

    useInterval(() => {
        MoveLaser();
    }, 1);


    return (
        <div className="Laser" style={{ top: `${data.y}rem `, left: `${x}rem `}}>
            <p>coucou</p>
        </div>
    )

};


export default connect(
    mapStateToProps,
)(Laser);