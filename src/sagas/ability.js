import { call, put, takeLatest } from 'redux-saga/effects';
import ability from '../services/ability';

function* searchAbilityDetails (action) {

    try {

        const response = yield call(ability.searchAbilityDetails, action.payload.url)
        
        yield put({ type: 'SUCCESS_SEARCH_ABILITY_DETAILS', payload: {
            shortEffect: response.data.effect_entries[0].short_effect
        }});

    }
    catch (error) {

        yield put({ type: 'ERROR_SEARCH_ABILITY_DETAILS', payload: { error: 'Não foi possível obter os detalhes da habilidade.' }});

    }

}

export default [
    takeLatest('SEARCH_ABILITY_DETAILS', searchAbilityDetails)
]