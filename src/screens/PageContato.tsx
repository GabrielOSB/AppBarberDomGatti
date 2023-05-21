import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../routes/Stack/Models'

import Header from '../components/header';
import { Card } from 'react-native-paper';

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
                <Text style={styles.text}>Contato</Text>
            </View>

            <Card style={styles.card}>
                <Card.Content>

                    <View style={styles.containerCards}>
                        <Image style={{ width: 60, height: 55, borderRadius: 50, marginBottom: 10}} source={require('../assets/caio.png')} />
                        <Text style={styles.textCard}>Caio Gatti</Text>
                    </View>

                    <Text style={styles.textSecondary}>Whatsapp: 11 95887-4230</Text>
                    <Text style={styles.textSecondary}>Instagram: @caio_dongatti</Text>
                </Card.Content>
            </Card>

            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.containerCards}>
                        <Image style={{ width: 60, height: 55, borderRadius: 50, marginBottom: 10 }} source={require('../assets/renan.png')} />
                        <Text style={styles.textCard}>Renan Gatti</Text>
                    </View>
                    <Text style={styles.textSecondary}>Whatsapp: 11 94398-1467</Text>
                    <Text style={styles.textSecondary}>Instagram: @renan.gatti.1</Text>
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
    containerCards: {
        flexDirection: 'row',
        alignItems: 'center'
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
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
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
    }
})