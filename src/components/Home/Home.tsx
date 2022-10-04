import React, { useState } from 'react';
import RecipeBox from '../RecipeBox/RecipeBox';
import RecipeList from '../RecipeList/RecipeList';
import Breakfast from '../../img/breakfast.jpg';
import Lunch from '../../img/lunch.jpg';
import Supper from '../../img/supper.jpg';

const Home: React.FC = () => {

    const [recipeList, setList] = useState(false);
    const [chosenMeal, setChosenMeal] = useState('');

    const handleClick = (e: any) => {
        setChosenMeal(e.target.meal);
        setList(prevState => !prevState);
    }

    return (
        <> {!recipeList ? (
            <div className='home'>
                <RecipeBox meal='Завтрак' img={Breakfast} onClick={handleClick} />
                <RecipeBox meal='Обед' img={Lunch} onClick={handleClick} />
                <RecipeBox meal='Ужин' img={Supper} onClick={handleClick} />
            </div>
        ) : (
            <RecipeList meal={chosenMeal} />
        )}
        </>
    );
};

export default Home;