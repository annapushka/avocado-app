import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeBox from './RecipeBox';

test('render a meal', () => {
    render(<RecipeBox meal='Завтрак' img='breakfast' value='breakfast' />)
    const linkElement = screen.getByText(/Завтрак/i);
    expect(linkElement).toBeInTheDocument();
})