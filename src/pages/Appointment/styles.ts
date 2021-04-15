import styled from 'styled-components/native'

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background: #FFFFFF;
    align-items: center;
    justify-content: space-evenly;
`

export const ConfirmedImage = styled.Image`
    width: 30%;
    resize-mode: contain;
`

export const ConfirmedText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 26;
    color: #4B4B4B;
    text-align: center;
    `


export const AppointmentInfoContainer = styled.View`
    width: 80%;
    border-width: 1px;
    border-color: #F4F3F3;
    flex-direction: row;
    border-color: #f4f4f3;
    background-color: #fcfcfc;
    border-radius: 10px;
    shadow-opacity: 0.3;
    shadow-radius: 4px;
    shadow-color: rgba(0,0,0,0.2);
    shadow-offset: 0px 0px;
`

export const LeftBorder = styled.View`
    background: #7AC8C3;
    flex-direction: column;
    width: 10px;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const CustomerText = styled.Text`
    text-align: center;
    font-family: 'Poppins_500Medium';
    font-size: 16px;
    color: #4B4B4B;
`
export const CustomerNameText = styled.Text`
    text-align: center;
    font-family: 'Poppins_500Medium';
    font-size: 24px;
    color: #4B4B4B;
`


export const ConfirmedTextContainer = styled.View`
    margin: 20px 0px;
`

export const BranchContainer = styled.View`
    padding: 10px;
    text-align: left;
    align-items: center;
`
export const BranchText = styled.Text`
    text-align: center;
    font-family: 'Poppins_500Medium';
    font-size: 16px;
    color: #4B4B4B;
`

export const CafelandiaBrasao = styled.Image`
    height: 50%;
    width: 50%;
    align-self: center;
    resize-mode: contain;
`

export const AddressText = styled.Text`
    text-align: center;
    font-family: 'Poppins_500Medium';
    font-size: 16px;
    color: #4B4B4B;
`
export const CustomerInfoContainer = styled.View`
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 10px;
    width: 100%;
`
export const ReturnButton = styled.TouchableOpacity`
    background: #7AC8C3;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin-top: 20px;
    width: 70%;
    border-radius: 30px;
`

export const ReturnText = styled.Text`
    color: #FFFFFF;
    font-family: 'Poppins_500Medium';
    font-size: 16px;
`