import React, { useState } from "react";
import "./style.scss";

function AddNewHero({ universes, submitForm }) {
    const [heroName, setName] = useState(``);
    const [heroUniverse, setUniverse] = useState(``);
    const [heroFavourite, setFavourite] = useState(``);

    return (
        <div className={"add-hero"}>
            <form
                onSubmit={(e) =>
                    submitForm(e, {
                        name: heroName,
                        comics: heroUniverse,
                        favourite: heroFavourite,
                    })
                }
            >
                <fieldset>
                    <legend>Create new hero</legend>
                    <label>
                        New hero name:{" "}
                        <input type={"text"} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Choose universe:{" "}
                        <select onChange={(e) => setUniverse(e.target.value)}>
                            {universes.map((option) => (
                                <option value={option.name} key={option.id}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Favourite:{" "}
                        <input
                            type={"checkbox"}
                            onChange={(e) => setFavourite(e.target.checked)}
                        />
                    </label>
                    <button>Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default AddNewHero;