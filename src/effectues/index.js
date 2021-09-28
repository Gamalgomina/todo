import React from 'react';
import { data } from '../data';

const index = () => {
    return (
        <React.Fragment>
            <h2>Bravo ! Vous avez ci-joint l'ensemble de vos taches réalisés !</h2>
            <article>
                {data.map((person) => {
                    if (person.Accompli === 1) {
                        const { id, tache, date } = person;
                        return <div key={id}>
                            <h4>{tache}</h4>
                            <p>{date}</p>
                        </div>
                    }
                    return null;
                })}
            </article>
        </React.Fragment>
    )
}

export default index
