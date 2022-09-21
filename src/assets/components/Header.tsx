import React from 'react';

import HomeIcon from '../img/home.png';
import SearchBox from './SearchBox';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <img src={HomeIcon} alt="home" className="header_icon" />
            <SearchBox />
        </div>
    );
};

export default Header;