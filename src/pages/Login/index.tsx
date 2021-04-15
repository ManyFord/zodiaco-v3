
import React, { useState } from 'react'
import Checkbox from '../../components/Checkbox';
import {
    CheckBoxContainer,
    FormContainer,
    FormPaper,
    Input,
    InputGroup,
    JoinButton,
    JoinText,
    LabelText,
    CleanInput,
    ScrollView,
    LinearGradientView,
    CafelandiaBrasao,
    ImageBackground,
    WelcomeText,
    WelcomeContainer
} from './styles'
import { Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

/*DICAS PARA USAR O INPUT MASK*
* mask: (String | required | default '')
* the mask pattern
* 9 - accept digit.
* A - accept alpha.
* S - accept alphanumeric.
* * - accept all, EXCEPT white space.
*/

const Login = () => {

    const [cpf, setCpf] = useState<string>()
    const [birthdayDate, setBirthdayDate] = useState<string>()
    const [motherName, setMotherName] = useState<string>()
    const [dontHaveMother, setDontHaveMother] = useState<boolean>(false)

    const navigator = useNavigation()

    function handleChangeCheckbox() {
        setDontHaveMother(motherName => !motherName)
    }

    return (
        <ImageBackground source={require('../../assets/login_bg.png')}>
            <ScrollView>
                <CafelandiaBrasao source={require('../../assets/brasao_cafelandia.png')} />
                <WelcomeContainer>
                    <WelcomeText>Bem vindo ao</WelcomeText>
                    <WelcomeText>Bem Estar Cafelândia PR</WelcomeText>
                </WelcomeContainer>
                <FormContainer>
                    <FormPaper style={{
                        ...Platform.select({
                            android: {
                                elevation: 3
                            },
                        })
                    }} >
                        <InputGroup>
                            <LabelText>CPF</LabelText>
                            <Input
                                type={'custom'}
                                options={{
                                    mask: '999.999.999-99'
                                }}
                                value={cpf}
                                onChangeText={text => { setCpf(text) }
                                }
                                placeholder="Insira o seu CPF"
                                underlineColorAndroid="transparent"
                            />
                        </InputGroup>
                        <InputGroup>
                            <LabelText>Data de nascimento</LabelText>
                            <Input
                                type={'custom'}
                                options={{
                                    mask: '99/99/9999'
                                }}
                                value={birthdayDate}
                                onChangeText={text => { setBirthdayDate(text) }
                                }
                                placeholder="Insira a sua data de nascimento"
                                underlineColorAndroid="transparent"
                            />
                        </InputGroup>
                        <InputGroup>
                            <LabelText>Nome da mãe</LabelText>
                            <CleanInput
                                onChangeText={(text) => { setMotherName(text) }}
                                value={motherName}
                                placeholder="Insira o nome da sua mãe"
                            />
                        </InputGroup>
                        <CheckBoxContainer>
                            <Checkbox
                                label="Não consta o nome da mãe no RG"
                                labelStyle={{ color: '#7A7A7A', fontSize: 16, }}
                                iconColor="#4B4B4B"
                                checkColor="#7A7A7A"
                                value={dontHaveMother}
                                handleChange={handleChangeCheckbox}
                            />
                        </CheckBoxContainer>
                        <JoinButton onPress={() => { navigator.navigate('phone') }}>
                            <JoinText >Entrar</JoinText>
                        </JoinButton>
                    </FormPaper>
                </FormContainer>

            </ScrollView>
        </ImageBackground>
    )
}


export default Login