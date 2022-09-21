import React from 'react';

const SearchBox: React.FC = () => {
    return (
        <div className="searchBox">
            <input type="text" className="searchBox__input" placeholder="Поиск..." />
        </div>
    );
};

export default SearchBox;