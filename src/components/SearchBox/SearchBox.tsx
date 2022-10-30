import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';


const { filterRecipe } = useActions();


const SearchBox: React.FC = () => {

    //search
    const [saerchRecipe, setSearchRecipe] = useState('');

    const saerchHandler = (e: React.ChangeEvent) => {
        setSearchRecipe((e.target as HTMLInputElement).value);
        filterRecipe(saerchRecipe);
    }


    return (
        <div className="searchBox">
            <input type="text" className="searchBox__input" placeholder="Поиск..." onChange={saerchHandler} value={saerchRecipe} />
        </div>
    );
};

export default SearchBox;