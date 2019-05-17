import styled from 'styled-components/native';

export const Types = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Type = styled.Text`
    margin-right: 5px;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
    border-radius: 20px;
    color: #FFFFFF;
    background-color: ${props => (props.type === 'normal') ? '#a8a878'
                               : (props.type === 'water') ? '#6890f0'
                               : (props.type === 'electric') ? '#f8d030'
                               : (props.type === 'fighting') ? '#c03028'
                               : (props.type === 'ground') ? '#e0c068'
                               : (props.type === 'psychic') ? '#f85888'
                               : (props.type === 'rock') ? '#b8a038'
                               : (props.type === 'dark') ? '#705848'
                               : (props.type === 'steel') ? '#b8b8d0'
                               : (props.type === 'fire') ? '#f08030'
                               : (props.type === 'grass') ? '#78c850'
                               : (props.type === 'ice') ? '#98d8d8'
                               : (props.type === 'poison') ? '#a040a0'
                               : (props.type === 'flying') ? '#a890f0'
                               : (props.type === 'bug') ? '#a8b820'
                               : (props.type === 'ghost') ? '#705898'
                               : (props.type === 'dragon') ? '#7038f8'
                               : (props.type === 'fairy') ? '#f0b6bc' : '#cecece' };
`