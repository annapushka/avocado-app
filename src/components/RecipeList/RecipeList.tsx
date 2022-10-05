import React, { useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { fetchRecipes } from '../../store/action-creators/recipe';

import Loading from '../Loading/Loading';
import Error from '../Error/Error';


import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard';
import SearchBox from '../SearchBox/SearchBox';

interface Props {
    meal: string;
}


const RecipeList = (props: Props) => {

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
        <div className='recipeList-wrapper'>
            <SearchBox />
            <div className='recipeList'>
                {recipes.filter(recipe => recipe.meal === props.meal).map(recipe =>
                    <RecipeReviewCard key={recipe.id} {...recipe} />
                )}
            </div>
        </div>

    );
};

export default RecipeList;