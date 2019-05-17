import reducer from '../src/reducers/pokemonDetails';

describe('pokemonDetails reducer', () => {

    it('should return the initial state', () => {

        expect(reducer(undefined, {})).toEqual({
            searching: false,
            showDetails: false,
            pokemonSelected: {},
            pokemon: {},
            abilityName: null,
            shortEffect: null,
            error: null
        });

    });

    it('should handle TOGGLE_DETAILS_POKEMON', () => {

        expect(reducer([], {
            type: 'TOGGLE_DETAILS_POKEMON',
            payload: {
                pokemonSelected: {}
            }
        })).toEqual({
            searching: false,
            showDetails: true, 
            pokemonSelected: {}, 
            pokemon: {}, 
            error: null
        });

    });

    it('should handle SEARCH_DETAILS_POKEMON', () => {

        expect(reducer([], {
            type: 'SEARCH_DETAILS_POKEMON',
            payload: {
                pokemonId: 1
            }
        })).toEqual({
            searching: true,
            error: null
        });

    });

    it('should handle SUCCESS_SEARCH_DETAILS_POKEMON', () => {

        expect(reducer([], {
            type: 'SUCCESS_SEARCH_DETAILS_POKEMON',
            payload: {
                pokemon: {}
            }
        })).toEqual({
            searching: false,
            pokemon: {},
            error: null
        });

    });

    it('should handle ERROR_SEARCH_DETAILS_POKEMON', () => {

        expect(reducer([], {
            type: 'ERROR_SEARCH_DETAILS_POKEMON',
            payload: {
                error: 'Error...'
            }
        })).toEqual({
            searching: false,
            pokemon: {},
            error: 'Error...'
        });

    });

    it('should handle SEARCH_ABILITY_DETAILS', () => {

        expect(reducer([], {
            type: 'SEARCH_ABILITY_DETAILS',
            payload: {
                name: 'thunderbolt',
                url: ''
            }
        })).toEqual({
            abilityName: 'thunderbolt',
            shortEffect: null
        });

    });

    it('should handle SUCCESS_SEARCH_ABILITY_DETAILS', () => {

        expect(reducer([], {
            type: 'SUCCESS_SEARCH_ABILITY_DETAILS',
            payload: {
                shortEffect: 'Ability description...'
            }
        })).toEqual({
            shortEffect: 'Ability description...',
            error: null
        });

    });

    it('should handle ERROR_SEARCH_ABILITY_DETAILS', () => {

        expect(reducer([], {
            type: 'ERROR_SEARCH_ABILITY_DETAILS',
            payload: {
                error: 'Error...'
            }
        })).toEqual({
            shortEffect: null,
            error: 'Error...'
        });

    });

});