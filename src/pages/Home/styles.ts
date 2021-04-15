import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient';
import ScheduleIcon from 'react-native-vector-icons/Entypo'
import PlsCircle from 'react-native-vector-icons/Feather'
import Menu from 'react-native-vector-icons/Entypo'



export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background: #FFFFFF;
    align-items: center;
`

export const ChosenItems = styled.View`
    margin-top: 30px;
    flex: 1;
    align-items: center;
`


export const ChoiceItem = styled.View`
    flex: 1;
    flex-direction: row;
    border-radius: 15px;
    border-width: 1px;
    border-color: #ffffff;
    margin-bottom: 15px;
    overflow: hidden;
    width: 80%;
    height: 100px;
    margin-right: 20px;
    margin: 5px;
`

export const ChoiceItemLeftBorder = styled.View`
    align-items: flex-start;
    background-color: #7AC8C3;
    width: 12px;
    margin-right: 5px;
`

export const CalendarIcon = styled(ScheduleIcon)`
    align-self: flex-start;
    margin-left: 20;
`

export const MapIcon = styled(Icon)`
    margin-top: 30px;
    margin-left: 90px;
`

export const PlusCircle = styled(PlsCircle)`
    flex-direction: row;
    margin-left: 150px;
    margin-top: 10px;
`

export const ScrollView = styled.ScrollView`
    flex: 1;
    width: 100%;
`

export const View = styled.View`
    margin-top: 5px;
`

export const ChoiceItemNameText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 15px;
    flex: 1;
`

export const ChoiceItemHourText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 15px;
    flex: 1;
`

export const WelcomeTextCity = styled.Text`
    font-family: 'Poppins_500Medium';
    color: #313131;
    font-size: 20px;
    margin-top: 20px;
`

export const PresentationContainer = styled.View`
    width: 100%;
    background-color: #DCF3EE;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    align-items: center;
    padding-top: 40px;
`

export const WelcomeContainer = styled.View`

`

export const LogoContainer = styled.View`
    width: 100%;
    overflow: hidden;
    align-items: center;
`


export const CafelandiaBrasao = styled.Image`
    width: 100px;
    height: 100px;
    resize-mode: stretch;
`

export const ChoiceItemMapText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 10px;
    flex: 1;
`

export const ChoiceItemDateText = styled.Text`
    font-family: 'Poppins_500Medium';
    flex: 1;
    font-size: 10px;
`

export const ReturnButton = styled.TouchableOpacity`
        background: #7AC8C3;
        align-items: center;
        justify-content: center;
        margin: 20px 0px;   
        height: 50px;
        width: 260px;
        border-radius: 30px;
        align-self: center;
`

export const ReturnText = styled.Text`
        color: #FFFFFF;
        font-family: 'Poppins_500Medium';
        font-size: 16px;
`
