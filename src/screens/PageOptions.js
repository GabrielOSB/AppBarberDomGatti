import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card } from 'react-native-paper';
import { propsStack } from '../routes/Stack/Models'
import Header from '../components/header';

import { AuthContext } from '../contexts/auth'

import axios from "axios";
import api from '../services/api'

const App = () => {
    const navigation = useNavigation()

    const {register, user} = useContext(AuthContext)

    function handleLogin(){
        register(nome, telefone)
    }

    return (
    <ScrollView style={styles.containerBody}> 

        {/* Header */}
            <View>
                <Header /> 
            </View >

        {/* Body */}
            <View style={styles.containerOptionsColumn}>

                    <Text style={{marginTop: 50, marginBottom: 20, fontFamily: 'RussoOne-Regular', color: 'black', fontSize: 20}}>Serviços</Text>

                <View style={styles.containerOptionsFlex}>

                    <View>
                        <TouchableOpacity style={styles.containerOptions} onPress={() => navigation.navigate("Register")}>
                        <Image style={{width: 35, height: 35, marginRight: 20, marginBottom: 20, marginTop: 20}} source={require('../assets/calendario.png')} />
                        <Text style={styles.fontText}>Agendamento</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.containerOptions} onPress={() => navigation.navigate("Cancellation")}>
                        <Image style={{width: 35, height: 35, marginRight: 20, marginBottom: 20, marginTop: 20}} source={require('../assets/calendario-no-color.png')} />
                        <Text style={styles.fontTextCancelamento}>Cancelamento</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.containerOptions} onPress={() => navigation.navigate("Contato")}>
                        <Image style={{width: 30, height: 30, marginRight: 20, marginBottom: 20, marginTop: 20}} source={require('../assets/contato.png')} />
                        <Text style={styles.fontText}>Contato</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.containerOptions} onPress={() => navigation.navigate("Maps")}>
                        <Image style={{width: 30, height: 30, marginRight: 20, marginBottom: 20, marginTop: 20}} source={require('../assets/maps.png')} />
                        <Text style={styles.fontText}>Maps</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
    
        {/* Proximo Agendamento */}

        <View>
            <Card style={styles.containerAgendamento}>
                <Card.Content>
                <Text style={{color: '#F7A29E', fontFamily: 'RussoOne-Regular', textAlign: 'center', marginBottom: 20}}>Proximo Agendamento</Text>
                <Text style={{color: '#F7A29E', fontFamily: 'RussoOne-Regular', marginBottom: 10}}>Dia: {user.nome}</Text>
                <Text style={{color: '#F7A29E', fontFamily: 'RussoOne-Regular',}}>Horário: {user.telefone}</Text>
                </Card.Content>
            </Card>
        </View>
    </ScrollView>
    )
    
}

export default App 

const styles = StyleSheet.create({
    containerBody: {
        backgroundColor: '#FAEDDF',
    },
    containerOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerOptionsFlex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    containerOptionsColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontText: {
        marginBottom: 20, 
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'RussoOne-Regular',
        color: 'black',
    },
    fontTextCancelamento:{
        marginBottom: 20, 
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'RussoOne-Regular',
        color: 'gray',
    },
    containerAgendamento: {
        backgroundColor: '#3B3F49',
        marginBottom: 60,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30
    }
})