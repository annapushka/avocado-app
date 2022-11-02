import React, { useState, useEffect } from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";

import HomeIcon from '../../img/home.png';
import AddIcon from '../../img/add.png';

import { Switch } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';


const classNames = require('classnames');

const Header: React.FC = () => {
    const location = useLocation();
    const [recipeList, setRecipeList] = useState(true);

    useEffect(() => {
        (location.pathname === "/breakfast" || location.pathname === "/lunch" || location.pathname === "/supper") ? setRecipeList(true) : setRecipeList(false)
    }, [location.pathname]);


    let visible = classNames({
        'header__favorite-filter invisible': !recipeList,
        'header__favorite-filter': recipeList,
    });


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
            <div className={visible}>
                <Switch />
                <FavoriteIcon className='like header__favorite-like' />
            </div>
        </div>
    );
};

export default Header;