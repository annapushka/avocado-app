export interface RecipeTypes {
    id?: string;
    img: string;
    title: string;
    time: number;
    meal: string;
    ingredients: string;
    calories: number;
    steps: string;
    date: Date;
    author: string;
}

export interface RecipeState {
    recipes: any[];
    loading: boolean;
    error: null | string;
    filter: string;
    likeFilter: boolean;
}

export enum RecipeActionTypes {
    FETCH_RECIPES = "FETCH_RECIPES",
    FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS",
    FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR",
    POST_RECIPE = "POST_RECIPE",
    POST_RECIPE_ERROR = "POST_RECIPE_ERROR",
    FILTER = "FILTER",
    SET_LIKE_FITER = "SET_LIKE_FITER",
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

interface PostRecipeAction {
    type: RecipeActionTypes.POST_RECIPE;
}

interface PostRecipeErrorAction {
    type: RecipeActionTypes.POST_RECIPE_ERROR;
    payload: string;
}

interface FilterAction {
    type: RecipeActionTypes.FILTER;
    payload: string;
}

interface SetLikeFilterAction {
    type: RecipeActionTypes.SET_LIKE_FITER;
    payload: boolean;
}

export type RecipeAction = FetchRecipesAction
    | FetchRecipesSuccessAction
    | FetchRecipesErrorAction
    | PostRecipeAction
    | PostRecipeErrorAction
    | FilterAction
    | SetLikeFilterAction;