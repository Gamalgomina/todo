import React from 'react';
import { data } from '../data';

const index = () => {
    return (
        <React.Fragment>
            <h2>Ci-joint l'ensemble de vos taches non accompli</h2>
            <article>
                {data.map((person) => {
                    if (person.Accompli === 0) {
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
