
 import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Autocuidado from "./src/telas/Autocuidado/Autocuidado";
 import Login from "./src/components/Login";
import Cursos from "./src/components/Cursos";
import Cadastro from "./src/components/Cadastro";
// import Cadastro from './src/telas/Cadastro/Cadastro';
// import Formulario from './src/telas/Autocuidado/Autocuidado';
// import Calendario from './src/telas/Calendario/Calendario';
// import Menu from './src/telas/Menu/Menu';
// import LoginScreen from './src/telas/Login/LoginScreen';
// import Autocuidado from "./src/telas/Autocuidado/Autocuidado";
// import Cadastrar from "./src/components/Cadastrar";


const Stack = createStackNavigator();

export default function App(){
    return(
          //<Autocuidado/>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Cursos" component={Cursos}/>
              <Stack.Screen name="Cadastro" component={Cadastro}/>
         </Stack.Navigator>
        </NavigationContainer>
    )
};

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































