import { useNavigation } from '@react-navigation/core'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import StepView from '../../components/StepView'
import { SafeAreaView } from '../Appointment/styles'
import { Platform } from 'react-native';

import {
    View,
    ChoiceContainer,
    ChoiceText,
    ChoiceItems,
    ChoiceItem,
    ChoiceItemMapText,
    ChoiceItemAdressText,
    ChoiceItemBranchText,
    ChoiceItemLeftBorder,
    MapIcon,
    ScrollView,
    Header,
    ArrowLeft
} from './styles'

const Branchs = () => {

    const navigator = useNavigation()


    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 40, }}>
            <ArrowLeft onPress={() => { navigator.goBack() }} />
            <Header>
                <ChoiceText >Escolha o posto de saúde</ChoiceText>
            </Header>
            <ScrollView>
                <ChoiceContainer>
                    <ChoiceItems >
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (

                                <ChoiceItem key={item} onPress={() => { navigator.navigate('appointment') }}
                                    style={{
                                        ...Platform.select({
                                            android: {
                                                elevation: 3
                                            },
                                        })
                                    }}
                                >

                                    <ChoiceItemLeftBorder />
                                    <View style={{ flex: 1, padding: 10 }}>
                                        <ChoiceItemBranchText>Posto de saúde pioneiros</ChoiceItemBranchText>
                                        <ChoiceItemAdressText>Av. do graibs</ChoiceItemAdressText>
                                        <ChoiceItemMapText style={{ alignSelf: 'flex-end' }}>A 300m de distância</ChoiceItemMapText>
                                    </View>
                                    <MapIcon name='place' size={30} color="#114B5F" />
                                </ChoiceItem>

                            ))
                        }

                    </ChoiceItems>
                </ChoiceContainer>
            </ScrollView>
            <StepView stepNumber={3} steps={5} activeColor={'#7AC8C3'} inactiveColor={'#C4C4C4'} />
        </View >
    )
}


export default Branchs