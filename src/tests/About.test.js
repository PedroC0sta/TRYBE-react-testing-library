import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('se há um conjunto de links de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const imgAboutSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

  const homeLink = screen.getByRole('link', { name: /Home/i });
  userEvent.click(homeLink);
  expect(history.location.pathname).toBe('/');
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /About/i });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);
  expect(history.location.pathname).toBe('/about');
  const titleAboutPokedex = screen.getByRole('heading', { name: /About Pokédex/i });
  const imgAbout = screen.getByRole('img', { name: /Pokédex/i });
  expect(imgAbout.src).toContain(imgAboutSrc);
  expect(titleAboutPokedex).toBeInTheDocument();

  const favoritesLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(favoritesLink).toBeInTheDocument();
  userEvent.click(favoritesLink);
  expect(history.location.pathname).toBe('/favorites');
});
