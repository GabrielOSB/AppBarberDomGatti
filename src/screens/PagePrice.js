import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { propsStack } from '../routes/Stack/Models'
import { useNavigation } from '@react-navigation/native'

import Header from '../components/header'
import { Card, Button } from 'react-native-paper';

const App = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={style.global}>

            <View>
                <Header />
            </View>

            <View style={style.containerCard}>

                <View style={style.cardLeft}>

                    <View>
                        <TouchableOpacity>
                            <Card style={style.cards}>
                                <Card.Content>
                                    <View>
                                        <Text style={style.textCardTitle}> Cabelo </Text>
                                        <Text style={style.textCard}> R$30,00 </Text>
                                    </View>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>

                        <TouchableOpacity>
                            <Card style={style.cards}>

                                <Card.Content>
                                    <View>
                                        <Text style={style.textCardTitle}> Cabelo + Barba </Text>
                                        <Text style={style.textCard}> R$50,00 </Text>
                                    </View>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                    <View>

                        <TouchableOpacity>
                            <Card style={style.cards}>
                                <Card.Content>
                                    <View>
                                        <Text style={style.textCardTitle}> Barba </Text>
                                        <Text style={style.textCard}> R$20,00 </Text>
                                    </View>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity>

                            <Card style={style.cards}>
                                <Card.Content>
                                    <View>
                                        <Text style={style.textCardTitle}> Cabelo + Tingimento {'\n'} de Cabelo </Text>
                                        <Text style={style.textCard}> R$70,00 </Text>
                                    </View>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <Button style={style.button} mode="contained" onPress={() => navigation.navigate("Confirm")} uppercase={true} >
                    Confirmar
            </Button>

        </ScrollView>
    )
}

export default App

const style = StyleSheet.create({
    global: {
        backgroundColor: '#FAEDDF',
    },

    containerCard: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
    },

    cardLeft: {
        marginRight: 20,
    },

    cards: {
        marginBottom: 20,
        backgroundColor: '#3B3F49'
    },

    textCardTitle: {
        textAlign: 'center',
        color: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
    },

    textCard: {
        marginTop: 10,
        textAlign: 'center',
        color: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
    },

    button: {
        backgroundColor: '#F7A29E',
        marginEnd: 80,
        marginStart: 80,
        marginTop: 25
    }
})