import React, { Component } from 'react';
import { Alert, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CapturedActions from '../../actions/captured';
import PokemonTypes from '../PokemonTypes';
import { Item, Content, PokeballUsed, ImageContent, Image, Details, Name, DeleteButton, DeleteButtonIcon } from './styles';

class PokemonListItem extends Component {

    constructor(props) {

        super(props);

    }

    delete = (id) => {

        const { pokemon, deletePokemon } = this.props;

        Alert.alert('Atenção', `Deseja transferir ${pokemon.name} para o PC?`, [{
            text: 'Não'
        },
        {
            text: 'Sim', 
            onPress: () => deletePokemon(id)
        }],
        {
            cancelable: false
        });

    }

    render() {

        const { pokemon } = this.props;

        const pokeball = (pokemon.pokeballUsed === 1) ? require('../../assets/images/pokeball.png')
                       : (pokemon.pokeballUsed === 2) ? require('../../assets/images/greatball.png')
                       : (pokemon.pokeballUsed === 3) ? require('../../assets/images/ultraball.png')
                       : (pokemon.pokeballUsed === 4) ? require('../../assets/images/masterball.png') : '#';

        return (

            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <Item>
                    <Content>
                        <PokeballUsed source={pokeball}>
                            <ImageContent>
                                <Image source={{uri: (pokemon.image) ? pokemon.image : '#'}} />
                            </ImageContent>
                        </PokeballUsed>
                        <Details>
                            <Name>#{pokemon.pokemonId} - {pokemon.name}</Name>
                            <PokemonTypes types={pokemon.types} />
                        </Details>
                        <DeleteButton>
                            <TouchableWithoutFeedback onPress={() => this.delete(pokemon.id)}>
                                <DeleteButtonIcon>
                                    <Icon style={{ fontSize: 20, color: '#72b947', fontWeight: 'bold' }} name="computer" />
                                </DeleteButtonIcon>
                            </TouchableWithoutFeedback>
                        </DeleteButton>
                    </Content>
                </Item>
            </TouchableWithoutFeedback>

        )

    }

}

const mapStateToProps = state => ({
    captured: state.captured
});

const mapDispatchToProps = dispath => bindActionCreators(CapturedActions, dispath)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListItem);