import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('if About Page was render correctly', () => {
  const { history } = renderWithRouter(<App />);
  const imgAboutSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const aboutLink = screen.getByRole('link', { name: /About/i });

  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);
  expect(history.location.pathname).toBe('/about');

  const titleAboutPokedex = screen.getByRole('heading', { name: /About Pokédex/i });
  const imgAbout = screen.getByRole('img', { name: /Pokédex/i });
  expect(titleAboutPokedex).toBeInTheDocument();
  expect(imgAbout.src).toContain(imgAboutSrc);
});
