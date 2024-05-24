import React, { useState } from 'react';
import { View, Button, TextInput, Text, Alert, Image, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import styles from './style';

const ResetSenha = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleResetSenha = async () => {
        try {
            //verificar se o email está prenchido
            if (!email) {
                Alert.alert("Por favor, insira seu email");
            }

            const data = {
                email: email
            }

            //verificar se o email existe no banco de dados
            const response = await axios.post('http://10.0.2.2:8085/api/reset', data);

            if (response.status === 200) {
                //exibir o formulario para trocar a senha
                setMostrarFormulario(true);
            }
            else if (response.status === 404) {
                Alert.alert('email não encontrado. verifique o email digitado')
            }
        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                console.log(error)
                Alert.alert('email não encontrado. Verifique o email digitado');
            }
            else {
                console.log(error)
                Alert.alert('erro ao resetar a senha:', error);
            }
        }
    };

    const handleTrocarSenha = async () => {
        try {
            //verificar se as senhas coincidem
            if (novaSenha !== confirmaSenha) {
                Alert.alert("as senhas não coincidem");
                return;
            }

            const data = {
                email: email,
                senha: novaSenha
            }

            //fazer a solicitação para trocar a senha
            const response = await axios.post('http://10.0.2.2:8085/api/resetPassword', data);

            if (response.status === 200) {
                navigation.navigate('LoginScreen');
                Alert.alert("senha trocada com sucesso");
            }
            else {
                Alert.alert('erro ao trocar a senha');
            }
        }
        catch (error) {
            Alert.alert('erro ao trocar a senha', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Esqueceu sua senha</Text>
            <TextInput placeholderTextColor={'white'}
                style={styles.input}
                placeholder='Digite sue email'
                value={email}
                onChangeText={setEmail}
            />
            {!mostrarFormulario && (
                <Button title='Resetar senha' onPress={handleResetSenha} color={"#3cdf32"} />
            )}
            {mostrarFormulario && (
                <>
                    <TextInput placeholderTextColor={'white'}
                        style={styles.input}
                        placeholder='Nova Senha'
                        value={novaSenha}
                        onChangeText={setNovaSenha}
                        secureTextEntry
                    />
                    <TextInput placeholderTextColor={'white'}
                        style={styles.input}
                        placeholder='Confirmar senha'
                        value={confirmaSenha}
                        onChangeText={setConfirmaSenha}
                        secureTextEntry
                    />
                    <Button title='Trocar Senha' onPress={handleTrocarSenha} color={"#3cdf32"} />
                </>
            )}
        </View>
    );
}

export default ResetSenha;
