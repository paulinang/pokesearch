import * as actions from './actions.js';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INPUT_CHANGED:
      return {
        ...state,
        input: action.val,
        error: null,
      };
    case actions.REQ_SENT:
      return {
        ...state,
        isLoading: true,
        error: null,
        pokemon: [],
      };
    case actions.RES_RECEIVED:
      return {
        ...state,
        isLoading: false,
        error: null,
        pokemon: action.loadedPokemon,
      };
    case actions.ERR_CAUGHT:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actions.CLEAR_ERR:
      return {
        ...state,
        error: null,
      };
    case actions.CLEAR_RES:
      return {
        ...state,
        pokemon: [],
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
