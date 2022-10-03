import React from 'react';
import RecipeBox from '../RecipeBox/RecipeBox';
import RecipeList from '../RecipeList/RecipeList';
import Breakfast from '../../img/breakfast.jpg';
import Lunch from '../../img/lunch.jpg';
import Supper from '../../img/supper.jpg';

const Home: React.FC = () => {

    return (
        <div className='home'>
            <RecipeBox meal='Завтрак' img={Breakfast} />
            <RecipeBox meal='Обед' img={Lunch} />
            <RecipeBox meal='Ужин' img={Supper} />
        </div>
    );
};

export default Home;