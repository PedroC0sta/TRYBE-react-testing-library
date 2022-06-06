import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('if has nav link', () => {
  const { history } = renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: /Home/i });
  userEvent.click(homeLink);
  expect(history.location.pathname).toBe('/');

  const aboutLink = screen.getByRole('link', { name: /About/i });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);
  expect(history.location.pathname).toBe('/about');

  const favoritesLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(favoritesLink).toBeInTheDocument();
  userEvent.click(favoritesLink);
  expect(history.location.pathname).toBe('/favorites');

  history.push('/qualquercoisa');
  const headingPageNotFound = screen.getByRole('heading',
    { name: /Page requested not found/i, level: 2 });
  expect(headingPageNotFound).toBeInTheDocument();
});
