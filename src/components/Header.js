import React from "react";


function Header({onDarkModeClick, backgroundColor}){
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
            {backgroundColor ? "Dark" : "Light "} Mode
        </button>
      </header>
    )
}


export default Header;