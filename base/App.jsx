
 import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import Home from "./src/telas/Home/Home";

import LoginScreen from "./src/telas/Login/LoginScreen";
import Cadastro from "./src/telas/Cadastro/Cadastro"
import Menu from "./src/telas/Menu/Menu";

const Stack = createStackNavigator();

export default function App(){
    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
               <Stack.Screen name="LoginScreen" component={LoginScreen}/>
              <Stack.Screen name="Cadastro" component={Cadastro}/>
              <Stack.Screen name="Menu" component={Menu} />
         </Stack.Navigator>
        </NavigationContainer>

    )
};

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































