import React, {createContext, useState} from "react";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const navigation = useNavigation()
    const [user, setUser] = useState({})

    function register(nome, phone){
        if(nome !=='' && phone !==''){
            setUser({
                nome: nome,
                phone: phone
            })
            navigation.navigate("Scheduling")
        }
    }

    return(
        <AuthContext.Provider value={{ nome: "Gabriel Sena", register, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider