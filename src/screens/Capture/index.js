import React from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchPokemonCapture from '../../components/SearchPokemonCapture';
import PokemonAppeared from '../../components/PokemonAppeared';
import * as CaptureActions from '../../actions/capture';

import { Background, Container } from './styles';

const Capture = ({ }) => (

    <View>
        <StatusBar hidden />
        <Background source={require('../../assets/images/background.jpeg')}>
            <Container>            
                <SearchPokemonCapture />
                <PokemonAppeared />
            </Container>
        </Background>
    </View>

)

const mapStateToProps = state => ({
    capture: state.capture
});

const mapDispatchToProps = dispath => bindActionCreators(CaptureActions, dispath)

export default connect(mapStateToProps, mapDispatchToProps)(Capture);