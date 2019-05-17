import request from './request';

const searchPokemon = (pokemon) => {

    return request.get(`pokemon/${pokemon}`)

}

const searchSpecies = (pokemon) => {

    return request.get(`pokemon-species/${pokemon}`)

}

const searchEvolutions = (url) => {

    return request.get(url)

}

export default {
    searchPokemon,
    searchSpecies,
    searchEvolutions
}