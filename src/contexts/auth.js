import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const apiKey = 'nXcqgTjPL69FTZyrPGj8Ah831G2niLMSU63LtEysWYMz9gPdd2p6s5pZ946mBolasxzXXxS';
const baseUrl = 'https://6249-2804-7f0-be42-bbe1-2025-5204-8e4a-6380.ngrok-free.app';

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const navigation = useNavigation()
    const [user, setUser] = useState({})

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
                    //colocar um toltip de informação 
                }
            }).catch(error => {
                //colocar um toltip avisando que ocorreu um erro
                console.error(error);
            });
        }
    }

    return (
        <AuthContext.Provider value={{ register, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider