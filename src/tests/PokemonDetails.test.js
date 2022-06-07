import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

test('if PokemonDetails page was render correctly', () => {
  const TOWN_ALAKAZAM = 'Unova Accumula Town';
  const TOWN_IMG_ALAKAZAM = 'https://pwo-wiki.info/images/3/3e/Cer.gif';
  const { foundAt } = pokemons[4];

  const { history } = renderWithRouter(<App />);
  const pokemonDetailsLink = screen.getByRole('link', { name: /more details/i });
  expect(pokemonDetailsLink).toBeInTheDocument();

  history.push('/pokemons/65');

  const detailsPokemon = screen.getByRole('heading',
    { name: /Alakazam Details/i, level: 2 });
  expect(detailsPokemon).toBeInTheDocument();

  expect(pokemonDetailsLink).not.toBeInTheDocument();

  const summary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
  expect(summary).toBeInTheDocument();

  const paragraph = screen.getByText(/Closing both its eyes heightens/i);
  expect(paragraph).toBeInTheDocument();

  const gameLocation = screen.getByRole('heading',
    { name: /Game Locations of Alakazam/i, level: 2 });
  expect(gameLocation).toBeInTheDocument();

  const locationAlakazam = screen.getAllByRole('img', { name: 'Alakazam location' });
  expect(locationAlakazam).toHaveLength(1);

  const locationTownAlacazam = screen.getAllByText(TOWN_ALAKAZAM);
  expect(locationTownAlacazam.textContent).toBe(foundAt.location);

  expect(locationAlakazam[0]).toHaveAttribute('src', TOWN_IMG_ALAKAZAM);

  const favoriteCheckBox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
  expect(favoriteCheckBox).toBeInTheDocument();
  userEvent.click(favoriteCheckBox);
  expect(favoriteCheckBox).toBeChecked();
  userEvent.click(favoriteCheckBox);
  expect(favoriteCheckBox).not.toBeChecked();
});
