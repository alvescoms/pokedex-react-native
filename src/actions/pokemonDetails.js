export const toggleDetailsPokemon = (pokemonSelected) => ({
    type: 'TOGGLE_DETAILS_POKEMON',
    payload: {
        pokemonSelected
    }
});

export const searchDetailsPokemon = (pokemonId) => ({
    type: 'SEARCH_DETAILS_POKEMON',
    payload: {
        pokemonId
    }
});

export const searchAbilityDetails = (name, url) => ({
    type: 'SEARCH_ABILITY_DETAILS',
    payload: {
        name,
        url
    }
});