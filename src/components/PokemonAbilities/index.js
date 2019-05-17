import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PokemonDetailsActions from '../../actions/pokemonDetails';
import { Abilities, AbilitiesItem, AbilitiesName } from './styles';

const PokemonAbilities = ({ abilities, searchAbilityDetails }) => (

    <Abilities>
        {abilities && abilities.map((ability, key) => (
            <TouchableWithoutFeedback key={key} onPress={() => searchAbilityDetails(ability.ability.name, ability.ability.url)}>
                <AbilitiesItem>
                    <AbilitiesName>{ability.ability.name}</AbilitiesName>
                </AbilitiesItem>
            </TouchableWithoutFeedback>
        ))}
    </Abilities>

)

const mapDispatchToProps = dispath => bindActionCreators(PokemonDetailsActions, dispath)

export default connect(null, mapDispatchToProps)(PokemonAbilities);