import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from "./src/telas/Login/LoginScreen";
import Cadastro from "./src/telas/Cadastro/Cadastro"
import Home from "./src/telas/Home/Home";
import ReseteSenha from "./src/telas/Reset/Reset";
import Menu from "./src/telas/Menu/Menu";
import Perguntas from "./src/telas/Perguntas/Perguntas";
 import Calendario from "./src/telas/Calendario/Calendario";
 import Autocuidado from "./src/telas/Autocuidado/Autocuidado"
import Lembrete from "./src/telas/Lembrete/Lembrete";

const Stack = createStackNavigator();

export default function App(){
    return(
        <Perguntas/>
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Home">
        //         <Stack.Screen name="Home" component={Home} />
        //        <Stack.Screen name="Login" component={Login}/>
        //        <Stack.Screen name="Cadastro" component={Cadastro}/> 
        //        <Stack.Screen name="ReseteSenha" component={ReseteSenha} /> 
        //        <Stack.Screen name="Menu" component={Menu} />
        //        <Stack.Screen name="Perguntas" component={Perguntas} /> 
        //        <Stack.Screen name="Calendario" component={Calendario} /> 
        //        <Stack.Screen name="Autocuidado" component={Autocuidado} /> 
        //        <Stack.Screen name="Lembrete" component={Lembrete} /> 
            
        //  </Stack.Navigator>
        // </NavigationContainer>

    )
};
