import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, KeyboardAvoidingView, Platform, Alert, ImageBackground, StatusBar } from "react-native";
import styles from './Styles';
import { Input, Button, Icon, Text } from '@rneui/themed';
import { TextInputMask } from 'react-native-masked-text';

export default function InputMask() {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");


    const Msg = () => {

        let imc = Math.floor(peso / (altura * altura), 4);

        if (imc < 18.5) {
            Alert.alert("Resultado", 'Seu IMC é:' + imc + ' \n Situação é: Magreza');
        }
        if (imc > 18.5 <= 24.9) {
            Alert.alert("Resultado", 'Seu IMC é:' + imc + ' \nSituação é: Normal');
        }
        if (imc > 25.0 <= 29.9) {
            Alert.alert("Resultado", 'Seu IMC é:' + imc + ' \nSituação é: Sobrepeso');
        }
        if (imc > 30.0 <= 39.9) {
            Alert.alert("Resultado", 'Seu IMC é:' + imc + ' \nSituação é: Obesidade');
        }
        if (imc > 40.0) {
            Alert.alert("Resultado", 'Seu IMC é:' + imc + ' \nSituação é: Obesidade Grave');
        }

    };
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? "padding" : "height"}
            style={styles.container}
            KeyboardVerticalOffset={50}>
            <ImageBackground source={'../../../../res/img/imagemfundo.jpg'} style={{ height: '100%' }}>
                <StatusBar hidden />
                <ScrollView>
                    <View style={styles.divTitulo}>
                        <Text h1 style={styles.titulo}> Calcular IMC</Text>
                        <Icon type='font-awesome' name="user" color="#000" size={100} />
                    </View>
                    <View style={styles.formContato}>

                        <Input
                            style={[styles.inputContainerMask, styles.inputStyle]}
                            placeholder='Digite seu Peso em KG'
                            value={peso}
                            onChangeText={text => setPeso(text)}
                            keyboardType="numeric"
                        />
                        <Input
                            style={[styles.inputContainerMask, styles.inputStyle]}
                            placeholder='Digite sua altura em Metros'
                            value={altura}
                            onChangeText={text => setAltura(text)}
                            keyboardType="numeric"
                        />

                        <Button onPress={Msg} radius={"sm"} type="solid">
                            Calcular
                            <Icon style={{}} name="save" color="white" />
                        </Button>

                    </View>
                </ScrollView>
            </ImageBackground>

        </KeyboardAvoidingView>
    );
}
