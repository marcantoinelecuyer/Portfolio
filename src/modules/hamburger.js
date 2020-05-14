import React from 'react';
import menuButton from '../assets/logo.png';

function Hamburger() {
    return (
        <div className="hamburger">
            <button><img src={menuButton} alt='logo'/></button>
        </div>
    );
}

export default Hamburger;