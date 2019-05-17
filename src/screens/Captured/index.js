import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, StatusBar, FlatList, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PokemonListItem from '../../components/PokemonListItem';
import PokemonDetails from '../PokemonDetails';
import * as CapturedActions from '../../actions/captured';
import * as PokemonDetailsActions from '../../actions/pokemonDetails';
import { CaptureContent, CaptureMessage, CaptureButton, CaptureButtonText } from './styles';

class Captured extends Component {

    constructor(props) {

        super(props);

    }

    onDidFocus = (payload) => {

        const { searchMyPokemon } = this.props;

        searchMyPokemon();

    }

    render() {

        const { captured, toggleDetailsPokemon } = this.props;
        const { pokemonList } = captured;

        return (
            
            <View>
                <StatusBar hidden />
                <NavigationEvents onDidFocus={this.onDidFocus} />
                <View>
                    <PokemonDetails />
                    <ScrollView>
                            
                        {pokemonList && pokemonList.length > 0 ? (

                            pokemonList.map((pokemon, key) => <PokemonListItem key={key} onPress={() => toggleDetailsPokemon(pokemon)} pokemon={pokemon} />)

                            // <FlatList data={pokemonList}
                            //           extraData={this.props}
                            //           renderItem={(item) => <PokemonListItem onPress={() => toggleDetailsPokemon(item.item)} pokemon={item.item} />}
                            //           keyExtractor={item => item.id + ''}
                            //           windowSize={70}
                            //           getItemLayout={(data, index) => {
                            //             return {length: 110, offset: 110 * index, index}
                            //           }} />

                        ) : (

                            <CaptureContent>
                                <CaptureMessage>Nenhum Pokemon capturado =(!</CaptureMessage>
                                <CaptureButton>
                                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Capture')}>
                                        <CaptureButtonText>Começar a capturar</CaptureButtonText>
                                    </TouchableWithoutFeedback>
                                </CaptureButton>
                            </CaptureContent>

                        )}
                    </ScrollView>
                </View>                
            </View>

        );

    }

}

const mapStateToProps = state => ({
    captured: state.captured
});

const mapDispatchToProps = dispath => bindActionCreators({ ...CapturedActions, ...PokemonDetailsActions }, dispath)

export default connect(mapStateToProps, mapDispatchToProps)(Captured);