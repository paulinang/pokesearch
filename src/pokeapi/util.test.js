import {
  isValidPokemonId,
  validateSearchInput,
  parsePokemon,
  parsePokemonIdsForType,
} from './util';
import {
  getPikachuRes,
  getPikachuSpeciesRes,
  getFireTypePokemonRes,
} from './mockApiResponse';
import { NO_SEARCH_INPUT_GIVEN, POKEMON_ID_OUT_OF_RANGE } from './error';

describe('pokeAPI utility functions to help with validation and parsing', () => {
  describe('validateSearchInput', () => {
    test('Valid inputs should be returned as lowercase string', () => {
      expect(validateSearchInput('water')).toBe('water');
      expect(validateSearchInput('Pikachu', 1, 151)).toBe('pikachu');
      expect(validateSearchInput('FIRE')).toBe('fire');
      expect(validateSearchInput('1', 1, 151)).toBe('1');
      expect(validateSearchInput('155')).toBe('155'); // min max default 1 to 893
    });

    test('ValidateSearchInput() should throw errors invalid inputs', () => {
      expect(() => {
        validateSearchInput();
      }).toThrow(NO_SEARCH_INPUT_GIVEN);
      expect(() => {
        validateSearchInput('');
      }).toThrow(NO_SEARCH_INPUT_GIVEN);
      expect(() => {
        validateSearchInput('0', 1, 151);
      }).toThrow(POKEMON_ID_OUT_OF_RANGE);
      expect(() => {
        validateSearchInput('155', 1, 151);
      }).toThrow(POKEMON_ID_OUT_OF_RANGE);
      expect(() => {
        validateSearchInput('900');
      }).toThrow(POKEMON_ID_OUT_OF_RANGE);
    });
  });

  describe('isValidPokemon', () => {
    test('ID within min-max range should return true', () => {
      expect(isValidPokemonId(3, 1, 151)).toBeTruthy();
      expect(isValidPokemonId(1, 1, 151)).toBeTruthy();
      expect(isValidPokemonId(151, 1, 151)).toBeTruthy();
      expect(isValidPokemonId(2)).toBeTruthy();
    });

    test('ID outside min-max range should return false', () => {
      expect(isValidPokemonId(0, 1, 151)).toBeFalsy();
      expect(isValidPokemonId(1, 4, 151)).toBeFalsy();
      expect(isValidPokemonId(152, 1, 151)).toBeFalsy();
      expect(isValidPokemonId(0)).toBeFalsy();
    });
  });

  describe('parsePokemon', () => {
    const expected = {
      name: 'Pikachu',
      habitat: 'Forest',
      id: 25,
      height: 4,
      weight: 60,
      types: ['Electric'],
      flavorText:
        'When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.',
    };

    const result = parsePokemon(getPikachuRes, getPikachuSpeciesRes);
    test('Parsed properties for name and habitat should be titlecased strings of API response', () => {
      expect(result.name).toBe(expected.name);
      expect(result.habitat).toBe(expected.habitat);
    });
    test('Parsed properties for ID, height, and weight should be numbers from API response', () => {
      expect(result.id).toBe(expected.id);
      expect(result.height).toBe(expected.height);
      expect(result.weight).toBe(expected.weight);
    });
    test('Parsed properties for habitat should be an array of titlecased strings of API response', () => {
      expect(result.types).toHaveLength(expected.types.length);
      expect(result.types).toContain(expected.types[0]);
    });
  });

  describe('parsePokemonIdsForType', () => {
    const expectedFireTypes = [4, 5, 6];
    const unexpectedWaterType = 7; // water type pokemon is unexpected
    const unexpectedFireTypeOutsideIdRange = 257; // blaziken is a fire type but outside required range
    const result = parsePokemonIdsForType(getFireTypePokemonRes, 1, 151);

    test('Parsed IDs should contain IDs for pokemon of correct type and within min-max ID range', () => {
      expect(result).toEqual(expect.arrayContaining(expectedFireTypes));
    });

    test('Parsed IDs should not contain IDs for pokemon of wrong type or outside min-max ID range', () => {
      expect(result).not.toContain(unexpectedWaterType);
      expect(result).not.toContain(unexpectedFireTypeOutsideIdRange);
    });
  });
});
