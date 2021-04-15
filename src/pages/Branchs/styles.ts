import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'

export const ChoiceContainer = styled.View`
    flex: 1;
    align-items: center;
`

export const ArrowLeft = styled(AntIcon).attrs({
    name: "arrowleft",
    size: 30,
    color: "#114B5F"
})`
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 20px;
`
export const Header = styled.View`
    height: 40px;
    width: 100%;
    margin: 20px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ChoiceText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 25px;
    color: #000000;
`

export const ChoiceItems = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    shadow-opacity: 0.3;
    shadow-radius: 5px;
    shadow-color: rgba(0,0,0,0.3);
    shadow-offset: 0px 0px;
    elevation: 4;
`


export const ChoiceItem = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    border-radius: 15px;
    border-color: #f4f4f3;
    background-color: #fcfcfc;

    margin: 12px 0px;
    overflow: hidden;
    width: 80%;
    height: 110px;
    align-items: flex-end;
    justify-content: flex-end;
  
`


export const ChoiceItemLeftBorder = styled.View`
    background-color: #7AC8C3;
    width: 14px;
    height: 100%;
`

export const ChoiceItemBranchText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 20px;
    flex: 1;

`
export const ChoiceItemAdressText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 12px;
    flex: 1;
`

export const ChoiceItemMapText = styled.Text`
    font-family: 'Poppins_500Medium';
    flex: 1;
    font-size: 10px;
`

export const ScrollView = styled.ScrollView`
    flex: 1;
    width: 100%;
    background: #FFFFFF;
`


export const MapIcon = styled(Icon)`
    padding-bottom: 20px;
    padding-right: 20px;
`

export const View = styled.View`
    margin-top: 0px;
`
export const BottomChoiceItem = styled.View`
    flex-direction: row;
`
