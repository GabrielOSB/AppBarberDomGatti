import React, {useState, useContext} from "react";
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { propsStack } from '../routes/Stack/Models'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../contexts/auth'

import Header from '../components/header'

import axios from "axios";
import api from '../services/api'

const apiKey = 'nXcqgTjPL69FTZyrPGj8Ah831G2niLMSU63LtEysWYMz9gPdd2p6s5pZ946mBolasxzXXxS';

const App = () => {
    
    const [nome, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    const {register} = useContext(AuthContext)

    
    function handleLogin(){
        register(nome, phone)
    }

    const mask = '(11) 00000-0000';
    
    return (
        <ScrollView style={style.global}>
        
        {/* Header */}
            <View>
                <Header />
            </View >

            <Text style={style.firstText}>Informe seus dados</Text>

        <View style={style.containerInput}>


            <View>

                <TextInput
                style={style.input}
                value={nome}
                mode="outlined"
                label="Nome Completo"
                onChangeText={(name) => setName(name)}
                />

            </View>

            <View>

                <TextInput
                style={style.input}
                value={phone}
                mode="outlined"
                label="Numero de Celular"
                keyboardType="numeric"
                placeholder={mask}
                onChangeText={(number) => setPhone(number)}
                />

            </View>

            <Button  style={style.button} mode="contained" onPress={handleLogin} uppercase={true} >
            Continuar
            </Button>

        </View>

        </ScrollView>
    )
}

export default App

const style = StyleSheet.create({
    global: {
        backgroundColor: '#FAEDDF'
    },
    firstText:{
        textAlign: 'center',
        fontSize: 18,
        marginTop: 30,
        fontFamily: 'RussoOne-Regular',
        color: 'black'
    },
    containerInput:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50, 
    },
    input:{
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        fontSize: 18,
        marginTop: 20,
        marginEnd: 80,
        marginStart: 80,
    },
})