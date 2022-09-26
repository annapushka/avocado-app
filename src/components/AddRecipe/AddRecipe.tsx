import React from 'react';


import Header from '../Header/Header';
import RecipeForm from '../RecipeForm/RecipeForm';


const AddRecipe: React.FC = () => {

    return (
        <div className="addRecipe">
            <Header />
            <RecipeForm />
        </div>

    );
};

export default AddRecipe;
