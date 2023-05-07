import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../routes/Stack/Models'

const Button = () => {
    const navigation = useNavigation<propsStack>()
    return (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Option")}>
            <Text style={styles.text}>CONTINUE</Text>
            </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        width: 190,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'RussoOne-Regular',
    }
})