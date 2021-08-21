import React from 'react';
import './Menu.css'
import headerImage from "./assets/vinos.jpg";

function Vinos() {
    return (
        <img src={headerImage} className="Menu" alt="logo"/>
    );
}

export default Vinos;