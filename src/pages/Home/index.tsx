import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {
    ReturnButton,
    ReturnText,
    CalendarIcon,
    ChoiceItem,
    ChoiceItemHourText,
    ChoiceItemNameText,
    ChoiceItemMapText,
    ScrollView,
    MapIcon,
    ChoiceItemLeftBorder,
    ChosenItems, View,
    PresentationContainer,
    LogoContainer,
    CafelandiaBrasao,
    ChoiceItemDateText,
    WelcomeTextCity,
    WelcomeContainer
} from './styles'


/*DICAS PARA USAR O INPUT MASK*
* mask: (String | required | default '')
* the mask pattern
* 9 - accept digit.
* A - accept alpha.
* S - accept alphanumeric.
* * - accept all, EXCEPT white space.
*/

const Home = () => {

    const navigator = useNavigation()

    return (
        <>
            <PresentationContainer>
                <LogoContainer>
                    <CalendarIcon name='menu' size={40} color="#114B5F" onPress={() => { navigator.openDrawer() }}></CalendarIcon>
                    <CafelandiaBrasao source={require('../../assets/brasao_cafelandia.png')} />
                </LogoContainer>
                <WelcomeContainer>
                    <WelcomeTextCity>Bem Estar Cafelândia - PR</WelcomeTextCity>
                </WelcomeContainer>
            </PresentationContainer>
            <ReturnButton onPress={() => { navigator.navigate('loginstack') }}>
                <ReturnText>Novo Agendamento</ReturnText>
            </ReturnButton>

            <ScrollView>
                <ChosenItems>
                    <ChoiceItem>
                        <ChoiceItemLeftBorder />
                        <View>
                            <Text>Agendamento</Text>
                            <ChoiceItemNameText>José dos santos</ChoiceItemNameText>
                            <ChoiceItemHourText>Horário: 14:00</ChoiceItemHourText>
                            <ChoiceItemDateText>Data: 14/02/2021</ChoiceItemDateText>
                            <ChoiceItemMapText>Posto de saúde Municipal</ChoiceItemMapText>
                        </View>
                        <MapIcon name='place' size={30} color="#114B5F" />
                    </ChoiceItem>
                    <ChoiceItem>
                        <ChoiceItemLeftBorder />
                        <View>
                            <Text>Agendamento</Text>
                            <ChoiceItemNameText>José dos santos</ChoiceItemNameText>
                            <ChoiceItemHourText>Horário: 14:00</ChoiceItemHourText>
                            <ChoiceItemDateText>Data: 14/02/2021</ChoiceItemDateText>
                            <ChoiceItemMapText>Posto de saúde Municipal</ChoiceItemMapText>
                        </View>
                        <MapIcon name='place' size={30} color="#114B5F" />
                    </ChoiceItem>
                    <ChoiceItem>
                        <ChoiceItemLeftBorder />
                        <View>
                            <Text>Agendamento</Text>
                            <ChoiceItemNameText>José dos santos</ChoiceItemNameText>
                            <ChoiceItemHourText>Horário: 14:00</ChoiceItemHourText>
                            <ChoiceItemDateText>Data: 14/02/2021</ChoiceItemDateText>
                            <ChoiceItemMapText>Posto de saúde Municipal</ChoiceItemMapText>
                        </View>
                        <MapIcon name='place' size={30} color="#114B5F" />
                    </ChoiceItem>
                    <ChoiceItem>
                        <ChoiceItemLeftBorder />
                        <View>
                            <Text>Agendamento</Text>
                            <ChoiceItemNameText>José dos santos</ChoiceItemNameText>
                            <ChoiceItemHourText>Horário: 14:00</ChoiceItemHourText>
                            <ChoiceItemDateText>Data: 14/02/2021</ChoiceItemDateText>
                            <ChoiceItemMapText>Posto de saúde Municipal</ChoiceItemMapText>
                        </View>
                        <MapIcon name='place' size={30} color="#114B5F" />
                    </ChoiceItem>
                    <ChoiceItem>
                        <ChoiceItemLeftBorder />
                        <View>
                            <Text>Agendamento</Text>
                            <ChoiceItemNameText>José dos santos</ChoiceItemNameText>
                            <ChoiceItemHourText>Horário: 14:00</ChoiceItemHourText>
                            <ChoiceItemDateText>Data: 14/02/2021</ChoiceItemDateText>
                            <ChoiceItemMapText>Posto de saúde Municipal</ChoiceItemMapText>
                        </View>
                        <MapIcon name='place' size={30} color="#114B5F" />
                    </ChoiceItem>
                    <ChoiceItem>
                        <ChoiceItemLeftBorder />
                        <View>
                            <Text>Agendamento</Text>
                            <ChoiceItemNameText>José dos santos</ChoiceItemNameText>
                            <ChoiceItemHourText>Horário: 14:00</ChoiceItemHourText>
                            <ChoiceItemDateText>Data: 14/02/2021</ChoiceItemDateText>
                            <ChoiceItemMapText>Posto de saúde Municipal</ChoiceItemMapText>
                        </View>
                        <MapIcon name='place' size={30} color="#114B5F" />
                    </ChoiceItem>
                    <ChoiceItem>
                        <ChoiceItemLeftBorder />
                        <View>
                            <Text>Agendamento</Text>
                            <ChoiceItemNameText>José dos santos</ChoiceItemNameText>
                            <ChoiceItemHourText>Horário: 14:00</ChoiceItemHourText>
                            <ChoiceItemDateText>Data: 14/02/2021</ChoiceItemDateText>
                            <ChoiceItemMapText>Posto de saúde Municipal</ChoiceItemMapText>
                        </View>
                        <MapIcon name='place' size={30} color="#114B5F" />
                    </ChoiceItem>
                    <ChoiceItem>
                        <ChoiceItemLeftBorder />
                        <View>
                            <Text>Agendamento</Text>
                            <ChoiceItemNameText>José dos santos</ChoiceItemNameText>
                            <ChoiceItemHourText>Horário: 14:00</ChoiceItemHourText>
                            <ChoiceItemDateText>Data: 14/02/2021</ChoiceItemDateText>
                            <ChoiceItemMapText>Posto de saúde Municipal</ChoiceItemMapText>
                        </View>
                        <MapIcon name='place' size={30} color="#114B5F" />
                    </ChoiceItem>
                </ChosenItems>
            </ScrollView>
        </>
    )
}


export default Home