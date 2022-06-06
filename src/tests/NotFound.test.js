import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('if NotFound page was render correctly', () => {
  const { history } = renderWithRouter(<App />);
  const URL_IMG_NOT_FOUND = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

  history.push('/qualquercoisa');

  const headingPageNotFound = screen.getByRole('heading',
    { name: /Page requested not found/i, level: 2 });

  const imagePageNotFound = screen.getByRole('img',
    { name: /Pikachu crying because the page requested was not found/i });

  expect(imagePageNotFound.src).toBe(URL_IMG_NOT_FOUND);
  expect(headingPageNotFound).toBeInTheDocument();
});
