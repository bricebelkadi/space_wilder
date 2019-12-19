import React, { useState } from 'react';
import Enemies from './Enemies/Enemies';
import Player from './Player/Player';
import Laser from './Laser/Laser';

function Main() {
    const plusieurMonstre = ['julien', 'michel', 'marine', 'bertrand'];
    const allMonster = [
        {
            x: 1,
            y: 1,
            name: 'julien'
        },
        {
            x: 1,
            y: 6,
            name: 'michel'
        },
        {
            x: 1,
            y: 11,
            name: 'pierre'
        },
        {
            x: 1,
            y: 16,
            name: 'bertrand'
        },
        {
            x: 1,
            y: 21,
            name: 'bertrand'
        },
    ]

    const [launchLaser, setLaser] = useState(false);


    const launchFire = () => {
        if (launchLaser === false){
            setLaser(!launchLaser);
        }
    }

    const stopFiring = () => {
        setLaser(false);
    }

    const player = {
        x: 1,
        y: 11
    }

    return (
        <div className="Main">
            {
                allMonster.map(monstre => <Enemies name={monstre.name} xProp={monstre.x} yProp={monstre.y} />)
            }

            <Player action={launchFire} />
            {launchLaser ? <Laser stopFire={stopFiring} /> : null}

        </div>
    )


}

export default Main