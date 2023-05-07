import React from "react"
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { propsStack } from '../routes/Stack/Models'
import { useNavigation } from '@react-navigation/native'

import Header from "../components/header"
import { Card, Button } from 'react-native-paper';

const App = () => {
    const navigation = useNavigation<propsStack>()
    return(
        
        <ScrollView style={styles.global}>
            <Header />  

            <Card style={styles.card}>
                <Card.Content>

                    <View>
                        <Text style={styles.textCard}>Tem certeza que deseja cancelar ?</Text>
                    </View>

                    <View style={styles.containerButton}> 

                        <Button style={styles.buttonNegative} mode="contained" onPress={() => navigation.navigate("Home")}
                         uppercase={true} textColor={'#3B3F49'}>
                            Não
                        </Button>

                        <Button style={styles.buttonPositive} mode="contained" onPress={() => {
                        }} uppercase={true} >
                            Sim
                        </Button>

                    </View>

                </Card.Content>
            </Card>

        </ScrollView>

    )
}

export default App

const styles = StyleSheet.create({
    global:{
        backgroundColor: '#FAEDDF'
    },
    card:{
        backgroundColor: '#3B3F49',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    textCard:{
        fontFamily: 'RussoOne-Regular',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        color: '#F7A29E'
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    buttonPositive: {
        backgroundColor: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        fontSize: 18,
        marginBottom: 20,  
    },
    buttonNegative: {
        backgroundColor: '#FAEDDF',
        fontFamily: 'RussoOne-Regular',
        fontSize: 18,
        marginBottom: 20, 
    }
})