import React, {useState, useContext} from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Platform} from 'react-native'
import { propsStack } from '../routes/Stack/Models'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../contexts/auth'

import  Header  from '../components/header'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Card, Button } from 'react-native-paper';

import moment from 'moment';

// criar uma função para validar se os dois campos foram preenchidos, se validar avançar para a proxima tela

LocaleConfig.locales.BR = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abril', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
    today: "Hoje"
};
LocaleConfig.defaultLocale = 'BR';

const App = () => {
    const navigation = useNavigation()

    const [data, setdata] = useState('');
    const [hora, setHora] = useState('');
    const { DataHorario } = useContext(AuthContext)

    function confirmParaments (){
        console.log('Avançar')
        if(this.dataDoCalendario != '' && this.dataHorario != ''){
            DataHorario(data, hora)
        }else{
            alert("Selecione uma data e hora !");
        }

    }

    function dateHorario (hora){
        console.log(hora)
        if(hora != ''){
            this.dataHorario = hora;
            value = {hora}
        }
    }

    const [dataDoCalendario, setDataDoCalendario] = useState(moment().format('YYYY-MM-DD'));
    const onDayPress = (day) => {
        const novaData = day.dateString;
        setDataDoCalendario(novaData);
        value = {data}
    };
    
    return(
    <ScrollView style={styles.global}>

        {/* Header */}
        <View>
            <Header />
        </View >
        {/* Calendario */}
        <View style={styles.container}>
            < Calendar
                 onDayPress={onDayPress}
                 hideExtraDays={true}
                 hideArrows={true}


                 theme={{
                    calendarBackground: '#3B3F49',
                    dayTextColor: '#FAEDDF',
                    textDisabledColor: '#444',
                    monthTextColor: '#FAEDDF',
                  }}
            />
        <Text style={styles.textDateSelect}>Data selecionada: {moment(dataDoCalendario).format('DD/MM/YYYY')}</Text>

        </View>

        {/* Horarios */}


        <View style={styles.viewCard}>

            <Card style={styles.card}>  
                <TouchableOpacity>
                    <Button style={styles.textCards} onPress={() => dateHorario('09:00')}> 
                        09:00
                    </Button>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Button style={styles.textCards} onPress={() => dateHorario('18/05/2023' , '10:00')}>
                        10:00
                    </Button>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Button style={styles.textCards} onPress={() => dateHorario('18/05/2023' , '11:00')}>
                        11:00
                    </Button>
                </TouchableOpacity>
            </Card>
        </View>

        <View style={styles.viewCard}>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Button style={styles.textCards} onPress={() => dateHorario('18/05/2023' , '12:00')}>
                        12:00
                    </Button>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Button style={styles.textCards} onPress={() => dateHorario('18/05/2023' , '14:00')}>
                        14:00
                    </Button>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Button style={styles.textCards} onPress={() => dateHorario('18/05/2023' , '15:00')}>
                        15:00
                    </Button>
                </TouchableOpacity>
            </Card>
        </View>

        <View style={styles.viewCard}>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Button style={styles.textCards} onPress={() => dateHorario('18/05/2023' , '16:00')}>
                        16:00
                    </Button>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Button style={styles.textCards} onPress={() => dateHorario('18/05/2023' , '17:00')}>
                        17:00
                    </Button>
                </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
                <TouchableOpacity>
                    <Button style={styles.textCards} onPress={() => dateHorario('18/05/2023' , '18:00')}>
                        18:00
                    </Button>
                </TouchableOpacity>
            </Card>
        </View>

        <View style={styles.viewCard}>
        <Button  style={styles.button} mode="contained" onPress={confirmParaments} uppercase={true} >
            Continuar
        </Button>
        </View>

    </ScrollView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginBottom: 35,
      backgroundColor: '#FAEDDF'
    },
    dateComponente:{
        width: 350
    },
    global:{
        backgroundColor: '#FAEDDF'
    },
    viewCard: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        backgroundColor: '#3B3F49',
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10
    },
    textCards: {
        color: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        textAlign: 'center',
        paddingTop: 8,
        paddingBottom: 8,
    },
    button: {
        backgroundColor: '#F7A29E',
        fontFamily: 'RussoOne-Regular',
        fontSize: 18,
        marginBottom: 20
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'RussoOne-Regular',
    },
    textDateSelect:{
        color: '#3B3F49',
        fontSize: 14,
        fontFamily: 'RussoOne-Regular',
        textAlign: 'center',
        paddingTop: 10
    },
  });