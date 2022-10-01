import axios from "axios";
import { Dispatch } from "redux"
import { RecipeAction, RecipeActionTypes, RecipeTypes } from "../../types/recipe"


const url: string = 'https://63270e8fba4a9c47532fdf45.mockapi.io/api/recipes';

export const fetchRecipes = () => {
    return async (dispatch: Dispatch<RecipeAction>) => {
        try {
            dispatch({ type: RecipeActionTypes.FETCH_RECIPES });
            const response = await axios.get(url);
            dispatch({ type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: response.data })
        } catch (e) {
            dispatch({
                type: RecipeActionTypes.FETCH_RECIPES_ERROR,
                payload: "Произошла ошибка при загрузке рецептов."
            })
        }

    }
}

export const addRecipe = (newRecipe: RecipeTypes) => {
    return async (dispatch: Dispatch<RecipeAction>) => {
        try {
            dispatch({ type: RecipeActionTypes.POST_RECIPE });
            const resp = await axios.post(url, newRecipe);
            console.log(resp.data);
        } catch (e) {
            dispatch({
                type: RecipeActionTypes.POST_RECIPE_ERROR,
                payload: "Произошла ошибка при отправке рецепта."
            })
        }

    }
}