import React, { Fragment, useEffect, useState } from "react";
import {
    getHeroes,
    addHero,
    changeHero,
    getUniverses,
} from "../../services/heroesServices";
import "./style.scss";
import AddNewHero from "../AddNewHero/addNewHero";

export function RenderHeroes() {
    const [heroes, setHeroes] = useState([]);
    const [universes, setUniverses] = useState([]);

    useEffect(() => {
        getHeroes().then((data) => setHeroes(data));
        getUniverses().then((data) => setUniverses(data));
    }, []);

    const favouriteHero = async (item) => {
        await changeHero(item.id, { favourite: !item.favourite });
    };

    const submitForm = async (e, hero) => {
        e.preventDefault();

        let addedNewHero = await addHero(hero);
        setHeroes((prevTD) => [...prevTD, addedNewHero]);
    };

    return (
        <Fragment>
            <table>
                <tbody>
                {heroes.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.comics}</td>
                        <td>
                            <input
                                type="checkbox"
                                defaultChecked={item.favourite}
                                onChange={() => favouriteHero(item)}
                            />
                        </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <AddNewHero universes={universes} submitForm={submitForm} />
        </Fragment>
    );
}

export default RenderHeroes;