import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../routes/Stack/Models'

const Header = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={styles.containerHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={{ width: 30, height: 30, marginTop: 15 }} source={require('../assets/voltar.png')} />
            </TouchableOpacity>

            <Image style={styles.barba} source={require('../assets/barba.png')} />

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={{ width: 30, height: 30, marginTop: 15, }} source={require('../assets/proximo.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#3B3F49'
    },
    barba: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60, 
        height: 55, 
        marginTop: 7,
    }
})