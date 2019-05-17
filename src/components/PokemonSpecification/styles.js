import styled from 'styled-components/native';

export const Pokemon = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

export const PokemonImage = styled.View`
    width: 50%;
    justify-content: center;
    align-items: center;
`

export const Image = styled.Image`
    width: 120;
    height: 120;
`

export const Specification = styled.View`
    margin-top: 15px;
`

export const SpecificationItem = styled.View`
    flex-direction: row;
`

export const SpecificationTitle = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: #333333;
`

export const SpecificationValue = styled.Text`
    font-size: 16;
    color: #333333;
`