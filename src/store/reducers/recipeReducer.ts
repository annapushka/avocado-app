import { RecipeAction, RecipeActionTypes, RecipeState } from "../../types/recipe"

const initialState: RecipeState = {
    recipes: [],
    loading: false,
    error: null,
    filter: '',
}

export const recipeReducer = (state = initialState, action: RecipeAction): RecipeState => {
    switch (action.type) {
        case RecipeActionTypes.FETCH_RECIPES:
            return { loading: true, error: null, recipes: [], filter: '' }
        case RecipeActionTypes.FETCH_RECIPES_SUCCESS:
            return { loading: false, error: null, recipes: action.payload, filter: '' }
        case RecipeActionTypes.FETCH_RECIPES_ERROR:
            return { loading: false, error: action.payload, recipes: [], filter: '' }
        case RecipeActionTypes.FILTER:
            return { ...state, filter: action.payload }
        default:
            return state
    }
}

