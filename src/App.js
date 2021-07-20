import React from 'react';
import headerImage from './assets/tomjones-background.png';

import './App.css';

/*
            <img src={sushi} className="SushiLogo" alt={"logo"}/>
            <Link to="/menu" className="menuButton">MENÚ</Link>
            <Link to="/tragos" className="menuButton">TRAGOS</Link>
            <Link to="/vinos" className="menuButton">VINOS</Link>
            <Link to="/sinalcohol" className="menuButton">SIN ALCOHOL</Link>
            <Link to="/botellas" className="menuButton">BOTELLAS</Link>
            <div className="menuDoubleImage">
                <img src={heineken} className="menuDoubleImage" alt={"logo"}/>
                <img src={branca} className="menuDoubleImage2" alt="logo"/>
            </div>
 */
function App() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={headerImage} className="TomJonesLogo" alt="logo"/>
        </header>
        </div>

    );
}

export default App;
