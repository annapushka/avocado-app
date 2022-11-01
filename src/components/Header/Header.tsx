import React, { useState } from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import HomeIcon from '../../img/home.png';
import AddIcon from '../../img/add.png';

import { Switch } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
            <div className="header__favorite-filter">
                <Switch />
                <FavoriteIcon className='like header__favorite-like' />
            </div>
        </div>
    );
};

export default Header;