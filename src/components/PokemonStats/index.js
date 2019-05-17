import React from 'react';
import * as Progress from 'react-native-progress';
import { Stats, StatItem, StatName } from './styles';

const PokemonStats = ({ pokemon }) => (

    <Stats>
        {pokemon.stats && pokemon.stats.map((stat, key) => (
            <StatItem key={key}>
                <StatName>{(stat.stat.name == 'speed') ? 'Velocidade' 
                            : (stat.stat.name == 'special-defense') ? 'Defesa Especial'
                            : (stat.stat.name == 'special-attack') ? 'Ataque Especial'
                            : (stat.stat.name == 'defense') ? 'Defesa'
                            : (stat.stat.name == 'attack') ? 'Ataque'
                            : (stat.stat.name == 'hp') ? 'HP' : 'Inválido' } - {stat.base_stat}</StatName>
                <Progress.Bar progress={((stat.base_stat / 2) / 100)} width={null} />
            </StatItem>
        ))}
    </Stats>

)

export default PokemonStats;