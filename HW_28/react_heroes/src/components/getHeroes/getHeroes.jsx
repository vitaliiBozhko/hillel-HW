import React, {useEffect, useState} from 'react';
import {getHeroes} from "../../servises/getHeroes";
import './style.scss'

 export function RenderHeroes(props) {
     const [td, setTD] = useState([]);

     useEffect(() => {
         getHeroes()
             .then(data => setTD(data))
     }, []);

    const favouriteHero = (item) => {
        return item.favourite ? 'checked={item.favourite}' : '';
    }

    return (
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
    );
}

export default RenderHeroes;