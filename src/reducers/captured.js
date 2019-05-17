const INITIAL_STATE = {
    pokemon: '',
    searching: false,
    pokemonList: [],
    pokemonSelected: null,
    error: null
};

export default (state = INITIAL_STATE, action) => {

    const { payload } = action;

    switch(action.type) {
        case 'SEARCH_MY_POKEMON':
            return { ...state, error: null, searching: true };
        case 'SUCCESS_SEARCH_MY_POKEMON':
            return { ...state, pokemonList: payload.pokemonList, searching: false };
        case 'ERROR_SEARCH_MY_POKEMON':
            return { ...state, error: payload.error, pokemonList: [], searching: false }
        case 'DELETE_POKEMON':
            payload.pokemonList = state.pokemonList;
            return { ...state };
        case 'SUCCESS_DELETE_POKEMON':
            return { ...state, pokemonList: payload.pokemonList };
        case 'ERROR_DELETE_POKEMON':
            return { ...state, error: payload.error }
        default:
            return state;
    }

}