import { combineReducers } from "redux";
import { recipeReducer } from "./recipeReducer";

export const rootReducer = combineReducers({
    recipe: recipeReducer,
});


export type RootState = ReturnType<typeof rootReducer>;