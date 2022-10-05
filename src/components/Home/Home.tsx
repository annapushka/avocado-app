import React, { useState } from 'react';
import RecipeBox from '../RecipeBox/RecipeBox';
import Breakfast from '../../img/breakfast.jpg';
import Lunch from '../../img/lunch.jpg';
import Supper from '../../img/supper.jpg';

import {
    HashRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Home: React.FC = () => {

    return (
        <div className='home'>
            <Link to='/breakfast'>
                <RecipeBox meal='Завтрак' img={Breakfast} value='breakfast' />
            </Link>
            <Link to='lunch'>
                <RecipeBox meal='Обед' img={Lunch} value='lunch' />
            </Link>
            <Link to='supper'>
                <RecipeBox meal='Ужин' img={Supper} value='supper' />
            </Link>
        </div >
    );
};

export default Home;