import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import { FavoritePokemons } from '../pages';
import pokemons from '../data';

test('if Favorite page was render correctly', () => {
  const NUMBER_OF_POKEMONS = 9;

  renderWithRouter(<App />);
  const favoriteLink = screen.getByRole('link', { name: /Favorite/i });
  userEvent.click(favoriteLink);
  const pagraphNoFacoritePokemon = screen.getByText(/No favorite pokemon found/i);
  expect(pagraphNoFacoritePokemon).toBeInTheDocument();

  renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
  const allPokemon = screen.getAllByTestId('pokemon-name');
  expect(allPokemon).toHaveLength(NUMBER_OF_POKEMONS);
});
