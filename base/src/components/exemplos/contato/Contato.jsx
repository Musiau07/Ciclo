import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./Styles";
import { Input, Button, Icon, Text } from '@rneui/themed';

export default function Contato() {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.divTitulo}>
                <Text h1 style={styles.titulo}> Contato </Text>
                {/* <Text h1> {nome} </Text>
               <Text h1> {email} </Text>
               <Text h1> {telefone} </Text> */}

            </View>
            <View style={styles.formConato}>

                <Input
                    placeholder='Digite seu nome'
                    leftIcon={{ type: 'font-awesome', name: 'User' }}
                    onChangeText={value => setNome(value)}
                />
                <Input
                    placeholder='Digite se email'
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={value => setEmail(value)}
                />
                <Input
                    placeholder='Digite seu telefone'
                    leftIcon={{ type: 'font-awesome', name: 'phone' }}
                    onChangeText={value => setTelefone(value)}
                />
                <Button radius={"sm"} type="solid">
                    Enviar
                    <Icon name="save" color="white" />
                </Button>
            </View>
            
            <View style={styles.formFooter}></View>

        </SafeAreaView>
    );
}