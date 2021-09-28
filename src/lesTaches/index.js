import React from 'react'
import { data } from '../data'

const index = () => {
    return (
        <>
            <h3>Visitez l'ensemble de vos taches ! </h3>
            <article>
                {data.map((task) => {
                    const { id, tache, date, Accompli } = task;
                    return (
                        <div key={id} className='item' >
                            <h4>{tache}</h4>
                            <p>{date}</p>
                            <p>{Accompli}</p>
                        </div>
                    );
                })}
            </article>
        </>
    )
};

export default index;
