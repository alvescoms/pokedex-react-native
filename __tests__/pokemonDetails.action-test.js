import * as PokemonDetailsActions from '../src/actions/pokemonDetails';

describe('pokemon details actions', () => {

    it('should create an action to show Pokemon details', () => {

        const pokemonSelected = null;

        const expectedAction = {
            type: 'TOGGLE_DETAILS_POKEMON',
            payload: {
                pokemonSelected
            }
        };

        expect(PokemonDetailsActions.toggleDetailsPokemon(pokemonSelected)).toEqual(expectedAction)

    });

    it('should create an action to search Pokemon details', () => {

        const pokemonId = 1;

        const expectedAction = {
            type: 'SEARCH_DETAILS_POKEMON',
            payload: {
                pokemonId
            }
        };

        expect(PokemonDetailsActions.searchDetailsPokemon(pokemonId)).toEqual(expectedAction)

    });

    it('should create an action to search Pokemon ability details', () => {
  
        const name = 'thunder-bold';
        const url = 'https://pokeapi.co/api/v2/ability/4';

        const expectedAction = {
            type: 'SEARCH_ABILITY_DETAILS',
            payload: {
                name,
                url
            }
        };

        expect(PokemonDetailsActions.searchAbilityDetails(name, url)).toEqual(expectedAction)

    });

});