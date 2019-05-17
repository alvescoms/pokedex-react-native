import React, { Component } from 'react';
import { Alert, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PokemonDetailsActions from '../../actions/pokemonDetails';
import PokemonLoading from '../../components/PokeballLoading';
import PokemonSpecification from '../../components/PokemonSpecification';
import PokemonStats from '../../components/PokemonStats';
import PokemonEvolutions from '../../components/PokemonEvolutions';
import PokemonAbilities from '../../components/PokemonAbilities';
import { Loading, ModalBody, Details, CloseButton, CloseButtonIcon, Title } from './styles';

class PokemonDetails extends Component {

    componentDidUpdate(prevProps) {

        const { pokemonDetails } = this.props;
        const { pokemonSelected } = pokemonDetails;

        if (prevProps.pokemonDetails.pokemonSelected.pokemonId !== pokemonSelected.pokemonId && pokemonSelected.pokemonId) {

            const { searchDetailsPokemon } = this.props;

            searchDetailsPokemon(pokemonSelected.pokemonId);

        }

        if (prevProps.pokemonDetails.shortEffect !== pokemonDetails.shortEffect && pokemonDetails.shortEffect) {

            Alert.alert(pokemonDetails.abilityName, pokemonDetails.shortEffect);

        }

    }

    render() {

        const { pokemonDetails, toggleDetailsPokemon, searchAbilityDetails } = this.props;
        const { showDetails, pokemon } = pokemonDetails;

        return (

            <Modal isVisible={showDetails}
                   style={{justifyContent: 'flex-end', margin: 0}}>
                <ModalBody>

                    {pokemonDetails.searching ? (

                        <Loading>
                            <PokemonLoading message="Procurando..." color="#333333" />
                        </Loading>

                    ) : (

                        <Details>
                            <CloseButton>
                                <TouchableWithoutFeedback onPress={() => toggleDetailsPokemon()}>
                                    <CloseButtonIcon>
                                        <Icon style={{ color: '#dc0a2d', fontWeight: 'bold' }} name="close" />
                                    </CloseButtonIcon>
                                </TouchableWithoutFeedback>
                            </CloseButton>
                            <Title>
                                #{pokemon.id} - {(pokemon.name) ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : '' }
                            </Title>
                            <PokemonSpecification pokemon={pokemon} />
                            <Title>
                                Estatísticas
                            </Title>
                            <PokemonStats pokemon={pokemon} />
                            <Title>
                                Evoluções
                            </Title>
                            <PokemonEvolutions evolutions={pokemon.evolutions} />
                            <Title>
                                Habilidades
                            </Title>
                            <PokemonAbilities abilities={pokemon.abilities} />
                        </Details>

                    )}

                </ModalBody>
            </Modal>

        );

    }

}

const mapStateToProps = state => ({
    pokemonDetails: state.pokemonDetails
});

const mapDispatchToProps = dispath => bindActionCreators(PokemonDetailsActions, dispath)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);