import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../routes/Stack/Models'

import Header from '../components/header';
import { Card, Button } from 'react-native-paper';

const App = () => {
    const navigation = useNavigation<propsStack>()
    return (

    <ScrollView style={styles.global}> 

        {/* Header */}
            <View>
                <Header /> 
            </View >

        {/* Body */}

            <View>
                <Text style={styles.text}>Localização</Text>
            </View>

            <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.textCard}>Local:   Rua Alexandre Coelho, 403</Text>
                    <Text style={styles.textSecondary}>Ponto de Referencia:  Prox. A escola Godoy</Text>
                    <Text style={styles.textSecondary}>Cep:  07133-190   Guarulhos - SP</Text>
                </Card.Content>
            </Card>

            <Button style={styles.button} mode="contained" onPress={() => {
                Linking.openURL('google.navigation:q=Barbearia Dom Gatti - Rua Alexandre Coelho - Jardim Divinolandia, Guarulhos - SP');
            }} uppercase={true} >
                Abrir Google Maps
            </Button>

    </ScrollView>
    )
    
}

export default App 

const styles = StyleSheet.create({
    global:{
        backgroundColor: '#FAEDDF'
    },
    text:{
        fontFamily: 'RussoOne-Regular',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50, 
        marginBottom: 20,
        color: 'black'
    },
    textCard:{
        fontFamily: 'RussoOne-Regular',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        color: '#F7A29E'
    },
    card:{
        backgroundColor: '#3B3F49',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    textSecondary:{
        color: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        fontSize: 13,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        fontSize: 18,
        marginBottom: 20,
        marginEnd: 80,
        marginStart: 80
    },
})