import React, {Fragment, useEffect, useState} from 'react';
import './style.scss';

function AddNewHero({submitForm, addName, chooseUniverse, addFavourite}) {
    const select = [
        {
        id: 1,
        company: "DC"
        },
        {
        id: 2,
        company: "Marvel"
        }
    ]
    return (
        <div className={"add-hero"}>
            <form onSubmit={submitForm}>
                <fieldset>
                    <legend>Create new hero</legend>
                    <label>
                        New hero name: <input type={"text"} onChange={addName}/>
                    </label>
                    <label>
                        Choose universe: <select onChange={chooseUniverse}>{select.map((option) => <option value={option.company} key={option.id}>{option.company}</option>)}</select>
                    </label>
                    <label>
                        Favourite: <input type={"checkbox"} onChange={addFavourite}/>
                    </label>
                    <button>Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default AddNewHero;