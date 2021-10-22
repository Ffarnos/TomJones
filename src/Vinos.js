import React from 'react';
import './Menu.css'
import headerImage from "./assets/vinos.jpg";
import headerImageAfter12 from "./assets/vinos12.jpg";


function Vinos() {

    var hour = new Date().getHours().toLocaleString("es-AR", {timeZone: "America/Argentina/Buenos_Aires"})

    if (hour => 0 && hour <= 8) {
        return (
            <img src={headerImageAfter12} className="Menu" alt="logo"/>
        );
    }
    else
        return (
            <img src={headerImage} className="Menu" alt="logo"/>
        );


}

export default Vinos;