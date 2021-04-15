import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text'


import styled from 'styled-components/native'

export const ScrollView = styled.ScrollView`
    margin-top: 20px;
`

export const FormContainer = styled.View`
    align-items: center;
    width: 100%;
`


export const LinearGradientView = styled(LinearGradient).attrs({ colors: ['#97D8C0', 'rgba(255,255,255,0)'] })`
`

export const CafelandiaBrasao = styled.Image`
    height: 140px;
    align-self: center;
    resize-mode: contain;
    margin-bottom: 20px;
    margin-top: 40px;
`

export const ImageBackground = styled.ImageBackground`
    width: 100%; 
    height: 100%;

`

export const WelcomeContainer = styled.View`
    width: 80%;
    align-self: center;
`

export const WelcomeText = styled.Text`
    font-family: 'Poppins_500Medium';
    color: #fff;
    text-align: left;
    font-size: 24px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 2px rgba(15,6,4,0.08);
`

export const FormPaper = styled.View`
    width: 90%;
    background-color: #FFFFFF;
    border-radius: 40px;
    margin-bottom: 40px;
    align-items: center;
    border-width: 1;
    border-color: #F4F4F4;
    padding: 20px;
    shadow-opacity: 0.3;
    shadow-radius: 5px;
    shadow-color: rgba(0,0,0,0.3);
    shadow-offset: 0px 0px;
`

export const InstructionText = styled.View`
    color: #4B4B4B;
    font-family: 'Poppins_500Medium';
    font-size: 16px;
`
export const JoinText = styled.Text`
    color: #FFFFFF;
    font-family: 'Poppins_500Medium';
    font-size: 16px;
`

export const InputGroup = styled.View`
    margin-top: 20px;
    width: 100%;
`

export const LabelText = styled.Text`
    color: #7A7A7A;
    font-family: 'Poppins_500Medium';
    font-size: 12px;
`

export const Input = styled(TextInputMask)`
    height: 60px;
    background-color: #FAFAFA;
    border-radius: 8px;
    border-width: 2px;
    border-color: #F8F4F4;
    padding-left: 10px;
    color: #4B4B4B;
    font-family: 'Poppins_500Medium';
    font-size: 16px;
`

export const CleanInput = styled.TextInput`
    height: 60px;
    background-color: #FAFAFA;
    border-radius: 8px;
    border-width: 2px;
    border-color: #F8F4F4;
    padding-left: 10px;
    color: #4B4B4B;
    font-family: 'Poppins_500Medium';
    font-size: 16px;
`

export const JoinButton = styled.TouchableOpacity`
    background-color: #7AC8C3;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    height: 60px;
    width: 260px;
    border-radius: 10px;
`

export const CheckBoxContainer = styled.View`
    width: 100%;
    margin-top: 20px;
    align-items: flex-start;
`

