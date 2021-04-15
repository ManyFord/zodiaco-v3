import React, { useState } from 'react'
import { Image, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { TextInputMask } from 'react-native-masked-text'
import StepView from '../../components/StepView'
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from '../Login/styles'


const Phone = () => {

    const [phone, setPhone] = useState<string>()
    const navigator = useNavigation()

    return (
        <ImageBackground source={require('../../assets/phone_bg.png')} style={styles.root}>
            <View style={styles.arrowContainer} >
                <Icon name="arrowleft" size={30} color="#114B5F" onPress={() => { navigator.goBack() }} />
            </View>
            <Image source={require('../../assets/covid_run.png')} style={styles.covidRun} />
            <View style={styles.instructionContainer}>
                <Text style={styles.instructionText}>
                    Para ganharmos a corrida contra COVID-19 precisamos proteger você e as as pessoas ao seu redor.
                </Text>
            </View>
            <TextInputMask
                type={'custom'}
                options={{
                    mask: '(99) 99999-9999'
                }}
                value={phone}
                style={styles.input}
                onChangeText={text => { setPhone(text) }
                }
                placeholder="Insira o seu telefone"
                underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={styles.joinButton} onPress={() => { navigator.navigate('group') }}>
                <Text style={styles.joinText}>Continuar</Text>
            </TouchableOpacity>
            <StepView stepNumber={1} steps={5} activeColor={'#7AC8C3'} inactiveColor={'#C4C4C4'} />
        </ImageBackground>
    )
}

export default Phone