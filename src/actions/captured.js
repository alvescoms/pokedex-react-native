export const searchMyPokemon = (pokemon) => ({
    type: 'SEARCH_MY_POKEMON',
    payload: {
        pokemon
    }
});

export const deletePokemon = (id) => ({
    type: 'DELETE_POKEMON',
    payload: {
        id
    }
});