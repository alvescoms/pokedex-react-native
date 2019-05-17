import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CaptureActions from '../../actions/capture';
import { Container, Input } from './styles';

class SearchPokemonCapture extends Component {

    componentDidMount() {

        const randomPokemon = Math.floor((Math.random() * 700) + 1);

        this.props.searchPokemon(randomPokemon);

    }

    search = (pokemon) => {

        const { searchPokemon } = this.props;

        if (!pokemon) {

            pokemon = Math.floor((Math.random() * 700) + 1);

        }

        searchPokemon(pokemon);

    }

    render () {

        return (
            
            <Container>
                <Input onChangeText={(searchTerm) => this.setState({ searchTerm })}
                       returnKeyType='search'
                       onSubmitEditing={(event) => this.search(event.nativeEvent.text.toLowerCase())}
                       placeholder='Procure por um Pokemon...' />
            </Container>

        )

    }

}

const mapDispatchToProps = dispath => bindActionCreators(CaptureActions, dispath);

export default connect(null, mapDispatchToProps)(SearchPokemonCapture);