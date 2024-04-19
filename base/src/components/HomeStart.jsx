import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home = ({navigation}) => {
    return(
        <View style ={styles.container}>
            <Text style ={styles.title}>Senai</Text>

            <View style = {styles.buttonContainer}>
                <Button
                    title="Cadastrar"
                    onPress={()=> navigation.navigate('Cadastrar')}
                />
            </View>
            <View style ={styles.buttonContainer}>
                <Button
                    title="Listar"
                    onPress={()=> navigation.navigate('Listar')}
                />
            </View>
            <View style ={styles.buttonContainer}>
                <Button
                    title="Deletar"
                    onPress={()=> navigation.navigate('Deletar')}
                />
            </View>
            <View style ={styles.buttonContainer}>
                <Button
                    title="Atualizar"
                    onPress={()=> navigation.navigate('Atualizar')}
                />
            </View>
        </View>                             
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    buttonContainer:{
        marginBottom:10,
        width: '50%',
    },
});

export default Home;