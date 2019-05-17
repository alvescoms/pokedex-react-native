export const searchPokemon = (pokemon) => ({
    type: 'SEARCH_POKEMON',
    payload: {
        pokemon
    }
});

export const capturePokemon = (pokeball) => ({
    type: 'CAPTURE_POKEMON',
    payload: {
        pokeball
    }
});