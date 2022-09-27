import React from 'react';
import { useActions } from '../../hooks/useActions';

import { addRecipe } from '../../store/action-creators/recipe';

const moment = require('moment');


const RecipeForm: React.FC = () => {
    const date = moment(Date.now()).format('LL').toString();

    const { addRecipe } = useActions();


    return (
        <form className='recipeForm'>
            <input className='recipeForm__input' name='author' placeholder='Ваше имя' type="text" required />
            <input className='recipeForm__input' name='title' placeholder='Название блюда' type="text" required />
            <input className='recipeForm__input' name='time' placeholder='Время приготовления, мин' type="number" required />
            <input className='recipeForm__input' name='calories' placeholder='Количество калорий, ккал' type="number" required />
            <textarea className='recipeForm__input recipeForm__textarea' name='ingredients' placeholder='Ингридиенты' required />
            <textarea className='recipeForm__input recipeForm__textarea' name='steps' placeholder='Пошаговый рецепт приготовления' required />
            <select className='recipeForm__input recipeForm__select'>
                <option value="Завтрак">Завтрак</option>
                <option value="Обед" selected>Обед</option>
                <option value="Ужин">Ужин</option>
            </select>
            <input className='recipeForm__input' name='img' placeholder='Ссылка на фотографию блюда' type="url" required />
            <input className='recipeForm__input recipeForm__data' name='time' type="text" value={date} />
            <button type="submit" className="recipeForm__button">Отправить рецепт</button>
        </form>
    );
};

export default RecipeForm;