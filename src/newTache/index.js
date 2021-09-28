import React from 'react'
import { data } from '../data';
import { useState  } from 'react';
import  DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 

const Index = () => {
    var id = 0;
    const [tache, setTache] = useState('');
    const [etat, setEtat] = useState(false);
    const [startDate, setstartDate]=useState( new Date());
    const [datas, setDatas] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tache & startDate) {
            id = id + 1;
            const newTache = { tache,startDate, etat,id };
            setDatas({ ...data, newTache });
            data=datas;
            setTache({ tache: '', etat: false });
            setstartDate( new Date());

        }
    };


    return (
        <React.Fragment>
            <h3>Ajoutez une nouvelle tache à votre to-do list !</h3>
            <form >
                <label htmlFor="tache"> La Tache</label><br></br>
                <textarea type="text" name="tache" id="tache" rows="4" placeholder="Entrez votre prochaine tache" onChange={(e)=>setEtat(e.target.value)} /><br />
                <label htmlFor="date">Date asocié</label><br />
               <DatePicker  selected={startDate} onChange={(date) => setstartDate(date)} /><br />
                <label htmlFor="etat">Accompli
                    <input type="checkbox" name="etat" id="etat" onChange={(e)=>setEtat(e.target.checked)} /></label><br />
                    

                <button type="submit" onSubmit={handleSubmit}>Enregistrer</button>
            </form>

        </React.Fragment>
    )
}

export default Index
