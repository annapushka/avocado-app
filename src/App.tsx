import React from 'react';

import './assets/styles/style.css'
import './assets/styles/normalize.css'

import RecipeList from './assets/components/RecipeList';
import Header from './assets/components/Header';


const App = () => {
  return (
    <div className='app'>
      <Header />
      <RecipeList />
    </div>
  );
};

export default App;