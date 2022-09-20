import React from 'react';

import HomeIcon from '../img/home.png';

const Header = () => {
    return (
        <div className='header'>
            <img src={HomeIcon} alt="home" className="header_icon" />
        </div>
    );
};

export default Header;