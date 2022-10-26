import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';

import { addRecipe } from '../../store/action-creators/recipe';
import { RecipeTypes } from '../../types/recipe';

const moment = require('moment');


const RecipeForm: React.FC = () => {

    const date = moment(Date.now()).format('LL').toString();
    const objRecepi: RecipeTypes = [];
    const [newRecipe, setNewRecipe] = useState(objRecepi);
    const [chosenMeal, setChosenMeal] = useState('');

    const { addRecipe } = useActions();


    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
        | React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.name === 'meal') { setChosenMeal(e.target.value) }
        const name = e.target.name;
        const info = e.target.value;
        setNewRecipe({ ...newRecipe, [name]: info });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        newRecipe.date = new Date;
        addRecipe(newRecipe);
    }


    return (
        <form className='recipeForm' onSubmit={handleSubmit}>
            <input className='recipeForm__input' name='author' placeholder='Ваше имя' type="text" required onChange={handleChangeData} />
            <input className='recipeForm__input' name='title' placeholder='Название блюда' type="text" required onChange={handleChangeData} />
            <input className='recipeForm__input' name='time' placeholder='Время приготовления, мин' type="number" required onChange={handleChangeData} />
            <input className='recipeForm__input' name='calories' placeholder='Количество калорий, ккал' type="number" required onChange={handleChangeData} />
            <textarea className='recipeForm__input recipeForm__textarea' name='ingredients' placeholder='Ингридиенты' required onChange={handleChangeData} />
            <textarea className='recipeForm__input recipeForm__textarea' name='steps' placeholder='Пошаговый рецепт приготовления' required onChange={handleChangeData} />
            <select className='recipeForm__input recipeForm__select' name='meal' onChange={handleChangeData} value={chosenMeal}>
                <option value="Категория">Категория</option>
                <option value="Завтрак">Завтрак</option>
                <option value="Обед">Обед</option>
                <option value="Ужин">Ужин</option>
            </select>
            <input className='recipeForm__input' name='img' placeholder='Ссылка на фотографию блюда' type="url" required onChange={handleChangeData} />
            <input className='recipeForm__input recipeForm__date' name='date' type="text" value={date} />
            <button type="submit" className="recipeForm__button">Отправить рецепт</button>
        </form>
    );
};

export default RecipeForm;