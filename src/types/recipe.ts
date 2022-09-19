export interface RecipeTypes {
    id: string;
    img: string;
    title: string;
    time: number;
    meal: string;
    ingredients: string;
    calories: number;
    steps: string;
    date: Date;
}

export interface RecipeState {
    recipes: any[];
    loading: boolean;
    error: null | string;
}

export enum RecipeActionTypes {
    FETCH_RECIPES = "FETCH_RECIPES",
    FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS",
    FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR",
}

interface FetchRecipesAction {
    type: RecipeActionTypes.FETCH_RECIPES;
}

interface FetchRecipesSuccessAction {
    type: RecipeActionTypes.FETCH_RECIPES_SUCCESS;
    payload: any[];
}

interface FetchRecipesErrorAction {
    type: RecipeActionTypes.FETCH_RECIPES_ERROR;
    payload: string;
}

export type RecipeAction = FetchRecipesAction | FetchRecipesSuccessAction | FetchRecipesErrorAction;