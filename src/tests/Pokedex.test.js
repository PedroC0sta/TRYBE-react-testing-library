import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

test('if Pokedex was render correctly', () => {
  renderWithRouter(<App />);
  const TYPE_OF_POKEMON = ['Electric', 'Fire', 'Bug',
    'Poison', 'Psychic', 'Normal', 'Dragon'];
  const NUMBER_OF_BUTTONS = TYPE_OF_POKEMON.length;
  const headerEncounteredPokemons = screen.getByRole('heading',
    { name: /Encountered pokémons/i });

  expect(headerEncounteredPokemons).toBeInTheDocument();
  const btnNextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
  const pokemonName = screen.getAllByTestId('pokemon-name');

  expect(pokemonName).toHaveLength(1);
  userEvent.click(btnNextPokemon);
  expect(pokemonName[0].textContent).toBe(pokemons[1].name);
  expect(pokemonName).toHaveLength(1);
  userEvent.click(btnNextPokemon);
  expect(pokemonName[0].textContent).toBe(pokemons[2].name);
  expect(pokemonName).toHaveLength(1);
  userEvent.click(btnNextPokemon);
  expect(pokemonName[0].textContent).toBe(pokemons[3].name);
  expect(pokemonName).toHaveLength(1);
  userEvent.click(btnNextPokemon);
  expect(pokemonName[0].textContent).toBe(pokemons[4].name);
  expect(pokemonName).toHaveLength(1);
  userEvent.click(btnNextPokemon);
  expect(pokemonName[0].textContent).toBe(pokemons[5].name);
  expect(pokemonName).toHaveLength(1);
  userEvent.click(btnNextPokemon);
  expect(pokemonName[0].textContent).toBe(pokemons[6].name);
  expect(pokemonName).toHaveLength(1);
  userEvent.click(btnNextPokemon);
  expect(pokemonName[0].textContent).toBe(pokemons[7].name);
  expect(pokemonName).toHaveLength(1);
  userEvent.click(btnNextPokemon);
  expect(pokemonName[0].textContent).toBe(pokemons[8].name);
  expect(pokemonName).toHaveLength(1);
  userEvent.click(btnNextPokemon);
  expect(pokemonName[0].textContent).toBe(pokemons[0].name);
  expect(pokemonName).toHaveLength(1);

  const btnAllPokemons = screen.getByRole('button', { name: /All/i });

  userEvent.click(btnAllPokemons);
  const btnTypePokemons = screen.getAllByTestId('pokemon-type-button');
  expect(btnTypePokemons[0].textContent).toBe(TYPE_OF_POKEMON[0]);
  expect(btnTypePokemons[1].textContent).toBe(TYPE_OF_POKEMON[1]);
  expect(btnTypePokemons[2].textContent).toBe(TYPE_OF_POKEMON[2]);
  expect(btnTypePokemons[3].textContent).toBe(TYPE_OF_POKEMON[3]);
  expect(btnTypePokemons[4].textContent).toBe(TYPE_OF_POKEMON[4]);
  expect(btnTypePokemons[5].textContent).toBe(TYPE_OF_POKEMON[5]);
  expect(btnTypePokemons[6].textContent).toBe(TYPE_OF_POKEMON[6]);
  expect(btnTypePokemons).toHaveLength(NUMBER_OF_BUTTONS);
});
