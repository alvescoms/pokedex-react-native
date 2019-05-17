import styled from 'styled-components/native';

export const Loading = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const ModalBody = styled.View`
   background-color: #FFFFFF;
   height: 80%;
   margin-bottom: -25px;
   padding: 20px;
`

export const Details = styled.ScrollView`
    margin-bottom: 20;
`

export const CloseButton = styled.View`
    align-items: flex-end;
`

export const CloseButtonIcon = styled.View`
    width: 40;
    height: 40;
    border: 3px solid #dc0a2d;
    border-radius: 40;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 20;
    color: #333333;
    text-align: center;
    border-bottom-width: 1px;
    border-bottom-color: #ededed;
    padding-bottom: 5;
    margin-bottom: 20;
`