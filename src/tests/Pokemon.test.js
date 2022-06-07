import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

test('if Pokemon component was render correctly', () => {
  renderWithRouter(
    <Pokemon
      isFavorite
      pokemon={ pokemons[4] }
      showDetailsLink
    />,
  );
  const ALAKAZAM_IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png';

  const pokemonName = screen.getByTestId('pokemon-name');
  expect(pokemonName).toHaveTextContent('Alakazam');

  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType).toHaveTextContent('Psychic');

  const pokemonImage = screen.getByRole('img', { name: /Alakazam sprite/i });
  expect(pokemonImage).toHaveAttribute('src', ALAKAZAM_IMAGE_URL);

  const pokemonDetailsLink = screen.getByRole('link', { name: /more details/i });
  expect(pokemonDetailsLink).toHaveAttribute('href', `/pokemons/${pokemons[4].id}`);

  const pokemonFavoriteIcon = screen.getByRole('img',
    { name: /Alakazam is marked as favorite/ });
  expect(pokemonFavoriteIcon).toBeInTheDocument();
  expect(pokemonFavoriteIcon).toHaveAttribute('src', '/star-icon.svg');
});
