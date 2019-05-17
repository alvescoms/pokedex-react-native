import reducer from '../src/reducers/capture';

describe('capture reducer', () => {

    it('should return the initial state', () => {

        expect(reducer(undefined, {})).toEqual({
            searching: false,
            researched: false,
            capturing: false,
            captured: false,
            escaped: false,
            pokemon: {},
            error: null
        });

    });

    it('should handle SEARCH_POKEMON', () => {

        expect(reducer([], {
            type: 'SEARCH_POKEMON',
            pokemon: 'Pikachu'
        })).toEqual({
            searching: true,
            researched: true,
            capturing: false,
            captured: false,
            escaped: false,
            error: null
        });

    });

    it('should handle SUCCESS_SEARCH_POKEMON', () => {

        expect(reducer([], {
            type: 'SUCCESS_SEARCH_POKEMON',
            payload: {
                pokemon: {}
            }
        })).toEqual({
            pokemon: {},
            searching: false
        });

    });

    it('should handle ERROR_SEARCH_POKEMON', () => {

        expect(reducer([], {
            type: 'ERROR_SEARCH_POKEMON',
            payload: {
                error: 'Error...'
            }
        })).toEqual({
            error: 'Error...',
            pokemon: {},
            searching: false
        });

    });

    it('should handle CAPTURE_POKEMON', () => {

        expect(reducer([], {
            type: 'CAPTURE_POKEMON',
            payload: {
                pokeball: 1,
                pokemon: {}
            }
        })).toEqual({
            error: null,
            researched: false,
            capturing: true,
            captured: false,
            escaped: false
        });

    });

    it('should handle SUCCESS_CAPTURE_POKEMON', () => {

        expect(reducer([], {
            type: 'SUCCESS_CAPTURE_POKEMON'
        })).toEqual({
            error: null,
            capturing: false,
            captured: true,
            escaped: false
        });

    });

    it('should handle FAILURE_CAPTURE_POKEMON', () => {

        expect(reducer([], {
            type: 'FAILURE_CAPTURE_POKEMON'
        })).toEqual({
            error: null,
            capturing: false,
            captured: false,
            escaped: true
        });

    });

});