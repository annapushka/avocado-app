import React from 'react';

import HomeIcon from '../../img/home.png';
import AddIcon from '../../img/add.png';

import SearchBox from '../SearchBox/SearchBox';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <nav className="header__nav">
                <ul>
                    <li>
                        <img src={HomeIcon} alt="home" className="header__icon" />
                    </li>
                    <li>
                        <img src={AddIcon} alt="add" className="header__icon" />
                    </li>
                </ul>
            </nav>
            <SearchBox />

        </div>
    );
};

export default Header;