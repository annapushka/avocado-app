import React from 'react';
import RecipeSkeleton from '../RecipeSkeleton/RecipeSkeleton';

const sceletonArr: any[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


function Loading() {

    return (
        <div className="loading">
            {sceletonArr.map(sceleton => <RecipeSkeleton />)}
        </div>
    );
}

export default Loading;