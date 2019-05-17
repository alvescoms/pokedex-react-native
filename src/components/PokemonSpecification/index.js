import React from 'react';
import PokemonTypes from '../PokemonTypes';
import { Pokemon, PokemonImage, Image, Specification, SpecificationItem, SpecificationTitle, SpecificationValue } from './styles';

const PokemonSpecification = ({ pokemon }) => (

    <Pokemon>
        <PokemonImage>
            <Image source={{uri: (pokemon.sprites) ? pokemon.sprites.front_default : '#'}} />
        </PokemonImage>
        <Specification>
            <SpecificationItem>
                <SpecificationTitle>Peso: </SpecificationTitle>
                <SpecificationValue>{pokemon.weight} Kg</SpecificationValue>
            </SpecificationItem>
            <SpecificationItem>
                <SpecificationTitle>Tamanho: </SpecificationTitle>
                <SpecificationValue>{pokemon.height} Metros</SpecificationValue>
            </SpecificationItem>
            <PokemonTypes types={pokemon.types} />  
        </Specification>
    </Pokemon>

)

export default PokemonSpecification;