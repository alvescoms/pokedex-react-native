const INITIAL_STATE = {
    searching: false,
    researched: false,
    capturing: false,
    captured: false,
    escaped: false,
    pokemon: {},
    error: null
};

export default (state = INITIAL_STATE, action) => {

    const { payload } = action;

    switch(action.type) {
        case 'SEARCH_POKEMON':
            return { ...state, error: null, researched: true, searching: true, capturing: false, captured: false, escaped: false };
        case 'SUCCESS_SEARCH_POKEMON':
            return { ...state, pokemon: payload.pokemon, searching: false };
        case 'ERROR_SEARCH_POKEMON':
            return { ...state, error: payload.error, pokemon: {}, searching: false };
        case 'CAPTURE_POKEMON':
            action.payload.pokemon = state.pokemon
            return { ...state, error: null, researched: false, capturing: true, captured: false, escaped: false };
        case 'SUCCESS_CAPTURE_POKEMON':
            return { ...state, error: null, capturing: false, captured: true, escaped: false };
        case 'FAILURE_CAPTURE_POKEMON':
            return { ...state, error: null, capturing: false, captured: false, escaped: true };
        default:
            return state;
    }

}