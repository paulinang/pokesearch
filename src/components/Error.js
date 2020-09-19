import React from 'react';

import './Error.css';

import {
  POKEMON_NOT_FOUND,
  POKEMON_ID_OUT_OF_RANGE,
  NO_SEARCH_INPUT_GIVEN,
} from '../pokeapi/error';

const errorMessages = {
  [POKEMON_ID_OUT_OF_RANGE]:
    'Only the 151 classic Pokemon are supported (ID # 1 to 151)',
  [POKEMON_NOT_FOUND]: 'No classic Pokemon found with that name, ID, or type',
  [NO_SEARCH_INPUT_GIVEN]: 'Please enter a name, ID, or type to search by',
};

const Error = (props) => {
  return (
    <div class="error" onClick={props.onClear}>
      {errorMessages[props.error]}
    </div>
  );
};

export default Error;
