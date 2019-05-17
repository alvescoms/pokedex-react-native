import * as CaptureActions from '../src/actions/capture';

describe('capture actions', () => {

  it('should create an action to search a Pokemon', () => {

    const pokemon = 'Pikachu';

    const expectedAction = {
      type: 'SEARCH_POKEMON',
      payload: {
        pokemon
      }
    };

    expect(CaptureActions.searchPokemon(pokemon)).toEqual(expectedAction)

  });

  it('should create an action to capture a Pokemon', () => {

    const pokeball = 1;

    const expectedAction = {
      type: 'CAPTURE_POKEMON',
      payload: {
        pokeball
      }
    };

    expect(CaptureActions.capturePokemon(pokeball)).toEqual(expectedAction)

  });

});