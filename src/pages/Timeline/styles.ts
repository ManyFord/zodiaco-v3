import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'


export const BackIcon = styled(Icon)`
    height: 40px;
    width: 100%;
    align-items: flex-start;
    margin-left: 40px;
    margin-top: 30px;
`

export const TimelineContainer = styled.View`
    flex: 1;
    align-items: center;
`


export const MainContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    padding-top: 40px;
`


export const TimelineText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 20px;
    color: #000000;
    margin-top: 5px;
`

export const TimelineItems = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
`


export const TimelineItem = styled.View`
    flex: 1;
    flex-direction: row;
    border-radius: 15px;
    border-width: 1px;
    border-color: #f4f4f3;
    margin-bottom: 15px;
    overflow: hidden;
    width: 80%;
    height: 100px;
    align-items: flex-end;
    justify-content: flex-end;
`


export const TimelineItemLeftBorder = styled.View`
    background-color: #7AC8C3;
    width: 14px;
    height: 100%;
`

export const TimelineItemGroupText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 20px;
    flex: 1;

`

export const TimelineItemGroupTextWarning = styled.Text`
    font-family: 'Poppins_500Medium';
    color: #62d162;
    font-size: 15px;
    flex: 1;
`
export const TimelineItemGroupTextRunning = styled.Text`
    font-family: 'Poppins_500Medium';
    color: #114B5F;
    font-size: 15px;
    flex: 1;
`
export const TimelineItemAgeText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 16px;
`

export const TimelineItemPeriodText = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 16px;
`

export const ScrollView = styled.ScrollView`
    flex: 1;
    width: 100%;
    background: #FFFFFF;
    margin-top: 20px;
`


export const View = styled.View`
    margin-top: 0px;
`

export const BottomTimelineItem = styled.View`
    flex-direction: row;
`

export const ContinueButton = styled.TouchableOpacity`
    background-color: #7AC8C3;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 260px;
    border-radius: 30px;
    margin-top: 20px;
`

export const ContinueText = styled.Text`
    color: #FFFFFF;
    font-family: 'Poppins_500Medium';
    font-size: 16px;
`
