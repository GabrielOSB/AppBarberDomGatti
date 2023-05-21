import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const apiKey = 'nXcqgTjPL69FTZyrPGj8Ah831G2niLMSU63LtEysWYMz9gPdd2p6s5pZ946mBolasxzXXxS';
const baseUrl = 'https://5918-189-110-126-117.ngrok-free.app';

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const navigation = useNavigation()
    const [user, setUser] = useState({})
    const [dataHorario, setdataHorario] = useState({})

    function register(nome, telefone) {


        if (nome !== '' && telefone !== '') {

            axios.post(baseUrl + '/api/Customer/create', {
                "nome": nome,
                "telefone": telefone
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Dev-Key': apiKey
                }
            }).then(response => {
                if (response.data.success) {
                    setUser({
                        nome: nome,
                        telefone: telefone,
                        //id: response.data.customerId
                    });
                    navigation.navigate("Scheduling")

                } else {
                    alert('Preencha todos os campos !')
                }
            }).catch(error => {
                //colocar um toltip avisando que ocorreu um erro
                console.error(error);
                alert("Serviço Indisponivel no momento");
            });
        }
    }

    function DataHorario(data, hora){
        if (data !== undefined && hora !== undefined){
            setdataHorario({
                data: '21/05/2023',
                hora: '09:00',
                status: 'ativo'
            });
            navigation.navigate("Price")
        }
    }

    return (
        <AuthContext.Provider value={{ register, user, DataHorario, dataHorario}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider