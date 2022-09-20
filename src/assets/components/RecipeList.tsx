import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchRecipes } from '../../store/action-creators/recipe';

import Icon, { LoadingOutlined } from '@ant-design/icons';

import RecipeReviewCard from './RecipeReviewCard';


const RecipeList: React.FC = () => {

    const { error, loading, recipes } = useTypedSelector(state => state.recipe);
    const { fetchRecipes } = useActions();


    useEffect(() => {
        fetchRecipes()
    }, []);

    if (loading) {
        return <LoadingOutlined />
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className='recipeList'>
            {recipes.map(recipe =>
                <RecipeReviewCard key={recipe.id} {...recipe} />
            )}
        </div>
    );
};

export default RecipeList;