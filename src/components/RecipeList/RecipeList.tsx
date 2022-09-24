import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchRecipes } from '../../store/action-creators/recipe';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';


import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard';


const RecipeList: React.FC = () => {

    const { error, loading, recipes } = useTypedSelector(state => state.recipe);
    const { fetchRecipes } = useActions();


    useEffect(() => {
        fetchRecipes()
    }, []);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
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