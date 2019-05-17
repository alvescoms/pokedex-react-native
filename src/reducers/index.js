import { combineReducers } from 'redux';
import capture from './capture';
import captured from './captured';
import pokemonDetails from './pokemonDetails';

export default combineReducers({
    capture,
    captured,
    pokemonDetails
});