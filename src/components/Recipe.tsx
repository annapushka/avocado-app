import React from 'react';

const Recipe: React.FC = (props) => {
    return (
        <div className='recipe'>
            {props.title}
        </div>
    );
};

export default Recipe;