import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchRecipes } from '../store/action-creators/recipe';
import Recipe from './Recipe';

const RecipeList: React.FC = () => {

    const { error, loading, recipes } = useTypedSelector(state => state.recipe);
    const { fetchRecipes } = useActions();


    useEffect(() => {
        fetchRecipes()
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className='recipeList'>
            {recipes.map(recipe =>
                <div> {recipe.title}</div>
                // <Recipe key={recipe.id} {...recipe} />
            )}
        </div>
    );
};

export default RecipeList;