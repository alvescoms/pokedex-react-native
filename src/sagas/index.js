import { all } from 'redux-saga/effects';

/**
 * Sagas
 */
import pokemon from './pokemon';
import ability from './ability';

export default function* root() {
    yield all([
        ...pokemon,
        ...ability
    ]);
}