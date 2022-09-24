import React from 'react';

import './styles/style.css'
import './styles/normalize.css'

import RecipeList from './components/RecipeList/RecipeList';
import Header from './components/Header/Header';


const App: React.FC = () => {

  return (
    <div className='app'>
      <Header />
      <RecipeList />
    </div>
  );
};

export default App;