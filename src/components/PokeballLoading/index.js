import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { Container, Name } from './styles';

class PokeballLoading extends Component {

    constructor(props) {

        super(props);

        this.rotateValueHolder = new Animated.Value(0);

    }

    componentDidMount() {

        this.startImageRotateFunction();

    }

    startImageRotateFunction() {

        this.rotateValueHolder.setValue(0);

        Animated.timing(this.rotateValueHolder, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
        }).start(() => this.startImageRotateFunction());

    }

    render() {

        const rotateData = this.rotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            
            <Container>
                <Animated.Image style={{
                    width: 100,
                    height: 100,
                    transform: [{ rotate: rotateData }],
                }} source={require('../../assets/images/spinner.png')} />
                <Name style={{color: (this.props.color) ? this.props.color : '#FFFFFF'}}>{this.props.message}</Name>
            </Container>

        )

    }

}

export default PokeballLoading;