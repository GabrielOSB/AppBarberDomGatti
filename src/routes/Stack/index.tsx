import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/PageHome"
import Options from "../../screens/PageOptions"
import Scheduling from "../../screens/PageScheduling"
import Contato from "../../screens/PageContato"
import Maps from "../../screens/PageMaps"
import Register from "../../screens/PageRegister"
import Cancellation from "../../screens/PageCancellation"
import Price from "../../screens/PagePrice"
import Confirm from "../../screens/PageConfirm"

import { propsNavigationStack } from "./Models";

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} /> 
            <Screen name="Option" component={Options} /> 
            <Screen name="Scheduling" component={Scheduling} /> 
            <Screen name="Contato" component={Contato} /> 
            <Screen name="Maps" component={Maps} /> 
            <Screen name="Register" component={Register} /> 
            <Screen name="Cancellation" component={Cancellation} /> 
            <Screen name="Price" component={Price} /> 
            <Screen name="Confirm" component={Confirm} /> 
        </Navigator>
    )
}