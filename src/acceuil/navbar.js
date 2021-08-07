import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <nav >
            <ul >
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/mestaches">Mes Taches</Link>
                </li>
                <li>
                    <Link to="/newtache">Nouvelle Tache</Link>
                </li>
                <li>
                    <Link to="/TachesEffectues"> Taches Effectuées</Link>
                </li>
                <li>
                    <Link to="/tachesmanques"> Taches Manquées</Link>
                </li>
            </ul>
        </nav>
    )
}

export default navbar
