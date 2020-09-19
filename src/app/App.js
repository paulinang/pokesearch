import React, { useReducer, useCallback } from 'react';

import LoadingSpinner from '../components/LoadingSpinner';
import Error from '../components/Error';
import Search from '../components/Search';
import PokemonList from '../components/PokemonList';
import './App.css';

import reducer from './reducer.js';
import * as actions from './actions.js';
import { findPokemon } from '../pokeapi/main';

// limit us to the classic 151 pokemon range
const MAX_POKEMON_ID = 151;
const MIN_POKEMON_ID = 1;

const App = () => {
  const [searchState, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: null,
    input: '',
    pokemon: [],
  });

  const searchSubmitHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch({ type: actions.REQ_SENT });
      try {
        findPokemon(searchState.input, MIN_POKEMON_ID, MAX_POKEMON_ID)
          .then((res) => {
            dispatch({
              type: actions.RES_RECEIVED,
              loadedPokemon: res,
            });
          })
          .catch((err) => {
            dispatch({
              type: actions.ERR_CAUGHT,
              error: err.message,
            });
          });
      } catch (err) {
        // handles errors thrown before axios requests (ex. validation errors)
        dispatch({
          type: actions.ERR_CAUGHT,
          error: err.message,
        });
      }
    },
    [searchState.input]
  );

  const inputChangeHandler = (event) => {
    dispatch({
      type: actions.INPUT_CHANGED,
      val: event.target.value,
    });
  };

  const clearErrorHandler = () => {
    dispatch({
      type: actions.CLEAR_ERR,
    });
  };

  const clearResultHandler = () => {
    dispatch({
      type: actions.CLEAR_RES,
    });
  };

  return (
    <div className="App">
      <div class="header">
        <h1>Pokémon Search</h1>
        <p>
          Look up the 151 classic Pokémon. Find a specific Pokémon by name or
          ID, or a group of Pokémon by type.
        </p>
      </div>
      <div class="main">
        <Search
          value={searchState.input}
          searchDisabled={searchState.isLoading || !searchState.input}
          clearDisabled={
            searchState.isLoading || searchState.pokemon.length === 0
          }
          onSubmit={searchSubmitHandler}
          onChange={inputChangeHandler}
          onClear={clearResultHandler}
        />
        {searchState.isLoading && <LoadingSpinner />}
        {searchState.error && (
          <Error onClear={clearErrorHandler} error={searchState.error} />
        )}
        <PokemonList pokemon={searchState.pokemon} />
      </div>
    </div>
  );
};

export default App;
