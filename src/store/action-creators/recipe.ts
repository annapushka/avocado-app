import axios from "axios";
import { Dispatch } from "redux"
import { RecipeAction, RecipeActionTypes } from "../../types/recipe"


export const fetchRecipes = () => {
    return async (dispatch: Dispatch<RecipeAction>) => {
        try {
            dispatch({ type: RecipeActionTypes.FETCH_RECIPES });
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTimeout(() => {
                dispatch({ type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: response.data })
            }, 1000)
        } catch (e) {
            dispatch({
                type: RecipeActionTypes.FETCH_RECIPES_ERROR,
                payload: "Произошла ошибка при загрузке рецептов."
            })
        }

    }
}