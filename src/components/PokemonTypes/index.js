import React from 'react';
import { Type, Types } from './styles';

const PokemonTypes = ({ types }) => (

    <Types>
        {types && types.map((item) =>
            <Type key={item.type.name} type={item.type.name.trim()}>{item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}</Type>
        )}
    </Types>

)

export default PokemonTypes;