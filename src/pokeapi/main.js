/*
  Combine util and client functions to get and parse API data for pokemon
*/
import * as util from './util';
import * as client from './client';
import * as error from './error';
import axios from 'axios';

export const findPokemonByIdOrName = (nameOrId, minId, maxId) => {
  return axios
    .all([
      client.getPokemonByIdOrName(nameOrId),
      client.getPokemonSpecies(nameOrId),
    ])
    .then(([pokemonRes, pokemonSpeciesRes]) => {
      const pokemonFound = util.parsePokemon(
        pokemonRes.data,
        pokemonSpeciesRes.data
      );
      if (util.isValidPokemonId(pokemonFound.id, minId, maxId)) {
        return pokemonFound;
      } else {
        throw new Error(error.POKEMON_ID_OUT_OF_RANGE);
      }
    })
    .catch((err) => {
      if (err.message === error.POKEMON_ID_OUT_OF_RANGE) {
        // propogate error forward
        throw err;
      } else {
        // simplify all other errors to this
        throw new Error(error.POKEMON_NOT_FOUND);
      }
    });
};

const findPokemonsByType = (type, minId, maxId) => {
  return client.getPokemonsByType(type).then((res) => {
    const pokemonIds = util.parsePokemonIdsForType(res.data, minId, maxId);
    if (pokemonIds.length > 0) {
      // create an array of axios requests (promises)
      const pokemonRequestsById = pokemonIds.map((id) =>
        findPokemonByIdOrName(id)
      );
      return Promise.all(pokemonRequestsById).then((res) => {
        return res;
      });
    }
  });
};

export const findPokemon = (input, minId, maxId) => {
  input = util.validateSearchInput(input, minId, maxId);

  // special case: "nidoran" -> pokeAPI gives nidoran-F and nidoran-m, but most users won't know to enter that exact name. instead we give both m and f if a user searches for just "nidoran"
  if (input === 'nidoran') {
    const nidoranRequestsById = [29, 32].map((id) =>
      findPokemonByIdOrName(id, minId, maxId)
    );
    return Promise.all(nidoranRequestsById)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        // unlikely to happen since we know these pokemon exist
        throw new Error(error.POKEMON_NOT_FOUND);
      });
  }

  // start by tring to get a pokemon by id/name
  // use two pokeAPI endpoints in order to get all the info we need to display
  return findPokemonByIdOrName(input, minId, maxId)
    .then((res) => {
      return [res];
    })
    .catch((err) => {
      if (err.message === error.POKEMON_NOT_FOUND) {
        // only this error has the possibility that user asked for pokemon by type
        // so we do an extra search for that
        return findPokemonsByType(input, minId, maxId)
          .then((res) => {
            return res;
          })
          .catch((err) => {
            // at this point we've exhausted all search options (id, type, name)
            throw new Error(error.POKEMON_NOT_FOUND);
          });
      } else {
        // propogate err for id/name forward
        console.log(err);
        throw err;
      }
    });
};
