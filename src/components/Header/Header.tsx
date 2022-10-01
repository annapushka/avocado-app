import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import HomeIcon from '../../img/home.png';
import AddIcon from '../../img/add.png';

import SearchBox from '../SearchBox/SearchBox';

const Header: React.FC = () => {
    return (
        <div className='header'>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to='/'>
                            <img src={HomeIcon} alt="home" className="header__icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/addrecipe'>
                            <img src={AddIcon} alt="add" className="header__icon" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;