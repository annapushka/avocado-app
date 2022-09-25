import React from 'react';
import Header from '../Header/Header';
import RecipeBox from '../RecipeBox/RecipeBox';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <RecipeBox />
                <RecipeBox />
                <RecipeBox />
            </div>
        </>
    );
};

export default Home;