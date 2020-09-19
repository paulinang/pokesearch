import * as error from './error';

/*
  Validator functions to prep input for qpi req
*/

export const validateSearchInput = (input, minId, maxId) => {
  /**
   *  Validate search input, throw error if not supported
   *  @param (String) input Can be a pokemon name, ID, or type
   *  @return (String) lowercased string for API call
   */

  if (input) {
    if (isNaN(input)) {
      // if not a number, then it's either a pokemon name or type
      //  needs to be lowercased for the api req
      input = input.toLowerCase();
    } else if (!isValidPokemonId(+input, minId, maxId)) {
      // for numbers, the user proabably meant a pokemon ID
      // throw error  if ID is outside supported range
      throw new Error(error.POKEMON_ID_OUT_OF_RANGE);
    }
  } else {
    // throw error if user tries to search without an iput
    throw new Error(error.NO_SEARCH_INPUT_GIVEN);
  }
  return input;
};

export const isValidPokemonId = (id, minId = 1, maxId = 893) => {
  return id >= minId && id <= maxId;
};

/*
  Parser functions to format API responses into objects for the frontend
*/

const titleString = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : null;

const getFlavorText = (apiData, language = 'en', gameVersion = 'blue') => {
  const filtered = apiData.filter(
    (txt) => txt.language.name === language && txt.version.name === gameVersion
  );
  if (filtered.length > 0 && filtered[0]['flavor_text']) {
    // pokeAPI returns flavor text with these two escaped characters
    // there might be more, but so far `\n` and `\f` are what I've run into
    // \f is espcially problematic as some browsers convert it into a no-space or an arrow symbol
    return filtered[0]['flavor_text'].replace(/\n|\f/g, ' ');
  }
};

export const parsePokemon = (pokemonData, pokemonSpeciesData) => {
  return {
    name: titleString(pokemonData.name),
    id: pokemonData.id,
    height: pokemonData.height,
    weight: pokemonData.weight,
    types: pokemonData.types.map((x) => titleString(x.type.name)),
    sprite: pokemonData.sprites['front_default'],
    habitat: titleString(pokemonSpeciesData.habitat.name),
    flavorText: getFlavorText(pokemonSpeciesData['flavor_text_entries']),
  };
};

export const parsePokemonIdsForType = (pokemonTypeData, minId, maxId) => {
  const ids = [];
  pokemonTypeData.pokemon.forEach((x) => {
    // extract id from url ex. https://pokeapi.co/api/v2/pokemon/725/
    // this allows us to filter by id range
    const id = +x.pokemon.url.split('/')[6];
    if (id >= minId && id <= maxId) {
      ids.push(id);
    }
  });
  return ids;
};
