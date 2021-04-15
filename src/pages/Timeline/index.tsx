import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    View,
    TimelineContainer,
    TimelineText,
    TimelineItems,
    TimelineItem,
    TimelineItemPeriodText,
    TimelineItemAgeText,
    TimelineItemGroupText,
    TimelineItemLeftBorder,
    ScrollView,
    MainContent,
    BackIcon,
    ContinueButton,
    ContinueText,
    TimelineItemGroupTextWarning,
    TimelineItemGroupTextRunning
} from './styles'

import Icon from 'react-native-vector-icons/AntDesign'
import StepView from '../../components/StepView';


/*DICAS PARA USAR O INPUT MASK*
* mask: (String | required | default '')
* the mask pattern
* 9 - accept digit.
* A - accept alpha.
* S - accept alphanumeric.
* * - accept all, EXCEPT white space.
*/

const Timeline = () => {
    const navigator = useNavigation()

    return (
        <MainContent>
            <BackIcon name="arrowleft" size={30} color="#114B5F" onPress={() => { navigator.goBack() }} />
            <TimelineText>Cronograma de Vacinação</TimelineText>
            <ScrollView>
                <TimelineContainer>
                    <TimelineItems>
                        <TimelineItem style={{ backgroundColor: '#DCF3EE' }}>
                            <TimelineItemLeftBorder />
                            <View style={{ flex: 1, padding: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                    <TimelineItemGroupText>Grupo 3</TimelineItemGroupText>
                                    <TimelineItemGroupTextRunning>Encerrado</TimelineItemGroupTextRunning>
                                </View>
                                <TimelineItemAgeText>Acima de 90 anos</TimelineItemAgeText>
                                <TimelineItemPeriodText>Período: 12/03/2021 até 30/03/2021</TimelineItemPeriodText>
                            </View>
                        </TimelineItem>
                        <Icon name="arrowdown" size={30} />
                        <TimelineItem style={{ backgroundColor: '#DCF3EE' }}>
                            <TimelineItemLeftBorder />
                            <View style={{ flex: 1, padding: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                    <TimelineItemGroupText>Grupo 3</TimelineItemGroupText>
                                    <TimelineItemGroupTextRunning>Encerrado</TimelineItemGroupTextRunning>
                                </View>
                                <TimelineItemAgeText>Acima de 90 anos</TimelineItemAgeText>
                                <TimelineItemPeriodText>Período: 12/03/2021 até 30/03/2021</TimelineItemPeriodText>
                            </View>
                        </TimelineItem>
                        <Icon name="arrowdown" size={30} />
                        <TimelineItem>
                            <TimelineItemLeftBorder style={{ backgroundColor: '#62d162' }} />
                            <View style={{ flex: 1, padding: 10, width: '100%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                    <TimelineItemGroupText>Grupo 1</TimelineItemGroupText>
                                    <TimelineItemGroupTextWarning>Em andamento</TimelineItemGroupTextWarning>
                                </View>
                                <TimelineItemAgeText>Acima de 90 anos</TimelineItemAgeText>
                                <TimelineItemPeriodText>Período: 12/03/2021 à 30/03/2021</TimelineItemPeriodText>
                            </View>
                        </TimelineItem>
                        <Icon name="arrowdown" size={30} />
                        <TimelineItem >
                            <TimelineItemLeftBorder style={{ backgroundColor: '#d9d9d9' }} />
                            <View style={{ flex: 1, padding: 10, backgroundColor: '#e9e9e9' }}>
                                <TimelineItemGroupText>Grupo 4</TimelineItemGroupText>
                                <TimelineItemAgeText>Acima de 90 anos</TimelineItemAgeText>
                                <TimelineItemPeriodText>Período: 12/03/2021 até 30/03/2021</TimelineItemPeriodText>
                            </View>
                        </TimelineItem>
                        <Icon name="arrowdown" size={30} />
                        <TimelineItem>
                            <TimelineItemLeftBorder style={{ backgroundColor: '#d9d9d9' }} />
                            <View style={{ flex: 1, padding: 10, backgroundColor: '#e9e9e9' }}>
                                <TimelineItemGroupText>Grupo 5</TimelineItemGroupText>
                                <TimelineItemAgeText>Acima de 90 anos</TimelineItemAgeText>
                                <TimelineItemPeriodText>A definir</TimelineItemPeriodText>
                            </View>
                        </TimelineItem>
                    </TimelineItems>
                </TimelineContainer>
            </ScrollView>
   
        </MainContent>
    )
}


export default Timeline