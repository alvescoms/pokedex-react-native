import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CaptureActions from '../../actions/capture';
import PokeballLoading from '../PokeballLoading';
import Pokeballs from '../Pokeballs';
import { Container, Captured, Message, Pokemon, PokemonImage, Run, SmokeImage } from './styles';

class PokemonAppeared extends Component {

    render () {

        const { capture } = this.props;
        const pokemon = capture.pokemon;

        return (

            <View>

                {capture.searching ? (
                    
                    <PokeballLoading message="Procurando..." />

                ) : capture.captured ? (

                    <Captured>
                        <Message>Você capturou um {(pokemon.name) ? pokemon.name : ''} =D!</Message>
                        <Pokemon>
                            <PokemonImage source={{uri: (pokemon.image) ? pokemon.image : '#'}} />
                        </Pokemon>
                    </Captured>

                ) : (

                    <Container>

                        {pokemon.name ? (

                            <View>

                                {capture.capturing ? (

                                    <View>
                                        <PokeballLoading message="Capturando..." />
                                    </View>

                                ) : (

                                    <View>
                                        <Message>Um {(pokemon.name) ? pokemon.name : ''} selvagem apareceu!</Message>
                                        <Message>{(capture.escaped) ? 'Pokemon escapou da Pokebola, jogue outra!' : 'Jogue uma Pokebola!'}</Message>
                                        <Pokemon>
                                            <PokemonImage source={{uri: (pokemon.image) ? pokemon.image : '#'}} />
                                        </Pokemon>
                                        <Pokeballs />
                                    </View>

                                )}

                            </View>

                        ) : (

                            <View>
                                
                                {capture.researched ? (

                                    <Run>
                                        <Message>{capture.error}</Message>
                                        <Pokemon>
                                            <SmokeImage source={require('../../assets/images/smoke.png')} />
                                        </Pokemon>
                                    </Run>

                                ) : (

                                    null

                                )}

                            </View>

                        )}
                        
                    </Container>

                )}

            </View>           

        )

    }

}

const mapStateToProps = state => ({
    capture: state.capture
});

const mapDispatchToProps = dispath => bindActionCreators(CaptureActions, dispath);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonAppeared);