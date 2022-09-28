import React from 'react';
import RecipeBox from '../RecipeBox/RecipeBox';
import RecipeList from '../RecipeList/RecipeList';

const Home: React.FC = () => {
    return (
        <>
            <div className='home'>
                <RecipeBox />
                <RecipeBox />
                <RecipeBox />
            </div>
            <RecipeList />
        </>
    );
};

export default Home;