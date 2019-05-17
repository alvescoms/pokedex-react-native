const INITIAL_STATE = {
    searching: false,
    showDetails: false,
    pokemonSelected: {},
    pokemon: {},
    abilityName: null,
    shortEffect: null,
    error: null
};

export default (state = INITIAL_STATE, action) => {

    const { payload } = action;

    switch(action.type) {
        case 'TOGGLE_DETAILS_POKEMON':
            return { ...state, searching: false, showDetails: !state.showDetails, pokemonSelected: (!state.showDetails) ? payload.pokemonSelected : {}, pokemon: {}, error: null };
        case 'SEARCH_DETAILS_POKEMON':
            return { ...state, searching: true, error: null };
        case 'SUCCESS_SEARCH_DETAILS_POKEMON':
            return { ...state, searching: false, pokemon: payload.pokemon, error: null };
        case 'ERROR_SEARCH_DETAILS_POKEMON':
            return { ...state, searching: false, pokemon: {}, error: payload.error };
        case 'SEARCH_ABILITY_DETAILS':
            return { ...state, abilityName: payload.name, shortEffect: null };
        case 'SUCCESS_SEARCH_ABILITY_DETAILS':
            return { ...state, shortEffect: payload.shortEffect, error: null };
        case 'ERROR_SEARCH_ABILITY_DETAILS':
            return { ...state, shortEffect: null, error: payload.error };
        default:
            return state;
    }

}