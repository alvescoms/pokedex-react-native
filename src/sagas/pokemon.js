import { call, put, takeLatest, delay } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import pokemon from '../services/pokemon';

function* searchPokemon (action) {

    try {

        const response = yield call(pokemon.searchPokemon, action.payload.pokemon)
        
        if (response.data.name) {

            yield put({ type: 'SUCCESS_SEARCH_POKEMON', payload: { pokemon: { 
                pokemonId: response.data.id,
                name: response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1),
                image: response.data.sprites.front_default,
                weight: response.data.weight,
                types: response.data.types
            }}});

        }
        else {

            yield put({ type: 'ERROR_SEARCH_POKEMON', payload: { error: 'Ops o Pokemon escapou, procure por outro!' }});

        }

    }
    catch (error) {

        yield put({ type: 'ERROR_SEARCH_POKEMON', payload: { error: 'Ops o Pokemon escapou, procure por outro!' }});

    }

}

function* capturePokemon (action) {

    yield delay(2000);

    const pokemon = action.payload.pokemon;
    const pokeball = action.payload.pokeball;
    const chance = (pokeball === 1) ? 90
                 : (pokeball === 2) ? 80
                 : (pokeball === 3) ? 70
                 : (pokeball === 4) ? 0 : 0
    const sortedNumber = Math.floor((Math.random() * 100) + 1);

    if (sortedNumber >= chance) {

        try {

            //yield call(AsyncStorage.clear);

            let pokemonList = yield call(AsyncStorage.getItem, '@Pokedex:PokemonList')

            if (!pokemonList) {

                pokemonList = [];

            }
            else {

                pokemonList = JSON.parse(pokemonList)

            }

            pokemonList.push({
                ...pokemon,
                id: pokemonList.length + 1,
                pokeballUsed: pokeball,
            });

            yield call(AsyncStorage.setItem, '@Pokedex:PokemonList', JSON.stringify(pokemonList))

            yield put({ type: 'SUCCESS_CAPTURE_POKEMON' });

        }
        catch (error) {

            yield put({ type: 'FAILURE_CAPTURE_POKEMON' });

        }

    }
    else {

        yield put({ type: 'FAILURE_CAPTURE_POKEMON' });

    }

}

function* searchMyPokemon (action) {

    try {

        let pokemonList = yield call(AsyncStorage.getItem, '@Pokedex:PokemonList')

        if (!pokemonList) {

            pokemonList = [];

        }
        else {

            pokemonList = JSON.parse(pokemonList)

        }

        yield put({ type: 'SUCCESS_SEARCH_MY_POKEMON', payload: { pokemonList }});

    }
    catch (error) {

        yield put({ type: 'ERROR_SEARCH_MY_POKEMON'});

    }

}

function* searchDetailsPokemon (action) {

    try {

        const responsePokemon = yield call(pokemon.searchPokemon, action.payload.pokemonId)
        
        let weight = responsePokemon.data.weight.toString();
        let height = responsePokemon.data.height.toString();

        /**
         * Fixing weight
         */

        const weightSize = weight.length;

        if (weightSize == 1) {

            weight = '0,' + weight;

        }
        else {

            weight = weight.slice(0, (weightSize - 1)) + ',' + weight.charAt(weightSize - 1);

        }

        /**
         * Fixing height
         */

        const heightSize = height.length;

        if (heightSize == 1) {

            height = '0,' + height;

        }
        else {

            height = height.slice(0, (heightSize - 1)) + ',' + height.charAt(heightSize - 1);

        }

        const responseSpecies = yield call(pokemon.searchSpecies, action.payload.pokemonId)

        const responseEvolutions = yield call(pokemon.searchEvolutions, responseSpecies.data.evolution_chain.url)

        const evolutions = [];

        let evolutionChains = responseEvolutions.data.chain;

        while (evolutionChains && evolutionChains.evolves_to) {

            if (evolutionChains.species.name) {

                const responsePokemonEvolution = yield call(pokemon.searchPokemon, evolutionChains.species.name)

                evolutions.push({
                    name: evolutionChains.species.name.charAt(0).toUpperCase() + evolutionChains.species.name.slice(1),
                    image: responsePokemonEvolution.data.sprites.front_default,
                })

            }

            evolutionChains = evolutionChains.evolves_to[0];

        }

        yield put({ type: 'SUCCESS_SEARCH_DETAILS_POKEMON', payload: {
            pokemon: { 
                ...responsePokemon.data,
                weight,
                height,
                evolutions
            }
        }});

    }
    catch (error) {

        yield put({ type: 'ERROR_SEARCH_DETAILS_POKEMON', payload: { error: 'Ops o Pokemon escapou, procure por outro!' }});

    }

}

function* deletePokemon(action) {

    try {

        let pokemonList = action.payload.pokemonList;
        const id = action.payload.id;
        
        pokemonList = pokemonList.filter((item) => item.id !== id);

        yield call(AsyncStorage.setItem, '@Pokedex:PokemonList', JSON.stringify(pokemonList))

        yield put({ type: 'SUCCESS_DELETE_POKEMON', payload: { pokemonList }});

    }
    catch(error) {

        yield put({ type: 'SUCCESS_DELETE_POKEMON', payload: { error: 'Não foi possível transferir o Pokemon.'}});

    }

}

export default [
    takeLatest('SEARCH_POKEMON', searchPokemon),
    takeLatest('CAPTURE_POKEMON', capturePokemon),
    takeLatest('SEARCH_MY_POKEMON', searchMyPokemon),
    takeLatest('SEARCH_DETAILS_POKEMON', searchDetailsPokemon),
    takeLatest('DELETE_POKEMON', deletePokemon),
]