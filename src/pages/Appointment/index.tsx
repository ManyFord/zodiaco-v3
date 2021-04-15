import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import {
    AddressText,
    AppointmentInfoContainer,
    BranchContainer,
    BranchText,
    ConfirmedImage,
    ConfirmedText,
    ConfirmedTextContainer,
    CustomerInfoContainer,
    CustomerText,
    LeftBorder,
    SafeAreaView,
    ReturnButton,
    ReturnText,
    CustomerNameText
} from './styles'

const AppointmentConfirmed = () => {

    const navigator = useNavigation()

    return (
        <SafeAreaView>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <ConfirmedImage source={require('../../assets/confirmed.png')} />
                <ConfirmedTextContainer>
                    <ConfirmedText>Agendamento</ConfirmedText>
                    <ConfirmedText>Concluído</ConfirmedText>
                </ConfirmedTextContainer>
            </View>
            <AppointmentInfoContainer>
                <LeftBorder />
                <View style={{ flex: 1 }}>
                    <CustomerInfoContainer>
                        <CustomerNameText >José dos santos</CustomerNameText>
                        <CustomerText >CPF: 123.456.789-XX </CustomerText>
                        <CustomerText >Horário: 14:30</CustomerText>
                    </CustomerInfoContainer>
                    <BranchContainer>
                        <BranchText>Posto de Saúde Municipal</BranchText>
                        <AddressText>Av. Presidente Juselino</AddressText>
                    </BranchContainer>
                </View>
            </AppointmentInfoContainer>
            <ReturnButton onPress={() => {
                navigator.reset({
                    index: 0,
                    routes: [{ name: 'home' }],
                });
            }}>
                <ReturnText>Voltar ao início</ReturnText>
            </ReturnButton>
        </SafeAreaView>
    )
}

export default AppointmentConfirmed