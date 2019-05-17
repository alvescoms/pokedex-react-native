import styled from 'styled-components/native';

export const Item = styled.View`
    height: 110;
    color: #000;
    padding-top: 15;
    padding-bottom: 15;
    padding-left: 15;
    padding-right: 15;
    border-bottom-width: 1;
    border-bottom-color: #ededed;
`

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
`

export const PokeballUsed = styled.ImageBackground`
    width: 80;
    height: 80;
    margin-right: 10px;
`

export const ImageContent = styled.View`
    width: 80;
    height: 80;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Image = styled.Image`    
    width: 60;
    height: 60;
`

export const Details = styled.View`
    
`

export const Name = styled.Text`  
    font-size: 20;
    color: #333333;
`

export const Weight = styled.Text`
    font-size: 16;
    color: #333333;
`

export const DeleteButton = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: center;
`

export const DeleteButtonIcon = styled.View`
    width: 40;
    height: 40;
    border: 3px solid #72b947;
    border-radius: 40;
    justify-content: center;
    align-items: center;
`