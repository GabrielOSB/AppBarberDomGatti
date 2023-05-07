import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

import  Button  from '../components/button'

const Home = () => {
  return(
    <View style={styles.container}>
        <Image style={{width: 100, height: 100}} source={require('../assets/barba.png')} />
        <Text style={styles.font10}>BARBEARIA DOM GATTI</Text>
        <Text style={styles.font20}>BARBER{'\n'}SHOP</Text>
        <Button />

    </View>
  )
}


export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B3F49'
  },
  font10: {
    fontSize: 13,
    color: '#FAEDDF',
    textAlign: 'center',
    fontFamily: 'RussoOne-Regular',
    paddingBottom: 5,
  },
  font20:{
    fontSize: 30,
    color: '#FAEDDF', 
    textAlign: 'center',
    fontFamily: 'RussoOne-Regular',
    paddingBottom: 35,
  },
})