/*
  Functions to make actual request to pokapi
*/
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonByIdOrName = (idOrName) =>
  axios.get(`${BASE_URL}/pokemon/${idOrName}`);

export const getPokemonSpecies = (id) =>
  axios.get(`${BASE_URL}/pokemon-species/${id}`);

export const getPokemonsByType = (type) =>
  axios.get(`${BASE_URL}/type/${type}`);
