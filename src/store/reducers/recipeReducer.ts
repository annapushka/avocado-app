import { RecipeAction, RecipeActionTypes, RecipeState } from "../../types/recipe"

const initialState: RecipeState = {
    recipes: [],
    loading: false,
    error: null,
    filter: '',
    likeFilter: false,
}

export const recipeReducer = (state = initialState, action: RecipeAction): RecipeState => {
    switch (action.type) {
        case RecipeActionTypes.FETCH_RECIPES:
            return { ...state, loading: true }
        case RecipeActionTypes.FETCH_RECIPES_SUCCESS:
            return { ...state, recipes: action.payload, loading: false }
        case RecipeActionTypes.FETCH_RECIPES_ERROR:
            return { ...state, error: action.payload, loading: false }
        case RecipeActionTypes.FILTER:
            return { ...state, filter: action.payload }
        case RecipeActionTypes.SET_LIKE_FITER:
            return { ...state, likeFilter: action.payload }
        default:
            return state
    }
}

