import React, { useState } from 'react';
import { View, Button, TextInput, Alert, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';


const ResetSenha = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleResetSenha = async () => {
        if (!email) {
            Alert.alert("por favor, insira seu email")
        }

        const data = {
            email: email
        }

        try {

            // verificar se o email existe nobanco de dados:
            const response = await axios.post('http://localhost:8085/api', data);

            if (response.status === 200) {
                // exibir o formulario para trocar a senha:
                setMostrarFormulario(true);
            }
            else if (response.status === 404) {
                Alert.alert('Email não encontrado. Verfique o email digitado')
            }
        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                Alert.alert('email nõ encontrado. Verifique o email digitado');
            }
            else {
                Alert.alert('erro ao resetar a senha:', error);
            }
        }
    };

    const handleTrocarSenha = async () => {
        // verificar se as senhas coincidem:
        if (novaSenha !== confirmaSenha) {
            Alert.alert("A senhas não coincidem");
            return;
        }


        const data = {
            email: email,
            senha: novaSenha
        }

        try {

            // fazer solicitação para trocar a senha:
            const response = await axios.post('http://localhost:8085/api', data);

            if (response.status === 200) {
                navigation.navigate('LoginAP');
                Alert.alert("Senha trocada com sucesso");
            }
            else {
                Alert.alert('Erro ao trocar a senha');
            }
        }
        catch (error) {
            Alert.alert('Erro ao trocar a senha', error);

        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>esqueceu a senha?</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />
            {!mostrarFormulario && (
                <Button title='Resetar Senha' onPress={handleResetSenha} />
            )}
            {mostrarFormulario && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder='Nova Senha'
                        value={novaSenha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Confirmar Senha'
                        value={confirmaSenha}
                        onChangeText={setConfirmaSenha}
                        secureTextEntry
                    />
                    <Button title='Trocar Senha' onPress={handleTrocarSenha} color={"red"} />

                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default ResetSenha;