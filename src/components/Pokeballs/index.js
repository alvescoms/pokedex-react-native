import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CaptureActions from '../../actions/capture';
import { Container, Pokeball, Name, Image } from './styles';

const Pokeballs = ({ capturePokemon }) => (

    <Container>
        <TouchableOpacity onPress={() => capturePokemon(1)}>
            <Pokeball>
                <Name>10%</Name>
                <Image source={require('../../assets/images/pokeball.png')} />
            </Pokeball>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => capturePokemon(2)}>
            <Pokeball>
                <Name>20%</Name>
                <Image source={require('../../assets/images/greatball.png')} />
            </Pokeball>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => capturePokemon(3)}>
            <Pokeball>
                <Name>30%</Name>
                <Image source={require('../../assets/images/ultraball.png')} />
            </Pokeball>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => capturePokemon(4)}>
            <Pokeball>
                <Name>100%</Name>
                <Image source={require('../../assets/images/masterball.png')} />
            </Pokeball>
        </TouchableOpacity>
    </Container>

)

const mapStateToProps = state => ({
    capture: state.capture
});

const mapDispatchToProps = dispath => bindActionCreators(CaptureActions, dispath);

export default connect(mapStateToProps, mapDispatchToProps)(Pokeballs);