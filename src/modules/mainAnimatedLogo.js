import React from 'react';
import m from '../assets/m.png';
import a from '../assets/a.png';
import scrollBehavior from '../util/scrollBehavior';

function MainAnimatedLogo() {
    return (
        <div className="mainLogo" onClick={scrollBehavior._scroll}>
            <img src={m} id='m' alt='M'/>
            <img src={a} id='a' alt='A'/>
        </div>
    );
}

export default MainAnimatedLogo;