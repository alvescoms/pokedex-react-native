import React from 'react';
import { Evolutions, EvolutionsItem,  EvolutionsImageContainer, EvolutionsImage, EvolutionsName } from './styles';

const PokemonEvolutions = ({ evolutions }) => (

    <Evolutions>
        {evolutions && evolutions.map((evolution, key) => (
            <EvolutionsItem key={key}>
                <EvolutionsImageContainer>
                    <EvolutionsImage source={{uri: evolution.image}} />
                </EvolutionsImageContainer>
                <EvolutionsName>{evolution.name}</EvolutionsName>
            </EvolutionsItem>
        ))}
    </Evolutions>

)

export default PokemonEvolutions;