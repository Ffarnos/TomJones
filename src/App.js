import React from 'react';
import headerImage from './assets/tomjones-background.png';
import heineken from './assets/heineken-background.png';
import sushi from './assets/sushi-background.png';
import branca from './assets/branca.png';

import './App.css';
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={headerImage} className="TomJonesLogo" alt="logo"/>
            <img src={sushi} className="TomJonesLogo" alt={"logo"}/>
            <Link to="/menu" className="menuButton">MENÚ</Link>
            <Link to="/tragos" className="menuButton">TRAGOS</Link>
            <Link to="/sinalcohol" className="menuButton">SIN ALCOHOL</Link>
            <Link to="/botellas" className="menuButton">BOTELLAS</Link>
            <div className="menuDoubleImage">
                <img src={heineken} className="menuDoubleImage" alt={"logo"}/>
                <img src={branca} className="menuDoubleImage" alt="logo"/>
            </div>
        </header>
        </div>

    );
}

export default App;
