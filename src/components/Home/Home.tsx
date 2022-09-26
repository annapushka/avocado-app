import React from 'react';
import Header from '../Header/Header';
import RecipeBox from '../RecipeBox/RecipeBox';
import RecipeList from '../RecipeList/RecipeList';

const Home: React.FC = () => {
    return (
        <>
            <Header />
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