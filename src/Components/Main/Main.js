import React, { useState } from 'react';
import Enemies from './Enemies/Enemies';
import Player from './Player/Player';
import Laser from './Laser/Laser';
import { connect } from "react-redux";
import useInterval from '../Hooks/useInterval';
import './Main.css'
import Background from '../../Assets/staticBackground.jpg'




const mapStateToProps = state => {
    return { data: state };
};

const mapDispatchToProps = dispatch => ({
    countUpRedux: () => dispatch({ type: 'COUNT_UP' }),
    speedUp: () => dispatch({type: "SPEED_UP"})

});


function Main({ data, countUp , countUpRedux, speedUp}) {

    const [allMonster, setMonster] = useState([{
        id: 1,
        x: 80,
        y: 8,
        isDead: false,
        avatar: 1,
    },
    {
        id: 2,
        x: 80,
        y: 16,
        isDead: false,
        avatar: 2,

    },
    {
        id: 3,
        x: 80,
        y: 24,
        isDead: false,
        avatar: 3,

    },
    {
        id: 4,
        x: 80,
        y: 32,
        isDead: false,
        avatar: 2,

    },
    {
        id: 5,
        x: 80,
        y: 40,
        isDead: false,
        avatar: 1,

    },
    ]);

    const [launchLaser, setLaser] = useState(false);

    useInterval(()=> {
        addSpeed();
    }, 5000);

    useInterval(() => {
        addDifficulty();
    }, 2500);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const addDifficulty = () => {
        const newMonster = {
            id: allMonster.length + 1,
            x: 80,
            y: getRandomInt(8, 40),
            isDead: false,
            avatar: getRandomInt(1,3)
        }
        setMonster([...allMonster, newMonster])
    }

    const addSpeed = () => {
        speedUp();
    }


    const launchFire = () => {
        if (launchLaser === false) {
            setLaser(!launchLaser);
        }
    }

    const stopFiring = () => {
        setLaser(false);
    }

    const deleteEnemy = monsterId => {
        const index = allMonster.findIndex(x => x.id === monsterId);
        const newArray = [];
        for (let i = 0; i < allMonster.length; i++) {
            if (i === index) {
                let newMonster = allMonster[i]
                newMonster.isDead = !newMonster.isDead;
                newArray.push(newMonster);
            } else { newArray.push(allMonster[i]) }
        }
        setMonster(newArray);
        countUp();
        countUpRedux();
    }

    return (
        <div className="Main">
            {
                allMonster.map((monstre) => { return monstre.isDead ? null : <Enemies monsterId={monstre.id} xProp={monstre.x} yProp={monstre.y} killed={deleteEnemy} gifProp={monstre.avatar}/> })
            }

            <Player action={launchFire} />
            {launchLaser ? <Laser stopFire={stopFiring} /> : null}

        </div>
    )


}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);