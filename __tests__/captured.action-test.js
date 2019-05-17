import * as CapturedActions from '../src/actions/captured';

describe('captured actions', () => {

  it('should create an action to search my Pokemon', () => {

    const pokemon = '';

    const expectedAction = {
      type: 'SEARCH_MY_POKEMON',
      payload: {
        pokemon
      }
    };

    expect(CapturedActions.searchMyPokemon(pokemon)).toEqual(expectedAction)

  });

  it('should create an action to delete my Pokemon', () => {

    const id = 1;

    const expectedAction = {
      type: 'DELETE_POKEMON',
      payload: {
        id
      }
    };

    expect(CapturedActions.deletePokemon(id)).toEqual(expectedAction)

  });

});