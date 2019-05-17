import reducer from '../src/reducers/captured';

describe('captured reducer', () => {

    it('should return the initial state', () => {

        expect(reducer(undefined, {})).toEqual({
            pokemon: '',
            searching: false,
            pokemonList: [],
            pokemonSelected: null,
            error: null
        });

    });

    it('should handle SEARCH_MY_POKEMON', () => {

        expect(reducer([], {
            type: 'SEARCH_MY_POKEMON',
            pokemon: ''
        })).toEqual({
            error: null,
            searching: true
        });

    });

    it('should handle SUCCESS_SEARCH_MY_POKEMON', () => {

        expect(reducer([], {
            type: 'SUCCESS_SEARCH_MY_POKEMON',
            payload: {
                pokemonList: []
            }
        })).toEqual({
            pokemonList: [],
            searching: false
        });

    });

    it('should handle ERROR_SEARCH_MY_POKEMON', () => {

        expect(reducer([], {
            type: 'ERROR_SEARCH_MY_POKEMON',
            payload: {
                error: 'Error...'
            }
        })).toEqual({
            error: 'Error...',
            pokemonList: [],
            searching: false
        });

    });

    it('should handle DELETE_POKEMON', () => {

        expect(reducer([], {
            type: 'DELETE_POKEMON',
            payload: {
                id: 1,
                pokemonList: []
            }
        })).toEqual({});

    });

    it('should handle SUCCESS_DELETE_POKEMON', () => {

        expect(reducer([], {
            type: 'SUCCESS_DELETE_POKEMON',
            payload: {
                pokemonList: []
            }
        })).toEqual({
            pokemonList: []
        });

    });

    it('should handle ERROR_DELETE_POKEMON', () => {

        expect(reducer([], {
            type: 'ERROR_DELETE_POKEMON',
            payload: {
                error: 'Error...'
            }
        })).toEqual({
            error: 'Error...'
        });

    });

});