import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('app tests', () => {
  const initialState = {};
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  let store;

  test('render home page', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText('Завтрак')).not.toBeNull();
  });
});