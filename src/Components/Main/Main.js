import React, { useState } from 'react';
import Enemies from './Enemies/Enemies';
import Player from './Player/Player';
import Laser from './Laser/Laser';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { data: state };
};

const mapDispatchToProps = dispatch => ({

});


function Main({ data }) {
    const [allMonster, setMonster] = useState([{
        id: 1,
        x: 1,
        y: 1,
        isDead: false
    },
    {
        id: 2,
        x: 1,
        y: 6,
        isDead: false

    },
    {
        id: 3,
        x: 1,
        y: 11,
        isDead: false

    },
    {
        id: 4,
        x: 1,
        y: 16,
        isDead: false

    },
    {
        id: 5,
        x: 1,
        y: 21,
        isDead: false

    },
    ]);

    const [launchLaser, setLaser] = useState(false);


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
    }

    return (
        <div className="Main">
            {
                allMonster.map((monstre) => { return monstre.isDead ? null : <Enemies monsterId={monstre.id} xProp={monstre.x} yProp={monstre.y} killed={deleteEnemy} /> })
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