import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './styles/style.css'
import './styles/normalize.css'

import RecipeList from './components/RecipeList/RecipeList';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';
import AddRecipe from './components/AddRecipe/AddRecipe';

const App: React.FC = () => {

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/breakfast' element={<RecipeList meal='Завтрак' />} />
          <Route path='/lunch' element={<RecipeList meal='Обед' />} />
          <Route path='/supper' element={<RecipeList meal='Ужин' />} />
          <Route path='/addrecipe' element={<AddRecipe />} />
          <Route path='/' element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;