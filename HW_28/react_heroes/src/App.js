import React, { Fragment } from 'react';
import RenderHeroes from './components/getHeroes/renderHeroes.jsx';

function App(props) {
    return (
        <Fragment>
            <RenderHeroes />
        </Fragment>
    );
}

export default App;