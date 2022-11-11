import React, {Fragment, useEffect, useState} from 'react';
import {heroesServices} from "../../services/heroesServices";
import './style.scss'
import AddNewHero from "../AddNewHero/addNewHero";
import addNewHero from "../AddNewHero/addNewHero";

 export function RenderHeroes(props) {
     const [td, setTD] = useState([]);
     const [heroName, setName] = useState(``);
     const [universe, setUniverse] = useState(``);
     const [favourite, setFavourite] = useState(``);

     useEffect(() => {
         heroesServices()
             .then(data => setTD(data))
     }, []);

    const favouriteHero = (item) => {
        return item.favourite ? 'checked={item.favourite}' : '';
    }

    const submitForm = async (e) => {
        e.preventDefault();

        let addedNewHero = await addNewHero({name: heroName, comics: universe, favourite: favourite})

        setTD((prevTD) => [...prevTD, addedNewHero])
    }

    const setHeroName = (e) => setName(e.target.value);
    const setHeroUniverse = (e) => setUniverse(e.target.value);
    const setHeroFavourite = (e) => setFavourite(e.target.value);

    return (
        <Fragment>
            <table>
                <tbody>
                    <tr>
                        {td.map((item) => <td key={item.id}>{item.name}</td>)}
                    </tr>
                    <tr>
                        {td.map((item) => <td key={item.id}>{item.comics}</td>)}
                    </tr>
                    <tr>
                        {td.map((item) => <td key={item.id}><input type={"checkbox"} onChange={favouriteHero(item)}/></td>)}
                    </tr>
                    <tr>
                        {td.map((item) => <td key={item.id}><button>DELETE</button></td>)}
                    </tr>
                </tbody>
            </table>

            <AddNewHero submitForm={submitForm} addName={setHeroName} chooseUniverse={setHeroUniverse} addFavourite={setHeroFavourite}/>
        </Fragment>
    );
}

export default RenderHeroes;
